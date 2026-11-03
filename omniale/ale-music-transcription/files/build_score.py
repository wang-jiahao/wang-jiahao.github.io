"""Build every deliverable's notation from a single analyzed event list."""
import json
import math
from collections import defaultdict
from fractions import Fraction
from pathlib import Path
import xml.etree.ElementTree as ET
from music21 import stream, note, chord, duration, meter, tempo, key, clef, metadata, instrument, dynamics, expressions, articulations, layout, bar, interval, spanner

ROOT=Path('/media/user/data/agenthle/visual_media/music_transcription/dorico_prelude')
BRIEF=json.loads((ROOT/'input/task_brief.json').read_text())
OUT=ROOT/'output'
BPM=BRIEF['tempo_bpm']
BAR=6
N_BARS=50
TOTAL=BAR*N_BARS

ABBREVIATIONS=['Fl. 1','Fl. 2','Ob.','Cl. 1','Cl. 2','Bsn. 1','Bsn. 2','Cbsn.','Hn. 1','Hn. 2','Hn. 3','Hn. 4','Tpt.','Tbn. 1','Tbn. 2','B. Tbn.','Tba.','Timp.','Glk.','Cym.','Hp.','Keys','Vln. I','Vln. II','Vla.','Vc.','Cb.']
NAMES=['Flute 1','Flute 2','Oboe','Clarinet in B-flat 1','Clarinet in B-flat 2','Bassoon 1','Bassoon 2','Contrabassoon','Horn in F 1','Horn in F 2','Horn in F 3','Horn in F 4','Trumpet in B-flat','Trombone 1','Trombone 2','Bass Trombone','Tuba','Timpani','Glockenspiel','Clash Cymbal','Harp','Keys','Violin I (10)','Violin II (8)','Viola (6)','Violoncello (4)','Contrabass (2)']
TRANSPOSE={3:2,4:2,7:12,8:7,9:7,10:7,11:7,12:2,18:-24,26:12}

def make_instrument(i):
    obj=instrument.Instrument()
    obj.partId=f'P{i+1}'
    obj.instrumentId=f'I{i+1}'
    obj.instrumentName=NAMES[i]
    obj.partName=NAMES[i]
    obj.instrumentAbbreviation=ABBREVIATIONS[i]
    obj.partAbbreviation=ABBREVIATIONS[i]
    obj.midiProgram=BRIEF['instruments'][i]['gm_program']
    obj.midiChannel=9 if i==19 else (i%15 if i%15<9 else i%15+1)
    if i in TRANSPOSE:obj.transposition=interval.Interval(-TRANSPOSE[i])
    return obj

def qround(value,step=.5):return round(value/step)*step

def duration_parts(offset,length):
    """Split at metric groups and standard durations, preserving exact totals."""
    values=[6,4,3,2,1.5,1,.75,.5,.375,.25,.125]
    out=[]
    while length>.0001:
        remain=BAR-offset%BAR
        cap=min(length,remain)
        if cap>3 and offset%3!=0:cap=min(cap,3-offset%3)
        choices=[v for v in values if v<=cap+.0001]
        val=max(choices) if choices else cap
        out.append(val);offset+=val;length-=val
    return out

def create_score(events):
    score=stream.Score(id='DoricoPrelude')
    score.metadata=metadata.Metadata()
    score.metadata.title=BRIEF['title'];score.metadata.composer=BRIEF['composer']
    score.metadata.movementName=BRIEF['title']
    score.insert(0,layout.ScoreLayout(scalingMillimeters=5.2,scalingTenths=40))
    parts=[]
    for i in range(len(NAMES)):
        part=stream.Part(id=f'P{i+1}')
        part.partName=NAMES[i];part.partAbbreviation=ABBREVIATIONS[i]
        part.insert(0,make_instrument(i))
        for m in range(N_BARS):
            measure=stream.Measure(number=m+1)
            if m==0:
                measure.insert(0,meter.TimeSignature('6/4'))
                sharps=2 if i in [3,4,12] else 1 if i in [8,9,10,11] else 0
                measure.insert(0,key.KeySignature(sharps))
                cl=BRIEF['instruments'][i]['clef']
                measure.insert(0,{'treble':clef.TrebleClef,'bass':clef.BassClef,'percussion':clef.PercussionClef}[cl]())
                if i==0:measure.insert(0,tempo.MetronomeMark(text='Allegro',number=BPM))
            if m==N_BARS-1:measure.rightBarline=bar.Barline('final')
            part.append(measure)
        parts.append(part);score.insert(0,part)
    groups=[(0,4,'Woodwinds'),(5,7,'Bassoons'),(8,11,'Horns'),(12,16,'Brass'),(17,19,'Percussion'),(22,26,'Strings')]
    for first,last,name in groups:
        group=layout.StaffGroup(parts[first:last+1],name=name,abbreviation=name,symbol='bracket',barTogether=False)
        score.insert(0,group)
    bypart=defaultdict(list)
    for event in events:bypart[event['part']].append(event)
    for i,part in enumerate(parts):
        es=sorted(bypart[i],key=lambda e:(e['onset'],e['pitch']))
        if i in [22,23,24,25,26] and es:
            first_poly=next((e['onset'] for e in es if sum(n['onset']<=e['onset']<n['offset'] for n in es)>1),None)
            if first_poly is not None:
                text=expressions.TextExpression('div.');text.placement='above'
                part.measure(int(first_poly//BAR)+1).insert(first_poly%BAR,text)
        # Split polyphony at every boundary and tie held chord tones individually.
        voices=[[e for e in es if e['pitch']>=60],[e for e in es if e['pitch']<60]] if i in [20,21] else [es]
        for voice_no,voice_events in enumerate(voices):
            for m,measure in enumerate(part.getElementsByClass(stream.Measure)):
                v=stream.Voice(id=1 if voice_no==0 else 5)
                relevant=[e for e in voice_events if e['onset']<(m+1)*BAR-.00001 and e['offset']>m*BAR+.00001]
                boundaries=sorted(set([m*BAR,(m+1)*BAR]+[max(m*BAR,e['onset']) for e in relevant]+[min((m+1)*BAR,e['offset']) for e in relevant]))
                for start,end in zip(boundaries,boundaries[1:]):
                    active=[e for e in relevant if e['onset']<=start+.00001 and e['offset']>=end-.00001]
                    if not active:
                        if not relevant:
                            rest=note.Rest(quarterLength=BAR);rest.fullMeasure=True;v.insert(0,rest);break
                        pos=start
                        for d in duration_parts(start,end-start):
                            v.insert(pos-m*BAR,note.Rest(quarterLength=d));pos+=d
                        continue
                    pos=start
                    for dur in duration_parts(start,end-start):
                        unique={e['pitch']:e for e in active}
                        notes=[]
                        from music21 import tie
                        for event in unique.values():
                            n=note.Note(int(event['pitch'])+TRANSPOSE.get(i,0),quarterLength=dur)
                            n.volume.velocity=int(event.get('velocity',72));n.volume.velocityIsRelative=False
                            before=pos>event['onset']+.00001;after=pos+dur<event['offset']-.00001
                            if before or after:n.tie=tie.Tie('continue' if before and after else 'stop' if before else 'start')
                            notes.append(n)
                        if i==19:
                            obj=note.Unpitched(quarterLength=dur);obj.displayStep='C';obj.displayOctave=5
                            obj.volume.velocity=notes[0].volume.velocity;obj.volume.velocityIsRelative=False
                        elif len(notes)==1:obj=notes[0]
                        else:obj=chord.Chord(notes,quarterLength=dur)
                        attacks=[e for e in active if abs(e['onset']-pos)<.00001]
                        for art in sorted(set(a for e in attacks for a in e.get('articulations',[]))):
                            cls={'staccato':articulations.Staccato,'tenuto':articulations.Tenuto,'accent':articulations.Accent}.get(art)
                            if cls:obj.articulations.append(cls())
                        for text in sorted(set(e['technique'] for e in attacks if e.get('technique'))):
                            obj.expressions.append(expressions.TextExpression(text))
                        v.insert(pos-m*BAR,obj);pos+=dur
                measure.insert(0,v)
        # Expressive levels are taken from event velocities, with stable printed changes.
        prior=None
        dynlevels=[(38,'ppp'),(50,'pp'),(62,'p'),(74,'mp'),(86,'mf'),(100,'f'),(114,'ff'),(128,'fff')]
        for event in es:
            vel=event.get('velocity',72)
            symbol=next(symbol for cap,symbol in dynlevels if vel<cap)
            if symbol!=prior and (prior is None or event.get('print_dynamic',False)):
                m=min(N_BARS-1,int(event['onset']//BAR));off=event['onset']%BAR
                dyn=dynamics.Dynamic(symbol);dyn.volumeScalar=vel/127
                part.measure(m+1).insert(off,dyn);prior=symbol
        current=BRIEF['instruments'][i]['clef']
        for m in part.getElementsByClass(stream.Measure):
            pitches=[n.pitch.midi for n in m.recurse().getElementsByClass(note.Note)]
            if not pitches or m.number==1 or i in [19,20,21]:continue
            mid=sorted(pitches)[len(pitches)//2]
            desired=current
            if i==24:desired='alto' if mid<79 else 'treble'
            elif current=='bass' and mid>65:desired='treble'
            elif current=='treble' and mid<55:desired='bass'
            if desired!=current:
                m.insert(0,{'treble':clef.TrebleClef,'bass':clef.BassClef,'alto':clef.AltoClef}[desired]())
                current=desired
    score.atSoundingPitch=False
    return score

def patch_xml(path):
    tree=ET.parse(path);root=tree.getroot()
    root.set('version','3.1')
    defaults=root.find('defaults')
    if defaults is None:defaults=ET.SubElement(root,'defaults')
    page=ET.SubElement(defaults,'page-layout')
    ET.SubElement(page,'page-height').text='3230.769'
    ET.SubElement(page,'page-width').text='2284.615'
    margins=ET.SubElement(page,'page-margins',type='both')
    for k,v in [('left-margin','92.308'),('right-margin','92.308'),('top-margin','92.308'),('bottom-margin','92.308')]:ET.SubElement(margins,k).text=v
    for i,p in enumerate(root.findall('./part-list/score-part')):
        midi=p.find('midi-instrument')
        if midi is None:midi=ET.SubElement(p,'midi-instrument',id=f'I{i+1}')
        prog=BRIEF['instruments'][i]['gm_program']
        child=midi.find('midi-program')
        if prog is not None:
            if child is None:child=ET.SubElement(midi,'midi-program')
            child.text=str(prog+1)
        if i==19:
            unpit=midi.find('midi-unpitched')
            if unpit is None:unpit=ET.SubElement(midi,'midi-unpitched')
            unpit.text='50'
    for index in [20,21]:
        part=root.findall('part')[index]
        first=part.find('measure/attributes')
        staves=ET.Element('staves');staves.text='2'
        oldclefs=first.findall('clef')
        location=list(first).index(oldclefs[0]) if oldclefs else len(first)
        for old in oldclefs:first.remove(old)
        first.insert(location,staves)
        for staffno,sign,line in [(1,'G',2),(2,'F',4)]:
            cl=ET.Element('clef',number=str(staffno));ET.SubElement(cl,'sign').text=sign;ET.SubElement(cl,'line').text=str(line)
            first.insert(location+staffno,cl)
        for n in part.findall('./measure/note'):
            staffno=2 if n.findtext('voice')=='5' else 1
            staff=ET.Element('staff');staff.text=str(staffno)
            children=list(n);place=next((j for j,c in enumerate(children) if c.tag in ['beam','notations','lyric']),len(children))
            n.insert(place,staff)
    tree.write(path,encoding='utf-8',xml_declaration=True)

if __name__=='__main__':
    events=json.loads(Path('score_events.json').read_text())
    score=create_score(events)
    score.write('musicxml',fp='complete_score.musicxml')
    patch_xml('complete_score.musicxml')
    print('Created complete_score.musicxml:',len(events),'events in',len(score.parts),'parts')
