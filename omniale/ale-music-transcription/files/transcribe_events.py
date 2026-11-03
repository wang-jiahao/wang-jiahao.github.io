import os
os.environ['OPENBLAS_NUM_THREADS']='4'
import json
from pathlib import Path
from collections import defaultdict,Counter
import numpy as np
from scipy.ndimage import gaussian_filter1d,median_filter,binary_closing
from scipy.signal import stft
from scipy.optimize import linear_sum_assignment
import soundfile as sf

BPM=140;BEAT=60/BPM;END=300
d=np.load('decomposition.npz',allow_pickle=True);t=d['t'];H=d['h'];labels=d['labels']
dt=float(t[1]-t[0])
pitch=np.load('pitch_activations.npy')
neural=json.loads(Path('mt3_events.json').read_text())
groups=defaultdict(lambda:np.zeros_like(pitch))
for lab,h in zip(labels,H):
    program=int(lab[1]);program=40 if program in [45,48] else program
    groups[program][int(lab[2])-24]+=h
for p in groups:groups[p]=gaussian_filter1d(groups[p],3,axis=1)

y,sr=sf.read('reference.wav');x=y.mean(axis=1)
freq,ts,z=stft(x,sr,nperseg=8192,noverlap=8192-220)
mag=abs(z).astype('float32')

def tonal_support(p,a,b):
    f=440*2**((p-69)/12)
    cols=(ts>=a)&(ts<=b)
    if cols.sum()<2:return 0
    spec=np.mean(mag[:,cols],axis=1)
    center=(freq>=f*2**(-.38/12))&(freq<=f*2**(.38/12))
    neighbor=(freq>=f*2**(-1.2/12))&(freq<=f*2**(1.2/12))&~center
    if not np.any(center):return 0
    peak=float(spec[center].max())
    flank=float(np.median(spec[neighbor])) if np.any(neighbor) else 1e-8
    return peak/max(flank,1e-8)

def onset_strength(p,time):
    # An attack must increase spectral energy across several partials together.
    f=440*2**((p-69)/12)
    bins=np.zeros(len(freq),bool)
    for k in range(1,6):bins|=abs(freq-f*k)<max(5,f*k*.012)
    before=(ts>=time-.10)&(ts<time-.025)
    after=(ts>=time+.015)&(ts<time+.10)
    if not np.any(before) or not np.any(after):return 0
    old=mag[bins][:,before].mean(axis=1);new=mag[bins][:,after].mean(axis=1)
    return float(np.maximum(new-old,0).sum()/max(new.sum(),1e-8))

def amp(p,a,b):
    cols=(t>=a)&(t<=b)
    return float(np.median(pitch[p-24,cols])) if cols.any() and 24<=p<=96 else 0

def snap(time,step=.5):return round(time/BEAT/step)*step

def choose_program(p,a,b,prior=None):
    cols=(t>=a)&(t<=b)
    if not cols.any():return 40
    values={k:float(np.mean(v[p-24,cols])) for k,v in groups.items() if k in [0,9,40,41,42,43,46,47,57,58,60,68,70,73]}
    if prior in [40,41,42,43]:values[prior]=values.get(prior,0)*1.8+.08
    if p<45:
        for k in [9,40,41,68,73]:values[k]=0
    elif p<53:
        for k in [9,40,68]:values[k]=0
    if p>84:
        for k in [43,47,57,58,70]:values[k]=0
    if p>67:values[58]=0
    if p>76:values[57]=0
    if p>81:values[60]=0;values[70]=0
    if p<58:values[68]=0
    if p<65:values[9]=0
    return max(values,key=values.get)

events=[]
# Retain model proposals only with a resolvable fundamental or corroborating spectrum.
for n in neural:
    p=n['pitch'];a=n['start'];b=min(n['end'],128.57);dur=b-a;prog=n['program']
    if n['drum'] or not (28<=p<=96) or dur<.045 or b<=a:continue
    support=tonal_support(p,a,b)
    level=amp(p,a,b)
    attack=onset_strength(p,a)
    if support<1.8 and level<.23:continue
    if dur<.22 and (attack<.20 or support<2.5):continue
    if p>=90 and level<.30:continue
    if prog in [0,4,8,24,26,33,46] and dur<.36 and attack<.24:continue
    if prog in [40,41,42]:assigned=prog
    elif prog in [48,50,88]:assigned=choose_program(p,a,b,prior=40 if p>=55 else 42)
    elif prog==73:assigned=73
    elif prog==60:assigned=60
    elif prog in [0,4,8,24,26,33]:assigned=0 if prog not in [8] else 9
    elif prog==46:assigned=46
    else:assigned=choose_program(p,a,b)
    # The brief fixes synthesis programs independently of the acoustic timbre label.
    events.append({'pitch':p,'start':a,'end':b,'program':assigned,'amp':level,'source':'model+spectrum','attack':attack})

# Recover sustained layers that the sequence model drops at chunk boundaries.
for p in range(28,91):
    row=gaussian_filter1d(pitch[p-24],5)
    localmax=median_filter(row,size=801)
    threshold=np.maximum(.13,np.minimum(.38,localmax*.65))
    mask=binary_closing(row>threshold,structure=np.ones(23))
    edges=np.diff(np.pad(mask.astype('int8'),(1,1)))
    for a,b in zip(np.where(edges==1)[0],np.where(edges==-1)[0]):
        start=float(t[a]);end=float(t[min(b,len(t)-1)])
        if end-start<.65 or start<4.9 or start>128:continue
        level=float(np.median(row[a:b]));peak=float(np.max(row[a:b]))
        if level<.18 or tonal_support(p,start,end)<2.0:continue
        overlapping=[e for e in events if e['pitch']==p and min(e['end'],end)-max(e['start'],start)>.1]
        coverage=sum(max(0,min(e['end'],end)-max(e['start'],start)) for e in overlapping)
        if coverage>(end-start)*.7:continue
        if p>=72 and level<.29:continue
        if p in [61,63,68,71,73,75,77,80,85,87,89] and peak<.65:continue
        program=choose_program(p,start,end)
        events.append({'pitch':p,'start':start,'end':end,'program':program,'amp':level,'source':'sustained spectrum','attack':onset_strength(p,start)})

# The opening exposes three independent low string fundamentals.
for p,program in [(57,40),(55,40),(52,41)]:
    events=[e for e in events if not (e['pitch']==p and e['end']<23.15)]
    events.append({'pitch':p,'start':12*BEAT,'end':54*BEAT,'program':program,'amp':amp(p,5.2,12.7),'source':'exposed opening','attack':.6})

# Merge overlapping estimates of the same line rather than doubling it.
merged=[]
for p in sorted({e['pitch'] for e in events}):
    notes=sorted([e for e in events if e['pitch']==p],key=lambda e:e['start'])
    for e in notes:
        prior=next((m for m in reversed(merged) if m['pitch']==p and e['start']<=m['end']+.055 and (m['source']=='sustained spectrum' or e['source']=='sustained spectrum' or e['start']<m['end']-.02)),None)
        if prior is not None:
            oldlen=prior['end']-prior['start'];newlen=e['end']-e['start']
            if newlen>oldlen:prior['program']=e['program'];prior['source']=e['source']
            prior['start']=min(prior['start'],e['start']);prior['end']=max(prior['end'],e['end']);prior['amp']=max(prior['amp'],e['amp'])
        else:merged.append(e.copy())

# Allocate same-family lines to the named players, favoring continuity and register.
pools={0:[21],9:[18],40:[22,23],41:[24],42:[25],43:[26],46:[20],47:[17],57:[13,14,15],58:[16],60:[8,9,10,11],68:[2],70:[5,6,7],73:[0,1,3,4,12]}
centers={0:82,1:77,2:74,3:65,4:54,5:55,6:48,7:36,8:66,9:62,10:57,11:52,12:70,13:58,14:52,15:44,16:43,17:43,18:86,20:65,21:65,22:79,23:70,24:59,25:48,26:37}
state={i:{'end':-1,'pitch':centers.get(i,60)} for i in range(27)}
result=[]
for e in sorted(merged,key=lambda e:(e['start'],-e['pitch'])):
    p=e['pitch'];program=e['program']
    if program in [40,41,42,43]:
        if p>77:program=40
        if p<42:program=43
        elif p<53:program=42 if program not in [41] else 41
        elif p<60 and program in [42,43]:program=42
    if program==0 and p>=79 and e['end']-e['start']>1.8 and e['attack']<.25:
        program=73
    pool=pools.get(program,[22])
    def cost(i):
        busy=max(0,state[i]['end']-e['start'])
        continuity=abs(state[i]['pitch']-p) if e['start']-state[i]['end']<2 else abs(centers.get(i,60)-p)
        return min(busy,8)*12+continuity*.5+abs(centers.get(i,60)-p)*.2
    part=min(pool,key=cost)
    step=.25 if e['end']-e['start']<.28 and e['attack']>.25 else .5
    on=max(0,snap(e['start']-.018,step));off=min(END,snap(e['end']-.04,step))
    if off<=on:off=min(END,on+step)
    if off<=on:continue
    if off-on<.5 and e['amp']<.15:continue
    velocity=int(np.clip(56+25*np.log2(max(e['amp'],.10)/.3),36,112))
    arts=[]
    if off-on<=.5 and e['attack']>.35:arts=['staccato']
    elif e['attack']>.65 and e['amp']>.6:arts=['accent']
    result.append({'part':part,'pitch':p,'onset':on,'offset':off,'velocity':velocity,'articulations':arts,'source':e['source'],'amplitude':e['amp']})
    state[part]={'end':e['end'],'pitch':p}

# Broad unpitched attacks are independent of the pitched bass notes.
for beat in [84,132,174,222,246,282,298]:
    time=beat*BEAT
    i=int(time*sr);before=np.sqrt(np.mean(x[max(0,i-int(.12*sr)):i]**2));after=np.sqrt(np.mean(x[i:i+int(.20*sr)]**2))
    velocity=int(np.clip(72+35*np.log2(max(after,1e-5)/max(before,.007)),48,112))
    result.append({'part':19,'pitch':49,'onset':beat,'offset':min(END,beat+2),'velocity':velocity,'technique':'l.v.','source':'broadband attack'})

# Remove exact duplicated estimates after quantization.
unique={}
for e in result:
    k=(e['part'],e['pitch'],e['onset'])
    if k not in unique or e['offset']>unique[k]['offset']:unique[k]=e
result=sorted(unique.values(),key=lambda e:(e['part'],e['onset'],e['pitch']))
for part in range(27):
    notes=[e for e in result if e['part']==part]
    priorvel=None;lastprint=-99
    for e in notes:
        if priorvel is None or (abs(e['velocity']-priorvel)>15 and e['onset']-lastprint>=6):
            e['print_dynamic']=True;priorvel=e['velocity'];lastprint=e['onset']
    print(part,len(notes),[(e['pitch'],e['onset'],e['offset']) for e in notes[:12]])
Path('score_events.json').write_text(json.dumps(result,indent=2))
print('Final estimated events:',len(result),'active instruments',len(set(e['part'] for e in result)))
