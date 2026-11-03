"""Correct the Services class/ID alias without resampling judge decisions."""
from copy import deepcopy
import hashlib
import json
from pathlib import Path
import shutil
from bs4 import BeautifulSoup
import audit_118 as audit
import review_118_v3 as review
from continue_codex import OUT,now,write
from scorer import final_state as fs


def main():
    labels=json.loads((review.DEST/'shared_decisions.json').read_text(encoding='utf-8'))
    roots=[OUT/'repeat118-omni-r1',OUT/'model118-gpt-6-astra-r0',OUT/'model118-gpt-6.1-terra-r0']
    for root in roots:
        p=root/'evaluation/new_damage_labels.json'
        if p.exists():labels.update(json.loads(p.read_text(encoding='utf-8')))
    original=audit.source().read_text(encoding='utf-8');soup=BeautifulSoup(original,'html.parser')
    selectors=['.s-head','.r-top','.r-body .inner','.row .r-body']
    assert all(soup.select('.services '+q)==soup.select('#services '+q) and soup.select('.services '+q) for q in selectors)
    entries=[(review.DEST/n/'result.json',audit.DEST/n/'normalized.html') for n in ('direct','agent-vl','agent-omni')]
    entries += [(root/'evaluation/result.json',root/'evaluation/agent-omni/normalized.html') for root in roots]
    report=[]
    for path,normalized in entries:
        before=json.loads(path.read_text(encoding='utf-8'))
        if before['version']==review.VERSION:continue
        archive=path.with_name('result-v3.json')
        if not archive.exists():shutil.copy2(path,archive)
        groups,proof=review.ledger(original,normalized.read_text(encoding='utf-8'))
        assert not [g['key'] for g in groups if g['key'] not in labels]
        damage=[{**g,**labels[g['key']]} for g in groups]
        weight=sum({'high':.3,'medium':.15,'low':.05}[g['severity']] for g in damage if g['is_damage'])
        nd=round(max(0,1-weight/max(len(groups)*.15,1)),4)
        result=deepcopy(before);result.update(fs.aggregate_items(result['items'],nd))
        result.update(version=review.VERSION,previous_v3_efs=before['efs_weighted_v3'],scored_at=now(),
            no_damage_audit={'score':nd,'canonical_changes':len(groups),'changes':damage},canonical_proof=proof,
            alias_fix='DOM-verified Services descendant selectors match identical elements through wrapper class or enclosing section ID; existing labels reused; no new judge call.',
            grading_code_sha256=hashlib.sha256(Path(review.__file__).read_bytes()).hexdigest())
        if 'no_damage_semantic_changes' in result:result['no_damage_semantic_changes']=damage
        if 'no_damage_canonical_proof' in result:result['no_damage_canonical_proof']=proof
        write(path,result)
        if path.parent.name=='evaluation':write(path.parent.parent/'evaluation_status.json',{'status':'scored','updated_at':now(),'version':review.VERSION,'efs':result['efs_weighted_v3']})
        report.append({'path':str(path),'previous':before['efs_weighted_v3'],'corrected':result['efs_weighted_v3'],'task_judgments_unchanged':result['items']==before['items']})
    protocol_path=review.DEST/'protocol.json';archive=review.DEST/'protocol-v3.json'
    if not archive.exists():shutil.copy2(protocol_path,archive)
    protocol=json.loads(protocol_path.read_text(encoding='utf-8'))
    protocol.update(version=review.VERSION,alias_fix_at=now(),implementation_sha256=hashlib.sha256(Path(review.__file__).read_bytes()).hexdigest(),
        alias_fix='DOM-verified Services descendant selectors match identical elements through wrapper class or enclosing section ID; canonicalize before grouping; preserve every task and damage judgment.')
    write(protocol_path,protocol);review.verify(labels)
    write(review.DEST/'alias_fix_report.json',{'version':review.VERSION,'updated_at':now(),'runs':report})
    print(json.dumps(report,ensure_ascii=False,indent=2))


if __name__=='__main__':main()
