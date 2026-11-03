"""Build a self-contained, evidence-linked case page. Publishes no credentials or hidden reasoning."""
from __future__ import annotations
from pathlib import Path
import html
import json
import re
import shutil
import sys
import zipfile

from continue_codex import ROOT, OUT, now, records
from audit_118 import DEST, DISPUTED, STEP_TIMES, paths
sys.path.insert(0,str(ROOT/'omniale_cases/_build/scripts'))
from page_lib import CSS

BASE=OUT/'site_118'
PUBLIC=BASE/'public'
ROUTE='/omniale/omni2web-118/'
LABELS={'direct':'直出','agent-vl':'Agent-VL','agent-omni':'Agent-omni'}


def esc(value):return html.escape(str(value))
def load(path):return json.loads(Path(path).read_text(encoding='utf-8'))
def put(path,value):
    path=Path(path);path.parent.mkdir(parents=True,exist_ok=True)
    path.write_text(json.dumps(value,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
def table(head,rows):
    return '<div class="table-wrap"><table><thead><tr>'+''.join('<th>'+h+'</th>' for h in head)+'</tr></thead><tbody>'+''.join('<tr>'+''.join('<td>'+str(c)+'</td>' for c in row)+'</tr>' for row in rows)+'</tbody></table></div>'
def clock(s):
    s=round(s);return f'{s//60}分{s%60:02}秒'


def redact(text):
    text=re.sub(r'(?i)(?:sk-[a-z0-9_-]{16,}|Bearer\s+[a-z0-9_.-]{20,})','[credential redacted]',str(text))
    text=re.sub(r'(?i)(?:C:[/\\]+Users[/\\]+wjjhh|D:[/\\]+Desktop[/\\]+Omni Agents)', '[workspace]',text)
    return text


def traces():
    overview={}
    for name in ('agent-vl','agent-omni'):
        ws=OUT/name/'118';run=load(ws/'run_info.json');events=[]
        for line in (ws/'events.jsonl').read_text(encoding='utf-8').splitlines():
            try:e=json.loads(line)
            except ValueError:continue
            if e.get('type')!='item.completed':continue
            i=e.get('item',{});kind=i.get('type')
            if kind=='command_execution':
                events.append({'kind':'command','title':redact(i.get('command','')),
                               'body':redact(i.get('aggregated_output',''))[:18000],
                               'exit_code':i.get('exit_code'),'truncated':len(i.get('aggregated_output',''))>18000})
            elif kind=='web_search':events.append({'kind':'search','title':redact(i.get('query','')),'body':redact(json.dumps(i.get('action'),ensure_ascii=False))})
            elif kind=='agent_message':events.append({'kind':'message','title':'模型可见回复','body':redact(i.get('text',''))})
        for n,e in enumerate(events,1):e['index']=n
        info={'condition':name,'model':run['model'],'effort':run['effort'],'elapsed_sec':run['elapsed_sec'],
              'exit_code':run['exit_code'],'started_at':run['started_at'],'finished_at':run['finished_at'],
              'events':events,'note':'可见回复与工具记录；不包含隐藏推理。CLI事件无逐条时间戳，序号表示顺序；长输出截至18000字符。'}
        put(PUBLIC/'traces'/f'{name}.json',info)
        overview[name]={'commands':sum(e['kind']=='command' for e in events),'searches':sum(e['kind']=='search' for e in events),
                        'asr':sum('WhisperModel(' in e['title'] or 'python tools/asr.py' in e['title'] for e in events)}
    prediction=load(OUT/'direct/118/prediction.json')
    put(PUBLIC/'traces/direct.json',{'condition':'direct','model':prediction['model'],'effort':prediction['effort'],
        'elapsed_sec':prediction['elapsed_sec'],'events':[{'index':1,'kind':'message','title':'一次 Responses 请求，未提供 Agent 工具',
        'body':f'源HTML + 人工转写 + {prediction["n_frames"]} 张时间戳帧；宽644px；实际约{prediction["fps"]:.3f}fps；xhigh；max_output_tokens=128000。\n回答已作为原始HTML交付保留。'}]})
    return overview


def packages():
    source_dir=PUBLIC/'previews/source';source_dir.mkdir(parents=True,exist_ok=True)
    original=OUT/'agent-omni/118/input'
    shutil.copy2(original/'source.html',source_dir/'index.html')
    for name,path in paths().items():
        target=PUBLIC/'previews'/name
        (target/'output').mkdir(parents=True,exist_ok=True)
        (target/'input').mkdir(exist_ok=True)
        shutil.copy2(path,target/'output/edited.html')
        shutil.copytree(original/'images',target/'input/images',dirs_exist_ok=True)
        content=path.read_text(encoding='utf-8')
        allowed={'edited.html'}
        if name!='direct':
            for file in path.parent.iterdir():
                if file.is_file() and file.name in content and file.suffix.lower() in ('.jpg','.png','.webp','.css','.js'):
                    shutil.copy2(file,target/'output'/file.name)
                    allowed.add(file.name)
            if (path.parent/'images').exists():shutil.copytree(path.parent/'images',target/'output/images',dirs_exist_ok=True)
        for old in (target/'output').iterdir():
            if old.is_file() and old.name not in allowed:
                assert old.resolve().is_relative_to(PUBLIC.resolve())
                old.unlink()
        with zipfile.ZipFile(PUBLIC/'files'/f'{name}-submission.zip','w',zipfile.ZIP_DEFLATED) as z:
            for p in target.rglob('*'):
                if p.is_file():z.write(p,str(p.relative_to(target)))


def audit_report(protocol):
    lines=['# Omni2Web 118 评测审计与修复','',f'版本：{protocol["version"]}。原始输入与交付不变，独立保存审计版。',
           '', '## 计分范围', '', '20条口述请求中，4条被后续撤销，剩16条最终操作。另有5条目标/范围缺少可靠同步证据，不强行判错，诊断分覆盖其余11条。'
           '权重仍为0.1定位、0.5编辑落实、0.2无损、0.2修订。它不等于官方全范围EFS，也不与论文排行榜直接比较。', '',
           '## 逐条核对','', '| 步 | 时间窗 | 状态 | 说明 |','|---|---|---|---|']
    descriptions=['顶部logo、菜单与Start a Project竖排','PHILOSOPHY与STUDIO换位','HERO改色','跨按钮样式','移动请求一','恢复HERO',
                  'SERVICES表头单列','替换Urban Oasis背景','隐藏请求','TRUST卡片样式','交换PORTFOLIO首/第三项目','恢复区块与SERVICES表头',
                  'JOURNAL筛选文字深棕','JOURNAL两列','移动请求二','FOOTER配色','删除Garden Stair卡片','AWARDS配色','恢复Urban Oasis原图','交换首/第三岗位']
    for step,description in enumerate(descriptions,1):
        t=STEP_TIMES[step-1];status='保留'
        reason=description+'；按原始视频、原HTML与最终状态核对。'
        if step in (2,3,7,8):status='后续撤销';reason+=' 不追扣中间状态。'
        if step in DISPUTED:status='争议排除';reason=DISPUTED[step]
        if step==20:status='修正锚点';reason='239–242s光标在OPEN ROLES第一个Architectural Designer、第三个Materials & Sustainability Specialist岗位上。原标注careers/partners外层交换不成立。'
        lines.append(f'| {step} | {t[0]}–{t[1]}s | {status} | {reason} |')
    lines+=['','## 工程修复','',
            '- 只将RMSE<2.5且宽高比差<2%的已验证同图本地资源归一回原URL；真实错配图片保留并评分。完整对照日志随protocol发布。',
            '- 加入1912×948浏览器计算样式和几何证据，避免忽略后追加CSS。截图正常执行页面脚本和滚动显现。',
            '- 文本在全局出现次数不减的移动不算删除；HTML差分把media query压平造成的假桌面变化被剔除。每个剔除项保留原因。',
            '- 争议操作不计通过或失败，它们的合理变化也不因从评分子集移除而被算作“无关损坏”。',
            '- Scan可能因争议移动操作离开页脚，不能仅因它不在footer内就拒绝其余已完成的页脚配色。',
            '- API、结构化输出失败均为judge_error，不记模型0分；全量ID与布尔类型校验。',
            '- 原始HTML、视频、模型交付、原分均保留；展示修复版时明确coverage及口径。', '',
            '## 验证', '', '满分构造解100.00；不改动基线42.73（修订与无损本身可得分）。这验证满分可达和不作为有区分度，不证明全部语义已完美。',
            '', '参考：原Omni2Web数据与WebVR源页，许可与来源见页面底部。']
    (PUBLIC/'files/audit-report.txt').write_text('\n'.join(lines)+'\n',encoding='utf-8')


def main():
    for sub in ['assets','files','traces']: (PUBLIC/sub).mkdir(parents=True,exist_ok=True)
    protocol=load(DEST/'protocol.json');cal=load(DEST/'calibration.json')
    assert cal['passed']
    results={n:load(DEST/n/'result.json') for n in LABELS}
    overview=traces();packages();audit_report(protocol)
    shutil.copy2(BASE/'request-preview.mp4',PUBLIC/'assets/request-preview.mp4')
    shutil.copy2(ROOT/'omni2web_data/video_118.mp4',PUBLIC/'files/request-original.mp4')
    for name in ['evidence_moves','evidence_scope']:
        shutil.copy2(BASE/(name+'.jpg'),PUBLIC/'assets'/(name+'.jpg'))
    for condition in ['source',*LABELS]:
        for view in ['hero','roles','journal','footer']:
            shutil.copy2(DEST/condition/(view+'.jpg'),PUBLIC/'assets'/f'{condition}-{view}.jpg')
    for name in LABELS:
        put(PUBLIC/'files'/f'{name}-result.json',results[name])
        put(PUBLIC/'files'/f'{name}-observations.json',load(DEST/name/'observations.json'))
        if name!='direct':
            (PUBLIC/'files'/f'{name}-prompt.txt').write_text((OUT/name/'118/PROMPT.md').read_text(encoding='utf-8'),encoding='utf-8')
    put(PUBLIC/'files/protocol.json',protocol)
    put(PUBLIC/'files/calibration.json',cal)
    row=records()['118']
    (PUBLIC/'files/transcript.txt').write_text(row['transcript'],encoding='utf-8')
    for filename in ['audit_118.py','build_118_site.py']:
        shutil.copy2(ROOT/'omni2web_run'/filename,PUBLIC/'files'/filename)
    license_text=(ROOT/'omni2web_eval/NOTICE.md').read_text(encoding='utf-8')
    (PUBLIC/'files/NOTICE.txt').write_text(license_text,encoding='utf-8')
    runinfo={n:load(OUT/n/'118/run_info.json') for n in LABELS}
    rows=[]
    for n in LABELS:
        r=results[n];c=r['category_scores_v3']
        rows.append([LABELS[n],f'{r["original_efs"]*100:.2f}',f'<b>{r["efs_weighted_v3"]*100:.2f}</b>',
                     *[f'{c[k]*100:.2f}' for k in ['target_grounding','edit_fulfillment','no_damage','revision']],clock(runinfo[n]['elapsed_sec'])])
    scoretable=table(['输入与运行条件','原始 EFS','审计诊断分','定位','编辑落实','无损','修订','求解耗时'],rows)
    itemrows=[]
    items={n:{i['item_id']:i for i in results[n]['items']} for n in LABELS}
    for item in protocol['active_rubric']:
        if item['category']=='no_damage':continue
        iid=item['item_id'];step=(int(iid[1:])+1)//2
        category={'target_grounding':'定位','edit_fulfillment':'执行','revision':'修订'}[item['category']]
        instruction=item['expected_visible_evidence']['after_expected_change']
        cells=[str(step)+' / '+iid,category,esc(instruction)]
        for n in LABELS:
            j=items[n][iid];cells.append(f'<span class="{"ok" if j["met"] else "no"}" title="{esc(j["reason"])}">{"✓" if j["met"] else "✗"}</span>')
        itemrows.append(cells)
    definitions=[['源网页','Atelier Lumen 建筑事务所长页面，WebVR test/155/155_1.html；约133.6 KB HTML。'],
                 ['中文录屏','243.2秒，20条编辑指令；弱指代“这个／这些”与光标、滚动配合。'],
                 ['直出','人工转写 + 最多95张644px时间戳帧；实际约0.391fps，一次请求，不调用工具。'],
                 ['Agent-VL','源HTML、图片副本、视频与人工转写；视频按静音处理，自主抽帧与渲染。'],
                 ['Agent-omni','源HTML、图片副本、带音轨视频；不给人工转写，使用本地Whisper large-v3听。'],
                 ['共同条件','Sol xhigh；Codex CLI 0.166.0-alpha.5.1；NJU Link Responses。agent全程联网，可装依赖、检索素材；禁止取数据集标注和其他运行答案。'],
                 ['交付','完整edited.html及其使用的本地资源。两条agent运行均正常退出；当前页面没有重新运行solver。']]
    trace_rows=[['直出','1次请求','无Agent工具','无','<a href="traces.html?run=direct">查看请求配置</a>']]
    for n in ['agent-vl','agent-omni']:
        o=overview[n];trace_rows.append([LABELS[n],str(o['commands'])+'条完成的shell命令',str(o['searches'])+'次搜索',str(o['asr'])+'次ASR相关执行',f'<a href="traces.html?run={n}">查看可见轨迹 →</a>'])
    transcript=esc(row['transcript'])
    failure_cards=''
    for step,iid,title in [(1,'r2','菜单纵排没有落实'),(6,'r12','要求撤销，深色主题仍保留'),(13,'r26','改了背景，文字仍是白色'),(20,'r40','岗位互换：原来错扣了两条agent')]:
        entries=''.join(f'<li><b>{LABELS[n]}</b>：{esc(items[n][iid]["reason"])}</li>' for n in LABELS)
        failure_cards+=f'<details class="card"><summary>第{step}步 · {title}</summary><ul>{entries}</ul></details>'
    extra='''
html{scroll-behavior:smooth}a{color:var(--accent)}.navline{display:flex;gap:20px;flex-wrap:wrap;font-size:13px;margin:22px 0}.navline a{text-decoration:none}
.table-wrap{overflow-x:auto}td{min-width:65px}td:nth-child(3){max-width:520px}figure{margin:16px 0}figcaption{font-size:12px;color:var(--muted);margin-top:7px}
.find{background:var(--soft);border-left:3px solid var(--accent);padding:14px 18px;border-radius:0 6px 6px 0;margin:16px 0}.quote{background:#fff8ed;border-left:3px solid var(--warm);padding:14px 18px;margin:16px 0}
.big{display:inline-block;background:var(--accent);color:white;padding:10px 18px;text-decoration:none;border-radius:6px;margin:8px 0}.toolbar{display:flex;gap:12px;flex-wrap:wrap}.toolbar a{font-size:13px}
.compare{display:grid;grid-template-columns:1fr 1fr;gap:14px}.compare img{width:100%}.preview{width:100%;height:600px;background:white;border:1px solid var(--line);border-radius:6px}
button,select,input{font:inherit;border:1px solid var(--line);border-radius:5px;padding:8px 10px;background:var(--paper);color:var(--ink)}button{cursor:pointer}.dl{columns:2}.back{font-size:12px;color:var(--muted)}code{font-size:.9em}summary{line-height:1.6}
@media(max-width:680px){main{padding:24px 18px 60px}h1{font-size:27px}.compare{grid-template-columns:1fr}.dl{columns:1}.preview{height:460px}table{font-size:12px}}
'''
    page=f'''<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>OmniALE · Omni2Web 118 中文录屏网页编辑</title><style>{CSS}{extra}</style></head><body><main>
<div class="eyebrow">OMNIALE · OMNI2WEB 中文难例复现 / SAMPLE 118</div>
<h1>听懂“这个”，找准页面，完成二十步编辑</h1>
<p class="lead">一段中文讲解录屏反复滚动长页面、指向元素、提出修改又撤销。Agent需要把语音与光标对齐，维护最终意图，并交付完整网页。</p>
<span class="tag">中文录屏 4分03秒</span><span class="tag">20条指令 · 4条被撤销</span><span class="tag">Sol · xhigh</span><span class="tag gray">联网环境</span><span class="tag gray">评分已审计</span>
<nav class="navline"><a href="#task">一、任务定义</a><a href="#results">二、运行结果</a><a href="#traces">三、运行轨迹</a><a href="#analysis">四、失败分析</a><a href="#files">文件与来源</a></nav>
<h2 id="task">一、任务定义</h2>
<p>委托场景：对一份已有建筑事务所网站做精确修改。语言只说“这个”“这些”“这里”，具体元素由录屏中的光标确定；后续撤销应覆盖前序要求。</p>
<div class="card"><video controls preload="metadata" playsinline poster="assets/source-hero.jpg" src="assets/request-preview.mp4"></video><p class="note">原始请求视频的压缩预览，保留中文音轨和完整时序；<a href="files/request-original.mp4" download>下载原始录屏</a>。视频内容来自 Omni2Web 118。</p></div>
{table(['材料 / 条件','内容'],definitions)}
<details class="card"><summary>展开20条中文请求原文</summary><pre>{transcript}</pre></details>
<h3>需要交付什么</h3><p>只修改用户要求的部分，保留其余内容和结构；对换位、批量样式、图片替换、隐藏、布局及多次撤销，执行最后仍有效的意图。Agent自行决定抽帧密度、裁剪、重听与浏览器自检，没有额外限制总轮数、总时长或抽帧数。</p>
<h3>验收与评分修复</h3><p>EFS沿用定位10%、编辑落实50%、无损20%、修订20%。裁判为NJU Link的 <code>gpt-6-sol / high</code>；本页并非论文使用Gemini裁判的官方排行榜。</p>
<div class="quote"><b>先修复评测，再解释结果。</b>视频审计发现第20步实际指向两个岗位；另有5条指令的批量范围或移动目的地缺少可靠证据。审计版排除这5条争议指令，覆盖16条最终有效操作中的11条；没有把争议直接算错，也没有改动模型交付。</div>
<details class="card"><summary>哪些评分问题已修复，哪些保留不确定性？</summary><ul>
<li>核对图片内容：同图URL本地化不算换图；真实错配资源仍扣分。</li><li>读取浏览器计算样式：检查最终CSS和实际布局，避免只看早期规则。</li><li>修正第20步为OPEN ROLES内部首、第三岗位交换。</li><li>第4、5、9、10、15步不进入审计分。对应争议变动也不能因为从评分子集排除，就被算作额外损坏。</li><li>修复移动文本被差分误识为丢失，以及media query被压平造成的假变化；保留每一项排除原因。</li></ul><p><a href="files/audit-report.txt">查看20步审计说明</a> · <a href="files/protocol.json">查看评分范围、输入哈希与图片核验</a></p>
<img loading="lazy" src="assets/evidence_moves.jpg" alt="移动与岗位交换的原始视频帧证据"><p class="note">58–62秒与173秒的移动请求发生在页面底部；241秒光标指向招聘列表内部。范围不明确的条目按争议处理。</p></details>
<h2 id="results">二、运行结果</h2>{scoretable}
<p class="note">所有模型均为同一Sol，xhigh；三份交付均正常完成。定位、编辑落实、无损、修订显示百分制；原始EFS与审计诊断分使用不同评分范围，不能把差值当作模型能力提升，也不与论文全量均分比较。</p>
<div class="find"><b>校准：</b>审计范围的满分构造解为 <b>{cal['reference']*100:.2f}</b>；不修改页面为 <b>{cal['noop']*100:.2f}</b>。不作为也能拿到修订和无损分，因此总分不能替代“编辑落实”分。校准说明可达性与对照区分，不能证明评分没有其他局限。</div>
<details class="card"><summary>逐项通过矩阵（23个计分项中的22个定位／执行／修订项）</summary>{table(['步骤 / ID','类型','有效要求','直出','Agent-VL','Agent-omni'],itemrows)}<p class="note">悬停勾叉可看裁判具体理由；完整理由和无损差分见各条件JSON下载。</p></details>
<h3>查看实际交付</h3><div class="toolbar"><label>选择 <select id="preview-choice"><option value="source">原始页面</option>{''.join(f'<option value="{n}">{label}交付</option>' for n,label in LABELS.items())}</select></label><a id="preview-open" href="previews/source/index.html" target="_blank" rel="noopener">单独打开 →</a></div>
<iframe class="preview" id="preview" title="源网页与模型交付预览" loading="lazy" sandbox="allow-scripts" src="previews/source/index.html"></iframe><p class="note">实际HTML与资源的隔离预览；第三方远程图片可用性可能变化。原始提交打包保留在下载区。</p>
<h2 id="traces">三、运行轨迹</h2><p>两个agent从独立工作区开始，自主抽帧、裁剪、转写、编辑及渲染。完整保留可见回复、执行命令和工具输出；不把CLI未记录的看图调用计为零，也不展示隐藏推理。</p>
{table(['条件','调用','联网搜索','语音工具','轨迹入口'],trace_rows)}<a class="big" href="traces.html">打开运行轨迹浏览器 →</a>
<p class="note">工具轨迹只有执行顺序，没有逐条时间戳。耗时来自进程起止的墙钟时间，包含工具与自查；omni为33分46秒，VL为17分49秒。两者都真实调用Playwright；omni执行了本地Whisper并对片段重听。</p>
<h2 id="analysis">四、失败分析</h2>
<div class="find"><b>先纠正一项结论：</b>两条agent都正确交换了招聘列表内部的岗位。旧标注把它误写成整个招聘区与合作伙伴区换位，不能据此说模型“把区块换位做成了岗位调序”。</div>
<div class="compare"><figure><img loading="lazy" src="assets/source-roles.jpg" alt="原始招聘列表"><figcaption>原始：Architectural Designer → BIM Coordinator → Materials。</figcaption></figure><figure><img loading="lazy" src="assets/agent-omni-roles.jpg" alt="Agent omni交换后的岗位列表"><figcaption>Agent-omni：Materials → BIM Coordinator → Architectural Designer，目标交换已完成。</figcaption></figure></div>
<h3>仍有证据支持的失败</h3><p>三份交付的菜单最终仍为横排；要求恢复的HERO仍是深色；JOURNAL文字仍为白色，深棕色被用于背景。这些由浏览器计算值直接支持。Agent-omni还没有完成项目卡片换位与SERVICES表头恢复；具体以逐项理由为准。</p>
{failure_cards}
<div class="compare"><figure><img loading="lazy" src="assets/source-hero.jpg" alt="原始浅色首屏"><figcaption>原始首屏：浅色背景、深色标题，顶部菜单横排。</figcaption></figure><figure><img loading="lazy" src="assets/agent-omni-hero.jpg" alt="Agent omni最终深色首屏"><figcaption>Agent-omni最终：深色主题未撤回，菜单仍横排。此图只展示已确认的失败，不裁断隐藏范围争议。</figcaption></figure></div>
<h3>如何理解agent的分数</h3><p>这次复现同时暴露了模型的目标／属性绑定与撤销状态管理问题，以及基准标注、资产可见性和源码差分的测量问题。审计版用于定位有证据的差距，不能推导“原生听觉能力”或全量benchmark排名；omni使用Whisper，它与VL也不是完全相同的信息条件。</p>
<p class="note">原提示沿用“图片是本地相对路径”的不准确说明，实际源HTML引用远程图片。审计修复处理了由此产生的同图误罚，但没有重跑solver消除这项运行配置差异。</p>
<h2 id="files">文件与来源</h2><ul class="dl"><li><a href="files/audit-report.txt">20步评测审计</a></li><li><a href="files/protocol.json">评分协议、范围和输入哈希</a></li><li><a href="files/calibration.json">校准结果</a></li><li><a href="files/transcript.txt">人工转写</a></li>{''.join(f'<li><a href="files/{n}-result.json">{label}逐项结果</a> · <a href="files/{n}-submission.zip">提交包</a></li>' for n,label in LABELS.items())}<li><a href="files/audit_118.py">审计评分脚本</a></li><li><a href="files/NOTICE.txt">数据来源与许可</a></li></ul>
<p class="note">任务与录屏：<a href="https://huggingface.co/datasets/minghaofdu/Omni2Web">Omni2Web · sample 118</a>；原评分代码：<a href="https://github.com/Hanminghao/Omni2Web-evaluation">Hanminghao/Omni2Web-evaluation</a>；源网页：<a href="https://huggingface.co/datasets/BroAlanTaps/WebVR">WebVR</a>，revision 7917c3a2b44a0838eb0acffb80a38ec6030b49b6。Omni2Web原始贡献为CC BY-NC 4.0；本页标明了评分修订，第三方网页和图片保留各自许可。</p>
<p class="note">更新：{now()[:19].replace('T',' ')}（北京时间） · 评分版本 118-audit-v2 · 单次运行，未估计运行间方差。</p>
</main><script>document.getElementById('preview-choice').addEventListener('change',e=>{{const n=e.target.value;const u=n==='source'?'previews/source/index.html':`previews/${{n}}/output/edited.html`;document.getElementById('preview').src=u;document.getElementById('preview-open').href=u;}});</script></body></html>'''
    (PUBLIC/'index.html').write_text(page,encoding='utf-8')
    trace_page='''<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><title>118 · 运行轨迹</title><style>'''+CSS+extra+''' .event{border-top:1px solid var(--line);padding:12px 0}.event summary{font-family:monospace;white-space:pre-wrap;word-break:break-word}.event pre{max-height:650px}.controls{position:sticky;top:0;background:var(--bg);padding:12px 0;z-index:2}#count{font-size:13px;color:var(--muted)}</style></head><body><main><a class="back" href="./">← 返回118案例页</a><h1>118 · 可见运行轨迹</h1><p class="lead">按执行顺序浏览命令、工具输出和可见回复。没有逐条时间戳；不包含隐藏推理，长输出已标注截断。</p><div class="controls toolbar"><select id="run"><option value="agent-omni">Agent-omni</option><option value="agent-vl">Agent-VL</option><option value="direct">直出</option></select><select id="kind"><option value="all">全部记录</option><option value="command">命令</option><option value="search">搜索</option><option value="message">可见回复</option><option value="error">失败命令</option></select><input id="search" type="search" placeholder="搜索命令或输出" aria-label="搜索轨迹"><span id="count"></span></div><p id="meta" class="note"></p><div id="events" aria-live="polite"></div></main><script>
let data;const $=id=>document.getElementById(id);const requested=new URLSearchParams(location.search).get('run');if(['direct','agent-vl','agent-omni'].includes(requested))$('run').value=requested;
function draw(){const q=$('search').value.toLowerCase(),kind=$('kind').value;const es=data.events.filter(e=>(kind==='all'||e.kind===kind||(kind==='error'&&e.exit_code!=null&&e.exit_code!==0))&&JSON.stringify(e).toLowerCase().includes(q));$('events').replaceChildren();$('count').textContent=`${es.length} / ${data.events.length} 条`;
for(const e of es){const d=document.createElement('details');d.className='event';const s=document.createElement('summary');const title=e.title.replace(/\\s+/g,' ');s.textContent=`#${e.index} · ${e.kind}${e.exit_code!=null?' · exit='+e.exit_code:''}  ${title.slice(0,180)}${title.length>180?'…':''}`;d.appendChild(s);const p=document.createElement('pre');p.textContent=(e.kind==='command'?'[命令]\\n'+e.title+'\\n\\n[输出]\\n':'')+e.body+(e.truncated?'\\n[长输出截断]':'');d.appendChild(p);$('events').appendChild(d);}}
async function load(){const response=await fetch('traces/'+$('run').value+'.json');if(!response.ok)throw new Error('HTTP '+response.status);data=await response.json();$('meta').textContent=`${data.model} · ${data.effort} · 耗时 ${(data.elapsed_sec/60).toFixed(1)} 分钟 · ${data.note||'直出请求，无Agent轨迹'}`;draw();}
$('run').addEventListener('change',()=>load().catch(error=>$('meta').textContent=error.message));$('kind').addEventListener('change',draw);$('search').addEventListener('input',draw);load().catch(error=>$('meta').textContent=error.message);
</script></body></html>'''
    (PUBLIC/'traces.html').write_text(trace_page,encoding='utf-8')
    put(BASE/'build_manifest.json',{'built_at':now(),'route':ROUTE,'files':sum(p.is_file() for p in PUBLIC.rglob('*')),
                                  'scores':{n:r['efs_weighted_v3'] for n,r in results.items()},'coverage':protocol['coverage']})
    print('BUILT',PUBLIC,flush=True)


if __name__=='__main__':main()
