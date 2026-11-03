"""Wait for the repeat to end, then score it under the same v3 task and damage policy."""
from copy import deepcopy
import json
from pathlib import Path
import sys
import time

import audit_118 as audit
import review_118_v3 as paired
from repeat_118_omni import REPEAT,WORK
from continue_codex import OUT,credentials,now,write
from scorer import final_state as fs
from scorer.llm_client import OpenAIResponsesClient

EVAL=REPEAT/'evaluation'


def evaluate(run_root=REPEAT,work=WORK,label='r1'):
    REPEAT,WORK=Path(run_root),Path(work)
    EVAL=REPEAT/'evaluation'
    status=WORK/'run_info.json'
    while True:
        if status.exists():
            try:info=json.loads(status.read_text(encoding='utf-8'))
            except json.JSONDecodeError:time.sleep(2);continue
            if info.get('status') in ('completed','failed'):break
        time.sleep(15)
    if info['status']!='completed':
        write(REPEAT/'evaluation_status.json',{'status':'solver_failed','run':info,'score':None})
        print('Repeat failed; no model zero recorded.');return
    if (EVAL/'result.json').exists():
        print('Repeat already evaluated.');return
    output=WORK/'output/edited.html'
    write(REPEAT/'evaluation_status.json',{'status':'grading','updated_at':now()})
    # Use the same asset-normalization and browser-observation code, changing
    # only its work directory and single submission source.
    audit.DEST=EVAL
    audit.paths=lambda:{'agent-omni':output}
    audit.source=lambda:WORK/'input/source.html'
    audit.VERSION=paired.VERSION
    audit.prepare()
    audit.observe()
    protocol=json.loads((paired.DEST/'protocol.json').read_text(encoding='utf-8'))
    active=[r for r in protocol['active_rubric'] if r['category']!='no_damage']
    original=(WORK/'input/source.html').read_text(encoding='utf-8')
    modified=(EVAL/'agent-omni/normalized.html').read_text(encoding='utf-8')
    observations=json.loads((EVAL/'agent-omni/observations.json').read_text(encoding='utf-8'))
    baseline=json.loads((EVAL/'source/observations.json').read_text(encoding='utf-8'))
    # Identical task-judging instructions to the original v2/v3 rubric stage.
    original_prompt=(OUT/'audit118-v2/agent-omni/judge_prompt.txt').read_text(encoding='utf-8')
    prefix=original_prompt.split('\nORIGINAL HTML:\n',1)[0]
    prompt=(prefix+'\nORIGINAL HTML:\n'+original+'\nMODIFIED HTML (asset-equivalent canonical URLs only):\n'+modified
            +'\nORIGINAL BROWSER OBSERVATIONS:\n'+json.dumps(baseline,ensure_ascii=False)
            +'\nMODIFIED BROWSER OBSERVATIONS:\n'+json.dumps(observations,ensure_ascii=False))
    (EVAL/'rubric_prompt.txt').write_text(prompt,encoding='utf-8')
    judge=EVAL/'rubric_judge.json'
    base,key=credentials()
    if 'nju-link.com' not in base:raise ValueError('NJU Link required')
    if judge.exists():response=json.loads(judge.read_text(encoding='utf-8'))
    else:
        response=OpenAIResponsesClient(key,'gpt-6-sol',60,base,'high').call_text([{'role':'user','content':prompt}],model='gpt-6-sol',retries=8,timeout=600)
        write(judge,response)
    items=audit.parse_items(response,[r['item_id'] for r in active])
    categories={r['item_id']:r['category'] for r in active}
    for item in items:item['category']=categories[item['item_id']]
    groups,proof=paired.ledger(original,modified)
    previous=json.loads((paired.DEST/'shared_decisions.json').read_text(encoding='utf-8'))
    # Cohort grading is sequential. Reuse every previously published semantic
    # decision, including the Sol repeat and any earlier additional model.
    for path in [OUT/'repeat118-omni-r1/evaluation/new_damage_labels.json',
                 *sorted(OUT.glob('model118-*/evaluation/new_damage_labels.json'))]:
        if path.exists():previous.update(json.loads(path.read_text(encoding='utf-8')))
    missing=[g for g in groups if g['key'] not in previous]
    if missing:
        shared=[{**g,'id':'new'+str(i)} for i,g in enumerate(missing,1)]
        old_dest=paired.DEST
        paired.DEST=EVAL/'new_shared_decisions';paired.DEST.mkdir(exist_ok=True)
        additions=paired.decisions([{**g,'examples':g['members']} for g in shared])
        paired.DEST=old_dest
        previous.update(additions)
        write(EVAL/'new_damage_labels.json',additions)
    damage=[{**g,**previous[g['key']]} for g in groups]
    weight=sum({'high':.3,'medium':.15,'low':.05}[g['severity']] for g in damage if g['is_damage'])
    nd=round(max(0,1-weight/max(len(groups)*.15,1)),4)
    aggregate=fs.aggregate_items(items,nd)
    result={'version':paired.VERSION,'sample_id':'118','condition':'agent-omni','repeat':label,
            'scored_at':now(),'evaluation_status':'scored','solver_model':info['model'],'solver_effort':info['effort'],
            'judge_model':'gpt-6-sol','judge_effort':'high','api_base':base,'run':info,**aggregate,'items':items,
            'no_damage_audit':{'score':nd,'canonical_changes':len(groups),'changes':damage},
            'canonical_proof':proof,'coverage':protocol['coverage'],'weights':fs.WEIGHTS,
            'submission_sha256':audit.sha(output),'note':'Same task rubric and shared damage decisions as v3; previous labels are reused, only new semantic changes are separately classified.'}
    write(EVAL/'result.json',result)
    write(REPEAT/'evaluation_status.json',{'status':'scored','updated_at':now(),'efs':aggregate['efs_weighted_v3']})
    print(json.dumps({'score':aggregate['efs_weighted_v3'],'parts':aggregate['category_scores_v3'],'elapsed':info['elapsed_sec']},ensure_ascii=False))
    return result


if __name__=='__main__':evaluate()
