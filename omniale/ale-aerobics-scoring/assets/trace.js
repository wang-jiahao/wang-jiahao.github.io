"use strict";
const el = function (id) { return document.getElementById(id); };
let data = null;
let requestNumber = 0;
const names = {command:"命令",message:"可见回复",search:"检索 / 打开",cua:"桌面操作",file:"文件变更",notice:"CLI 提示",image:"看图"};
function draw() {
  if (!data) return;
  const query = el("search").value.toLowerCase();
  const kind = el("kind").value;
  const source = kind === "image" ? data.images : data.events;
  const events = source.filter(function (e) {
    const typeOK = kind === "all" || kind === "image" || e.kind === kind ||
      (kind === "failed" && e.exit_code != null && e.exit_code !== 0);
    return typeOK && (e.title + "\n" + e.body).toLowerCase().includes(query);
  });
  el("events").replaceChildren();
  el("count").textContent = events.length + " / " + source.length + " 条";
  if (!events.length) {
    const empty = document.createElement("p");
    empty.className = "empty"; empty.textContent = "没有匹配记录。"; el("events").appendChild(empty);
  }
  for (const e of events) {
    const d = document.createElement("details"); d.className = "event";
    const s = document.createElement("summary");
    const title = e.title.replace(/\s+/g, " ");
    s.textContent = "#" + e.index + " · " + (names[e.kind] || e.kind) +
      (e.exit_code != null ? " · exit=" + e.exit_code : "") + "  " +
      title.slice(0, 175) + (title.length > 175 ? "…" : "");
    d.appendChild(s);
    const p = document.createElement("pre");
    p.textContent = (e.kind === "command" ? "[命令]\n" + e.title + "\n\n[输出]\n" : "") +
      e.body + (e.truncated ? "\n[长输出已截断至24000字符]" : "");
    d.appendChild(p);
    if (e.kind === "image") {
      const note = document.createElement("p"); note.className = "note";
      note.textContent = e.image ? "保留图像的网页展示副本；点击可放大。" :
        "该次调用有 OTLP 记录；此处没有附图像副本。";
      d.appendChild(note);
      if (e.image) {
        const a = document.createElement("a"); a.href = e.image; a.target = "_blank"; a.rel = "noopener";
        const image = document.createElement("img"); image.loading = "lazy"; image.src = e.image; image.alt = e.title;
        a.appendChild(image); d.appendChild(a);
      }
    }
    el("events").appendChild(d);
  }
}
async function changeRun() {
  const current = ++requestNumber;
  const run = el("run").value;
  el("status").textContent = "正在读取记录…";
  el("events").replaceChildren();
  try {
    const response = await fetch("traces/" + encodeURIComponent(run) + ".json");
    if (!response.ok) throw new Error("HTTP " + response.status);
    const result = await response.json();
    if (current !== requestNumber) return;
    data = result;
    el("meta").textContent = data.label + " · " + data.model + " / " + data.effort.join(", ");
    el("trace-note").textContent = data.note;
    el("status").className = data.excluded ? "trace-status excluded-banner" : "trace-status";
    el("status").textContent = data.excluded ? "历史运行因使用本曲现成总谱和原工程而排除，不计独立转谱成绩。" :
      (data.network_condition === "windows_user_proxy_forwarded" ? "修复用户代理后独立运行；实际容器网络已验证。顺序号不代表逐事件时间戳。" :
       "历史网络条件：未继承Windows代理，部分模型主机不可达。记录保留，不混为修复后的联网成绩；顺序号不代表逐事件时间戳。");
    const url = new URL(location.href); url.searchParams.set("run", run); history.replaceState(null, "", url);
    draw();
  } catch (error) {
    el("status").textContent = "记录读取失败，请刷新重试：" + error.message;
  }
}
const initial = new URL(location.href).searchParams.get("run");
if (initial && Array.from(el("run").options).some(function (x) { return x.value === initial; })) el("run").value = initial;
el("run").addEventListener("change", changeRun);
el("kind").addEventListener("change", draw);
el("search").addEventListener("input", draw);
changeRun();
