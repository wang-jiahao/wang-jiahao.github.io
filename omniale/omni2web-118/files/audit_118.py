"""Versioned audit of sample 118. Never edits benchmark data or model submissions."""
from __future__ import annotations

from concurrent.futures import ThreadPoolExecutor
from collections import Counter
from datetime import datetime
from io import BytesIO
from pathlib import Path
import copy
import hashlib
import html
import json
import re
import sys
import time

from bs4 import BeautifulSoup
import numpy as np
from PIL import Image, ImageOps
from playwright.sync_api import sync_playwright
import requests

from continue_codex import ROOT, OUT, EVAL, credentials, records, now, write
sys.path.insert(0, str(EVAL))
from scorer import final_state as fs
from scorer.llm_client import OpenAIResponsesClient
from scorer.step3_no_damage import html_structured_diff, llm_assess_damage
from scorer._types import GeminiTaskClient

DEST = OUT / 'audit118-v2'
VERSION = '118-audit-v2'
DISPUTED = {
    4: '口述的三个“这个”分别随光标经过不同按钮，原标注却要求所有btn-ghost都具备三项变化；不能可靠要求全类统一修改。',
    5: '57–60s光标停在View Credentials，61–62.5s在页脚社交区域；未见从社交按钮指向顶部Start a Project的证据。原锚点与目的地不可靠。',
    9: '103–106s光标经过HERO多张预览图片及标签，口述“这些全部隐藏”；仅标签条还是预览组合，范围存在实质歧义。',
    10: '114–122s光标依次经过不同TRUST卡片，口述对“这个”改背景/边框/文字；无法要求三张卡片每项属性都统一变化。',
    15: '171.5–174.5s指示位于页脚二维码和其左侧空白；顶部HERO在178.5s才出现，已进入下一句。原标注的HERO目的地缺少同步支持。',
}
STEP_TIMES = [(0,10),(10,17),(17,43),(43,56),(56,64),(64,73),(73,85),(85,95),(95,107),(107,123),
              (123,133),(138,153),(153,164),(164,169),(169,175),(175,197),(197,211),(211,224),(224,232),(232,243.2)]


def sha(path):
    return hashlib.sha256(Path(path).read_bytes()).hexdigest()


def pixels(data):
    with Image.open(BytesIO(data)) as im:
        im = ImageOps.exif_transpose(im).convert('RGB')
        aspect = im.width / im.height
        return np.asarray(im.resize((128,128),Image.Resampling.LANCZOS),dtype=float), aspect


def source():
    return OUT / 'agent-omni/118/input/source.html'


def paths():
    return {'direct': OUT/'direct/118/edited.html', 'agent-vl': OUT/'agent-vl/118/output/edited.html',
            'agent-omni': OUT/'agent-omni/118/output/edited.html'}


def rubric():
    row = records()['118']
    rb = copy.deepcopy(row['rubric'])
    # Preserve the upstream final-state cancellation semantics, then explicitly
    # omit disputed items in this local derivative rather than inventing reverts.
    active = [copy.deepcopy(i) for i in fs.active_items(rb)
              if int(re.match(r'r(\d+)',i['item_id'])[1]) not in {2*s-1 for s in DISPUTED}|{2*s for s in DISPUTED}]
    for item in active:
        if item['item_id']=='r32':
            item['expected_visible_evidence']['after_expected_change'] += ' 若Scan已因争议移动操作移出footer，不因其位置或footer缺少Scan标题单独判失败；检查保留的栏目及相应标题自身配色。'
        if item['item_id'] in ('r39','r40'):
            ev = item['expected_visible_evidence']
            ev['before_anchor'] = 'OPEN ROLES列表中的第一个岗位Architectural Designer与第三个岗位Materials & Sustainability Specialist，非外层section。'
            ev['after_expected_change'] = ('识别这两个岗位条目为交换目标。' if item['item_id']=='r39' else
                '将OPEN ROLES列表中第一个Architectural Designer与第三个Materials & Sustainability Specialist岗位交换，BIM Coordinator仍居中；不要求外层careers/partners区块交换。')
            item['question'] = ('步骤20：'+ev['after_expected_change'])
    return rb, active


def prepare():
    DEST.mkdir(exist_ok=True)
    raw = source().read_text(encoding='utf-8')
    urls = sorted(set(html.unescape(u) for u in re.findall(r'https://images\.unsplash\.com/[^\s\'"<>\)]+',raw)))
    cache = DEST/'source-images';cache.mkdir(exist_ok=True)
    def download(url):
        p=cache/(hashlib.sha256(url.encode()).hexdigest()+'.jpg')
        if not p.exists():
            r=requests.get(url,timeout=35);r.raise_for_status();p.write_bytes(r.content)
        a,aspect=pixels(p.read_bytes())
        return url,a,aspect
    with ThreadPoolExecutor(max_workers=5) as pool:
        images=list(pool.map(download,urls))
    manifests={}
    for name,path in paths().items():
        text=path.read_text(encoding='utf-8');normal=text;matches=[]
        refs=set(re.findall(r'(?:\.\./input/images/|images/)[\w.\-]+',text))
        for ref in refs:
            p=(path.parent/ref).resolve()
            if not p.is_file():continue
            a,aspect=pixels(p.read_bytes())
            candidates=sorted((float(np.sqrt(np.mean((a-b)**2))),url,ratio) for url,b,ratio in images)
            rmse,url,ratio=candidates[0]
            ok=rmse<2.5 and abs(aspect-ratio)/ratio<0.02
            matches.append({'reference':ref,'sha256':sha(p),'rmse':round(rmse,4),'aspect':aspect,
                            'canonical_url':url if ok else None,'same_content':ok})
            if ok:normal=normal.replace(ref,url)
        d=DEST/name;d.mkdir(exist_ok=True)
        (d/'normalized.html').write_text(normal,encoding='utf-8')
        manifests[name]={'original_path':str(path),'original_sha256':sha(path),'normalized_sha256':sha(d/'normalized.html'),'assets':matches}
    rb,active=rubric()
    audit={'version':VERSION,'created_at':now(),'sample_id':'118','source_sha256':sha(source()),
           'video_sha256':sha(ROOT/'omni2web_data/video_118.mp4'),'original_benchmark_sha256':sha(ROOT/'omni2web_data/benchmark_subset3.jsonl'),
           'disputed_steps':DISPUTED,'corrected_step':{'step':20,'evidence':'239–242s: cursor selects first and third rows inside Open Roles list, not Partners section.'},
           'coverage':{'original_steps':20,'cancelled_steps':[2,3,7,8],'disputed_steps':list(DISPUTED),'effective_operations_scored':11,'original_effective_operations':16},
           'categories':{c:sum(i['category']==c for i in active) for c in fs.WEIGHTS},
           'method':'Same EFS weights. Local diagnostic scope excludes unsupported/ambiguous targets. Explicitly distinct from official full-scope EFS. Asset matching only normalizes content-equivalent files; submissions stay untouched.',
           'normalization':manifests,'active_rubric':active,'original_rubric':rb}
    write(DEST/'protocol.json',audit)
    print('prepared',VERSION,'categories',audit['categories'],flush=True)


OBS_JS = r'''(selectors) => {
 const result={};
 function item(e){const s=getComputedStyle(e),r=e.getBoundingClientRect();let hidden=false;
 for(let a=e;a;a=a.parentElement){let q=getComputedStyle(a);if(q.display==='none'||q.visibility==='hidden')hidden=true;}
 return {tag:e.tagName,id:e.id,class:e.className,text:(e.innerText||e.textContent||'').trim().slice(0,250),
 display:s.display,visibility:s.visibility,hidden,opacity:s.opacity,color:s.color,backgroundColor:s.backgroundColor,
 backgroundImage:s.backgroundImage,border:s.border,borderBottomColor:s.borderBottomColor,fontWeight:s.fontWeight,
 boxShadow:s.boxShadow,gridTemplateColumns:s.gridTemplateColumns,flexDirection:s.flexDirection,
 x:Math.round(r.x),y:Math.round(r.y+scrollY),width:Math.round(r.width),height:Math.round(r.height),
 section:e.closest('section')?.id,footer:!!e.closest('footer'),src:e.getAttribute('src'),href:e.getAttribute('href')};}
 for(const sel of selectors)result[sel]=Array.from(document.querySelectorAll(sel)).map(item);
 result.section_order=Array.from(document.querySelectorAll('body>section')).map(e=>e.id||e.className);
 result.portfolio_order=Array.from(document.querySelectorAll('#portfolio .p-item h3')).map(e=>e.textContent.trim());
 result.roles_order=Array.from(document.querySelectorAll('#careers .role b')).map(e=>e.textContent.trim());
 return result;
}'''
SELECTORS=['.topbar .brand','.topbar .nav','.topbar .nav>a','.topbar .nav>div','.topbar .cta',
 '#top','#top h1','#top .lead','.hero-visual','.hero-visual .float','.hero-visual .tag',
 '.btn-ghost','.social-round','#qrGrid','.qr','#trust .fcard','#trust .fcard h3',
 '#services .s-head','#journal .filt','#journalGrid','#journalGrid .article',
 'footer','footer h4','.foot-col h4','footer .foot-col a','#caseGrid .case .title',
 '#awards .award','#awards .award h3','#awards .award .body','#urban-oasis .hvisual .layer',
 '#careers .role','#start .btn-secondary']


def observe(extra=False):
    candidates=({'oracle':DEST/'calibration/oracle.html','noop':source()} if extra else {'source':source(),**paths()})
    with sync_playwright() as p:
        browser=p.chromium.launch(headless=True)
        for name,path in candidates.items():
            d=DEST/name;d.mkdir(exist_ok=True)
            page=browser.new_page(viewport={'width':1912,'height':948},device_scale_factor=1,reduced_motion='reduce')
            errors=[];page.on('pageerror',lambda error:errors.append(str(error)))
            page.goto(path.as_uri(),wait_until='domcontentloaded',timeout=60000)
            page.wait_for_timeout(900)
            height=page.evaluate('document.documentElement.scrollHeight')
            for y in range(0,height,650):page.evaluate('(y)=>scrollTo(0,y)',y);page.wait_for_timeout(40)
            page.wait_for_timeout(700)
            measured=page.evaluate(OBS_JS,SELECTORS)
            measured.update(viewport={'width':1912,'height':948},page_errors=errors,
                            input_sha256=sha(path),captured_at=now())
            write(d/'observations.json',measured)
            for label,sel in [('hero','#top'),('trust','#trust'),('portfolio','#portfolio'),('journal','#journal'),('roles','#careers'),('footer','footer')]:
                target=page.locator(sel)
                if target.count():
                    page.evaluate('(s)=>document.querySelector(s).scrollIntoView({block:"center",behavior:"instant"})',sel)
                    page.wait_for_timeout(500)
                    page.screenshot(path=str(d/(label+'.jpg')),type='jpeg',quality=83)
            page.close()
            print('observed',name,flush=True)
        browser.close()


def parse_items(response,expected):
    if not response.get('success'):raise RuntimeError(response.get('error','Judge failed'))
    text=response['content'];m=re.search(r'```(?:json)?\s*(\{.*\})\s*```',text,re.S)
    data=json.loads(m[1] if m else text)
    rows=data.get('items',[]);ids=[i.get('item_id') for i in rows]
    if set(ids)!=set(expected) or len(ids)!=len(set(ids)):raise ValueError('Missing/duplicate/unknown judge IDs')
    if any(type(i.get('met')) is not bool for i in rows):raise ValueError('Non-boolean judgment')
    return rows


def damage_changes(before, after):
    """Remove provable diff artifacts and disputed scopes before asking the judge.

    The upstream diff can confuse moved text with deletion, and flattens media
    queries. This derivative retains a reason for every excluded change.
    """
    raw=html_structured_diff(before,after);kept=[];excluded=[]
    a=Counter(BeautifulSoup(before,'html.parser').stripped_strings)
    b=Counter(BeautifulSoup(after,'html.parser').stripped_strings)
    for change in raw:
        location=change.get('location','');typ=change['type'];reason=None
        text=change.get('original')
        if typ=='text_removed' and text and a[text] and b[text]>=a[text]:
            reason='Exact text multiplicity is preserved globally; this is a move, not content loss.'
        if typ.startswith('css_') and any(x in location for x in ('#trust .fcard','.hero-visual .tag','.hero .hero-actions .btn-primary','.hero .btn-ghost','.foot-contact','.foot-scan','.foot-social','#top .qr')):
            reason='Change belongs to an explicitly excluded ambiguous operation (4/5/9/10/15).'
        if typ.startswith('css_') and '.hero-visual' in location and 'display: none' in str(change.get('modified')):
            reason='Hide scope is disputed (step9); cannot call it collateral damage after excluding that request.'
        if typ.startswith('css_') and '#journalGrid' in location and 'grid-template-columns: 1fr' in str(change.get('modified')):
            reason='Upstream CSS diff flattens media queries; one-column narrow layout is not a desktop regression. Browser evidence checks desktop two columns separately.'
        if reason:excluded.append({'change':change,'reason':reason})
        else:kept.append(change)
    return kept,excluded


def grade(name):
    started=time.perf_counter();protocol=json.loads((DEST/'protocol.json').read_text(encoding='utf-8'))
    active=[i for i in protocol['active_rubric'] if i['category']!='no_damage']
    base,key=credentials()
    if 'nju-link.com' not in base:raise ValueError('NJU Link required')
    client=OpenAIResponsesClient(key,'gpt-6-sol',60,base,'high')
    before=source().read_text(encoding='utf-8');after=(DEST/name/'normalized.html').read_text(encoding='utf-8')
    original_obs=json.loads((DEST/'source/observations.json').read_text(encoding='utf-8'))
    obs=json.loads((DEST/name/'observations.json').read_text(encoding='utf-8'))
    neutral='争议操作4/5/9/10/15不判通过或失败；这些操作范围内的合理修改不应单独当无关损坏。仍检查已明确操作。step20按岗位条目交换。'
    prompt=('Evaluate a website edit against the following audited final-state rubric. This is a local diagnostic derivative, not official benchmark scoring. '
            'Use actual browser computed styles and geometry, including the CSS cascade; do not declare CSS absent just because the original rule remains earlier. '
            'Image URL localization listed in the normalization manifest is verified to preserve content and is not damage. '
            'Grounding asks whether the correct element was targeted; fulfillment requires the entire unambiguous request. '
            'Do not require a change for a requested restore when the final state already equals the original. '
            'Infer neither hidden tool behavior nor intermediate execution from final HTML. Return JSON only: '
            '{"items":[{"item_id":"r1","met":true,"reason":"concrete HTML/computed evidence"}]}. '
            'Return exactly every listed item, met must be JSON boolean. Reasons in Chinese.\n'
            +neutral+'\nRUBRIC:\n'+json.dumps(active,ensure_ascii=False)
            +'\nORIGINAL HTML:\n'+before+'\nMODIFIED HTML (asset-equivalent canonical URLs only):\n'+after
            +'\nORIGINAL BROWSER OBSERVATIONS:\n'+json.dumps(original_obs,ensure_ascii=False)
            +'\nMODIFIED BROWSER OBSERVATIONS:\n'+json.dumps(obs,ensure_ascii=False))
    d=DEST/name
    (d/'judge_prompt.txt').write_text(prompt,encoding='utf-8')
    result_path=d/'rubric_judge.json'
    if result_path.exists():
        response=json.loads(result_path.read_text(encoding='utf-8'))
    else:
        response=client.call_text([{'role':'user','content':prompt}],model='gpt-6-sol',retries=8,timeout=600)
        write(result_path,response)
    judged=parse_items(response,[i['item_id'] for i in active])
    categories={i['item_id']:i['category'] for i in active}
    for i in judged:i['category']=categories[i['item_id']]
    changes,excluded_changes=damage_changes(before,after)
    damage_path=d/'damage_judge.json'
    if damage_path.exists():damage=json.loads(damage_path.read_text(encoding='utf-8'))
    else:
        descriptions=[neutral,'Ground truth for excluded task scopes: step4 DID ask button border/background/text changes; step9 DID ask hiding HERO visual material (scope disputed); step10 DID ask styling TRUST cards (batch scope disputed); steps5 and15 DID ask moving footer/social/button/QR elements (destinations disputed). These changes are not automatically unrelated. Do not punish an omitted operation merely because it is omitted from the unambiguous scoring subset.',
                      'Final effective requirements:']+[i['expected_visible_evidence']['after_expected_change'] for i in active if i['category'] in ('edit_fulfillment','revision')]
        damage=llm_assess_damage(changes,descriptions,GeminiTaskClient(client),'gpt-6-sol')
        write(damage_path,damage)
    aggregated=fs.aggregate_items(judged,damage['score'])
    original=(next(r for r in json.loads((OUT/'scores'/('sol-'+name)/'results.json').read_text(encoding='utf-8')) if r['sample_id']=='118')
              if name in paths() else {'efs_weighted_v3':None,'category_scores_v3':None})
    final={'version':VERSION,'sample_id':'118','condition':name,'solver_model':'gpt-6.1-sol','solver_effort':'xhigh',
           'judge_model':'gpt-6-sol','judge_effort':'high','api_base':base,'scored_at':now(),'evaluation_status':'scored',
           'original_efs':original['efs_weighted_v3'],'original_categories':original['category_scores_v3'],
           'coverage':protocol['coverage'],'weights':fs.WEIGHTS,**aggregated,'items':judged,
           'no_damage_changes':changes,'excluded_diff_artifacts':excluded_changes,'no_damage_audit':damage,'grading_elapsed_sec':round(time.perf_counter()-started,2),
           'submission_sha256':sha(paths()[name]) if name in paths() else sha(d/'normalized.html'),
           'normalization':protocol['normalization'].get(name),
           'note':'Audit diagnostic score only. Denominator changed: 11 of 16 effective operations; do not compare to paper leaderboard.'}
    write(d/'result.json',final)
    print('SCORED',name,final['efs_weighted_v3'],final['category_scores_v3'],flush=True)


def calibrate():
    s=BeautifulSoup(source().read_text(encoding='utf-8'),'html.parser')
    items=s.select('#portfolio .p-item');a,b=items[0],items[2];marker=s.new_tag('span');a.replace_with(marker);b.replace_with(a);marker.replace_with(b)
    items=s.select('#careers .role');a,b=items[0],items[2];marker=s.new_tag('span');a.replace_with(marker);b.replace_with(a);marker.replace_with(b)
    s.select('#caseGrid .case')[4].decompose()
    css=s.new_tag('style');css.string='''
    .topbar .bar{display:grid;grid-template-columns:auto 1fr;align-items:start}
    .topbar .brand{grid-column:1;grid-row:1/3}.topbar .nav{grid-column:2;grid-row:1;flex-direction:column;align-items:flex-end}
    .topbar .cta{grid-column:2;grid-row:2;justify-self:end}
    #journal .filt,#journal .filt[aria-pressed="true"]{color:#4b3024}
    #journalGrid{grid-template-columns:repeat(2,1fr)}
    footer{background:#4b3024}footer .foot-col h4{color:#f1cb65}footer .foot-col a{border-bottom-color:rgba(241,203,101,.35)}
    #awards .award{background:#102d27}#awards .award h3{color:#f1cb65}#awards .award .body{color:#baccc1}
    '''
    s.head.append(css)
    (DEST/'calibration').mkdir(exist_ok=True)
    (DEST/'calibration/oracle.html').write_text(str(s),encoding='utf-8')
    for name,text in [('oracle',str(s)),('noop',source().read_text(encoding='utf-8'))]:
        d=DEST/name;d.mkdir(exist_ok=True);(d/'normalized.html').write_text(text,encoding='utf-8')
    observe(extra=True)
    for name in ['oracle','noop']:
        if not (DEST/name/'result.json').exists():grade(name)
    oracle=json.loads((DEST/'oracle/result.json').read_text(encoding='utf-8'))
    noop=json.loads((DEST/'noop/result.json').read_text(encoding='utf-8'))
    assert oracle['efs_weighted_v3']>=.98, 'Reference solution failed; inspect grader'
    assert noop['efs_weighted_v3']<.5, 'No-op baseline is unexpectedly high'
    write(DEST/'calibration.json',{'version':VERSION,'reference':oracle['efs_weighted_v3'],'noop':noop['efs_weighted_v3'],
                                 'passed':True,'note':'Calibration checks feasibility and catches inaction; no claim of full semantic validity.'})


def main():
    stage=sys.argv[1] if len(sys.argv)>1 else 'all'
    if stage in ('prepare','all'):prepare()
    if stage in ('observe','all'):observe()
    if stage=='calibrate':calibrate()
    if stage in ('grade','all'):
        for name in paths():
            if not (DEST/name/'result.json').exists():grade(name)


if __name__=='__main__':main()
