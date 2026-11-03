"""Paired, condition-blind recheck of No-damage; keep verified task judgments fixed.

Do not edit submissions. Preserve v2. Classify each shared semantic change once,
so equivalent changes cannot receive opposite labels across the three runs.
"""
from __future__ import annotations
from collections import Counter
from copy import deepcopy
import hashlib
import json
from pathlib import Path
import re
import sys
import time

from bs4 import BeautifulSoup
from audit_118 import DEST as V2, source, paths, parse_items
from continue_codex import OUT, credentials, now, write
from scorer.llm_client import OpenAIResponsesClient
from scorer.step3_no_damage import html_structured_diff

DEST=OUT/'audit118-v3'
VERSION='118-audit-v3'


def canonical_pair(before,after):
    a,b=BeautifulSoup(before,'html.parser'),BeautifulSoup(after,'html.parser')
    proof=[]
    # Match repeated project/role containers by identity before computing changes.
    for soup in (a,b):
        for parent,child,title in [('#portfolio .p-stack','.p-item','h3'),('#careers .roles','.role','b')]:
            container=soup.select_one(parent)
            if not container:continue
            children=[n for n in container.select(child) if n.parent is container]
            for node in sorted(children,key=lambda n:n.select_one(title).get_text(' ',strip=True)):
                container.append(node.extract())
    # The removed Garden Stair subtree contains a Residential label too.
    # Comparing it as an unintended deletion caused a false loss in every run.
    old=next((n for n in a.select('#caseGrid .case') if 'Garden Stair' in n.get_text()),None)
    present=any('Garden Stair' in n.get_text() for n in b.select('#caseGrid .case'))
    if old is not None and not present:
        proof.append({'kind':'authorized_deletion','title':'Garden Stair','text':old.get_text(' ',strip=True)})
        old.decompose()
    return str(a),str(b),proof


def clean_selector(text):
    return re.sub(r'\s+',' ',re.sub(r'/\*.*?\*/','',text,flags=re.S)).strip().replace('.hero ', '#top ')


def group_for(change):
    """Return (canonical semantic ID, scope), not a correctness judgment."""
    loc=clean_selector(change.get('location',''))
    typ=change['type']
    if typ=='img_src_changed':
        label=change.get('context') or loc
        return 'image:'+label,'protected_image'
    if typ.startswith('css_'):
        selector=loc.replace('<style>','').strip()
        if '.topbar' in selector:return 'task:navigation-layout','already_scored_requirement'
        if '#trust ' in selector:return 'task:disputed-trust','ambiguous_request'
        if '.hero-visual' in selector or '#top .qr' in selector:return 'task:disputed-hero-visual','ambiguous_request'
        if '.btn-ghost' in selector or '.hero-actions .btn-primary' in selector:return 'task:disputed-button','ambiguous_request'
        if any(t in selector for t in ('.foot-contact','.foot-scan','.foot-social','.footer-credentials','.foot-grid','footer .foot-brand')):
            return 'task:disputed-footer-move','ambiguous_request'
        if selector in ('#top','.hero') or '#top h1' in selector or '#top .lead' in selector:
            return 'task:hero-palette','already_scored_requirement'
        if '#services .s-head' in selector:return 'task:services-header','already_scored_requirement'
        if '#services ' in selector:return 'extra:services-other-elements','services_non_header'
        if '#journal .filt' in selector:return 'task:journal-filter-style','already_scored_requirement'
        if '#journalGrid' in selector:return 'task:journal-grid','already_scored_requirement'
        if '.award' in selector:return 'task:awards-palette','already_scored_requirement'
        if 'footer' in selector:
            modified=str(change.get('modified',''))
            if selector=='footer':return 'task:footer-palette','already_scored_requirement'
            if '.foot-col h4' in selector or ('.foot-col a' in selector and 'border' in modified):
                return 'task:footer-palette','already_scored_requirement'
            if '.foot-bottom' in selector and 'border-top' in modified:return 'extra:footer-bottom-divider','footer_extension'
            return 'extra:footer-unrequested-text-palette','footer_extension'
    if typ=='style_changed' and any(t in loc for t in ('wordmark','foot-col')):
        return 'extra:footer-unrequested-text-palette','footer_extension'
    if typ in ('text_removed','text_added'):
        return 'text:'+str(change.get('original') or change.get('modified')),'protected_content'
    if typ=='style_changed' and '.p-visual' in loc:
        return 'extra:portfolio-image','protected_image'
    return typ+':'+loc,'other_change'


def ledger(before,after):
    ca,cb,proof=canonical_pair(before,after)
    a=Counter(BeautifulSoup(ca,'html.parser').stripped_strings)
    b=Counter(BeautifulSoup(cb,'html.parser').stripped_strings)
    groups={};excluded=[]
    def add(change):
        if change['type']=='text_removed' and change.get('original') and b[change['original']]>=a[change['original']]:
            excluded.append({'change':change,'reason':'Text multiplicity preserved; not content loss.'});return
        key,scope=group_for(change)
        groups.setdefault(key,{'key':key,'scope':scope,'members':[]})['members'].append(change)
    for change in html_structured_diff(ca,cb):
        # Mixed CSS selector groups must not disappear because one member
        # happens to concern an excluded scope.
        if change['type'].startswith('css_'):
            selectors=change['location'].replace('<style>','').split(',')
            for selector in selectors:
                item=deepcopy(change);item['location']='<style> '+selector.strip();add(item)
        else:add(change)
    a0,b0=BeautifulSoup(before,'html.parser'),BeautifulSoup(after,'html.parser')
    expected=[n.get('id') or 'unnamed-section' for n in a0.select('body>section')]
    actual=[n.get('id') or 'unnamed-section' for n in b0.select('body>section')]
    if expected!=actual:
        add({'type':'section_order_changed','location':'body>section','original':expected,'modified':actual})
        old=groups.pop('section_order_changed:body>section')
        old.update(key='extra:section-order',scope='unrequested_section_order')
        groups[old['key']]=old
    return list(groups.values()),proof+excluded


def make_ledgers():
    DEST.mkdir(exist_ok=True)
    before=source().read_text(encoding='utf-8');all_groups={};runs={}
    for name in paths():
        after=(V2/name/'normalized.html').read_text(encoding='utf-8')
        groups,proof=ledger(before,after)
        runs[name]={'groups':groups,'proof':proof}
        for group in groups:
            entry=all_groups.setdefault(group['key'],{'key':group['key'],'scope':group['scope'],'examples':[]})
            # Remove condition names: the judge sees shared facts, not a leaderboard.
            for member in group['members']:
                if member not in entry['examples']:entry['examples'].append(member)
    union=[]
    for index,key in enumerate(sorted(all_groups),1):
        group=all_groups[key];group['id']='c'+str(index);union.append(group)
    protocol=deepcopy(json.loads((V2/'protocol.json').read_text(encoding='utf-8')))
    protocol.update(version=VERSION,reviewed_at=now(),parent_version='118-audit-v2',
                    review_method='Keep the 22 verified task items. No-damage compares identity-matched containers, accounts for authorized deletion, deduplicates semantic changes and classifies each shared change once without condition labels.',
                    no_damage_policy='Changes already scored under fulfillment/revision do not become unrelated damage. Genuine changes outside the requested targets remain eligible. Formula stays severity weighted with a denominator of canonical semantic changes, not raw CSS statements.',
                    implementation_sha256=hashlib.sha256(Path(__file__).read_bytes()).hexdigest())
    write(DEST/'protocol.json',protocol)
    write(DEST/'change_ledgers.json',{'runs':runs,'shared_changes':union})
    for name,data in runs.items():print(name,len(data['groups']),'canonical changes',flush=True)
    return runs,union


def decisions(union):
    ready={};pending=[]
    for group in union:
        if group['scope'] in ('already_scored_requirement','ambiguous_request'):
            ready[group['key']]={'is_damage':False,'severity':None,'reason':'该变化属于已经计分的编辑/修订目标，或被明确排除的歧义要求；无损不重复处罚。'}
        else:pending.append(group)
    if not pending:return ready
    file=DEST/'shared_judge.json'
    if file.exists():response=json.loads(file.read_text(encoding='utf-8'))
    else:
        base,key=credentials()
        if 'nju-link.com' not in base:raise ValueError('NJU Link required')
        prompt=('Audit collateral damage in a website editing task. Each entry is one distinct shared semantic change, potentially appearing in multiple anonymous submissions. '
                'Judge every ID once; that decision will be reused wherever the same change occurs. Do not infer which model or input condition made a change. '
                'No-damage measures unintended effects OUTSIDE the requested targets. Wrong HERO colors, wrong JOURNAL filter text, and failure to restore the SERVICES header are already scored under edit/revision, and are not repeated here. '
                'Authorized Garden Stair deletion and its Residential label are accounted for. Exchanging first/third PORTFOLIO cards and first/third roles is requested. '
                'Top-level section order should end as originally supplied; initial philosophy/studio swap was reverted, and the last swap concerns roles within a section. '
                'Footer request: dark brown background, gold column headings and translucent gold separators under links. Consider whether other footer palette changes are reasonable side effects, consistently across all examples. '
                'Changes to TRUST style, HERO hiding, button styles and footer/social/QR movement have unresolved scope or destination and are excluded from this diagnostic, not automatically damage. '
                'A SERVICES non-header change is distinct from the requested/restored three-column header: check whether it changes unrelated row/body/caret behavior. '
                'Unrequested testimonial image replacements and surviving content loss are eligible damage. '
                'Return ONLY JSON {"changes":[{"id":"c1","is_damage":true,"severity":"medium","reason":"Chinese justification citing evidence"}]}. '
                'Use boolean is_damage. If false severity=null, otherwise high(content loss/structural break), medium(attribute/layout anomaly), low(tiny harmless adjustment). '
                'Exactly the supplied IDs, no omissions/duplicates.\n'+json.dumps(pending,ensure_ascii=False))
        (DEST/'shared_judge_prompt.txt').write_text(prompt,encoding='utf-8')
        response=OpenAIResponsesClient(key,'gpt-6-sol',60,base,'high').call_text([{'role':'user','content':prompt}],model='gpt-6-sol',retries=8,timeout=600)
        write(file,response)
    if not response.get('success'):raise RuntimeError(response.get('error','judge failed'))
    content=response['content'];m=re.search(r'```(?:json)?\s*(\{.*\})\s*```',content,re.S)
    changes=json.loads(m[1] if m else content)['changes']
    expected={g['id'] for g in pending};seen=set();byid={g['id']:g['key'] for g in pending}
    for change in changes:
        iid=change['id']
        if iid in seen or iid not in expected:raise ValueError('Duplicate/unknown judge ID')
        seen.add(iid)
        if type(change.get('is_damage')) is not bool:raise ValueError('Non-boolean judgment')
        if change['is_damage'] and change.get('severity') not in ('high','medium','low'):raise ValueError('Invalid severity')
        ready[byid[iid]]={k:change.get(k) for k in ('is_damage','severity','reason')}
    if seen!=expected:raise ValueError('Missing judge IDs')
    return ready


def review():
    started=time.perf_counter();runs,union=make_ledgers();labels=decisions(union)
    write(DEST/'shared_decisions.json',labels)
    for name,data in runs.items():
        result=deepcopy(json.loads((V2/name/'result.json').read_text(encoding='utf-8')))
        reviewed=[{**g,**labels[g['key']]} for g in data['groups']]
        weight=sum({'high':.3,'medium':.15,'low':.05}[g['severity']] for g in reviewed if g['is_damage'])
        count=len(reviewed)
        no_damage=round(max(0,1-weight/max(count*.15,1)),4)
        result.update(version=VERSION,previous_v2_efs=result['efs_weighted_v3'],scored_at=now(),
                      review_elapsed_sec=round(time.perf_counter()-started,2),no_damage_semantic_changes=reviewed,
                      no_damage_canonical_proof=data['proof'],review_method='shared condition-blind semantic change audit')
        result['category_scores_v3']['no_damage']=no_damage
        result['efs_weighted_v3']=round(sum(result['weights'][c]*result['category_scores_v3'][c] for c in result['weights']),4)
        result['no_damage_audit']={'score':no_damage,'canonical_changes':count,'damage_count':sum(g['is_damage'] for g in reviewed),
                                   'changes':reviewed,'note':'Shared decisions reused for equivalent changes; fulfilled/revised target errors not double counted as unrelated damage.'}
        (DEST/name).mkdir(exist_ok=True)
        write(DEST/name/'result.json',result)
        for asset in (V2/name).glob('*'):
            if asset.name=='observations.json' or asset.suffix=='.jpg':
                import shutil
                shutil.copy2(asset,DEST/name/asset.name)
        print(name,result['efs_weighted_v3'],result['category_scores_v3'],flush=True)
    verify(labels)


def verify(labels):
    raw=source().read_text(encoding='utf-8');checks={}
    for name,after in [('noop',raw),('oracle',(V2/'calibration/oracle.html').read_text(encoding='utf-8'))]:
        groups,_=ledger(raw,after)
        relevant=[g for g in groups if g['scope'] not in ('already_scored_requirement','ambiguous_request')]
        unknown=[g['key'] for g in relevant if g['key'] not in labels]
        assert not unknown,(name,unknown)
        assert not any(labels[g['key']]['is_damage'] for g in relevant),(name,relevant)
        checks[name]={'no_damage':1.0,'canonical_changes':len(groups),'passed':True}
    old=json.loads((V2/'calibration.json').read_text(encoding='utf-8'))
    write(DEST/'calibration.json',{**old,'version':VERSION,'paired_review':checks,'note':'Task-item calibration unchanged; new No-damage audit independently checks oracle and no-op.'})
    print('calibration passed',checks,flush=True)


if __name__=='__main__':review()
