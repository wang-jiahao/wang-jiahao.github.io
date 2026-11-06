/* Render window.DATA before link.js binds video and citation events. */
(function () {
  "use strict";

  var DATA = (window.DATA && typeof window.DATA === "object") ? window.DATA : {};
  var STRINGS = pickLang(DATA.meta && DATA.meta.lang);
  function el(tag, cls, txt) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    return n;
  }
  function frag() { return document.createDocumentFragment(); }
  function isArr(x) { return Array.isArray(x); }
  function num(x, d) { var n = parseFloat(x); return isFinite(n) ? n : (d || 0); }
  function fmtTime(sec) {
    sec = Math.max(0, Math.floor(num(sec, 0)));
    var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    var mm = (h ? String(m).padStart(2, "0") : String(m));
    return (h ? h + ":" : "") + mm + ":" + String(s).padStart(2, "0");
  }
  function pickLang(lang) {
    var zh = !lang || String(lang).toLowerCase().indexOf("zh") === 0;
    return zh
      ? { analysis: "分析", toc: "时间轴", lede: "视频简介", sources: "参考来源",
          insights: "综合洞察", segMore: "延伸", noData: "（暂无数据）" }
      : { analysis: "Analysis", toc: "Timeline", lede: "Overview", sources: "Sources",
          insights: "Insights", segMore: "More", noData: "(no data)" };
  }
  var research = isArr(DATA.research) ? DATA.research : [];
  var SRC_IDS = {};
  research.forEach(function (r) { if (r && r.id) SRC_IDS[r.id] = true; });
  var brokenCites = {};
  // Parse inline formatting into DOM nodes without interpreting HTML.
  function withCites(text) {
    if (text == null) return frag();
    return renderInline(String(text));
  }
  function renderInline(str) {
    var out = frag(), i = 0, n = str.length, buf = "";
    function flush() { if (buf) { out.appendChild(document.createTextNode(buf)); buf = ""; } }
    while (i < n) {
      var ch = str.charAt(i);
      if (ch === "[") {
        var mc = /^\[(S\d+)\]/.exec(str.slice(i));
        if (mc) { flush(); out.appendChild(citeNode(mc[1])); i += mc[0].length; continue; }
      }
      if (ch === "`") {
        var ce = str.indexOf("`", i + 1);
        if (ce > i + 1) { flush(); out.appendChild(el("code", null, str.slice(i + 1, ce))); i = ce + 1; continue; }
      }
      if (ch === "*" && str.charAt(i + 1) === "*") {
        var be = str.indexOf("**", i + 2);
        if (be > i + 1) {
          flush();
          var strong = el("strong"); strong.appendChild(renderInline(str.slice(i + 2, be)));
          out.appendChild(strong); i = be + 2; continue;
        }
      }
      if (ch === "*" || ch === "_") {
        var isU = ch === "_";
        var openOk = !isU || i === 0 || !/\w/.test(str.charAt(i - 1));
        if (openOk) {
          var ie = str.indexOf(ch, i + 1);
          if (ie > i + 1 && str.charAt(i + 1) !== " " && str.charAt(ie - 1) !== " " &&
              (!isU || ie + 1 >= n || !/\w/.test(str.charAt(ie + 1)))) {
            flush();
            var em = el("em"); em.appendChild(renderInline(str.slice(i + 1, ie)));
            out.appendChild(em); i = ie + 1; continue;
          }
        }
      }
      buf += ch; i++;
    }
    flush();
    return out;
  }
  function citeNode(sid) {
    if (SRC_IDS[sid]) {
      var sup = el("sup", "cite");
      sup.dataset.src = sid;
      sup.textContent = sid.replace(/^S/, "");
      return sup;
    }
    brokenCites[sid] = true;
    var bad = el("span", "cite-broken", sid);
    bad.title = STRINGS.noData;
    return bad;
  }
  function citeList(ids) {
    var span = el("span", "cite-list");
    (isArr(ids) ? ids : []).forEach(function (sid) { span.appendChild(citeNode(sid)); });
    return span;
  }
  function paraInto(parent, text, cls) {
    var p = el("p", cls || null);
    p.appendChild(withCites(text));
    parent.appendChild(p);
    return p;
  }
  // Deduplicate images unless explicitly marked wide.
  var _seenMedia = Object.create(null);
  function mediaFigure(src, cap, wide) {
    if (src && !wide) {
      if (_seenMedia[src]) return null;
      _seenMedia[src] = true;
    }
    var fig = el("figure", "media" + (wide ? " wide" : ""));
    var img = el("img");
    img.src = src;
    img.loading = "lazy";
    img.alt = cap || "";
    img.addEventListener("click", function () { openLightbox(src, cap); });
    img.addEventListener("error", function () {
      fig.classList.add("media-broken");
      if (img.parentNode) img.parentNode.removeChild(img);
      if (!fig.querySelector(".media-missing"))
        fig.insertBefore(el("div", "media-missing", cap ? "图片缺失：" + cap : "图片缺失"), fig.firstChild);
    });
    fig.appendChild(img);
    if (cap) {
      var caption = el("figcaption");
      caption.appendChild(withCites(cap)); fig.appendChild(caption);
    }
    return fig;
  }
  function captionBlock(b) {
    if (!b || typeof b !== "object") return null;
    switch (b.type) {
      case "text":
        if (!b.text) return null;
        var p = el("p"); p.appendChild(withCites(b.text)); return p;
      case "image":
        if (!b.src) return null;
        return mediaFigure(b.src, b.cap, b.wide);
      case "flow":
        return flowBlock(b);
      case "mindmap":
        return mindmapBlock(b);
      case "svg":
        if (!b.svg) return null;
        var w = el("div", "svg-block"), diagram = el("img");
        // Render SVG as an inert image, outside the document DOM.
        diagram.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(String(b.svg));
        diagram.alt = b.title || "Diagram";
        w.appendChild(diagram); return w;
      default:
        if (b.text) { var d = el("p"); d.appendChild(withCites(b.text)); return d; }
        return null;
    }
  }
  function flowBlock(b) {
    var steps = isArr(b.steps) ? b.steps.filter(Boolean) : [];
    if (!steps.length) return null;
    var wrap = el("div", "flow");
    if (b.title) {
      var title = el("div", "flow-title");
      title.appendChild(withCites(b.title)); wrap.appendChild(title);
    }
    steps.forEach(function (s, i) {
      if (i) wrap.appendChild(el("span", "arrow", "→"));
      var step = el("span", "step");
      step.appendChild(withCites(s)); wrap.appendChild(step);
    });
    return wrap;
  }
  function mindmapBlock(b) {
    var branches = isArr(b.branches) ? b.branches : [];
    if (!b.root && !branches.length) return null;
    var wrap = el("div", "mindmap");
    if (b.root) {
      var root = el("div", "mm-root");
      root.appendChild(withCites(b.root)); wrap.appendChild(root);
    }
    var grid = el("div", "mm-branches");
    branches.forEach(function (br) {
      if (!br) return;
      var box = el("div", "mm-branch");
      var label = el("div", "mm-label");
      label.appendChild(withCites(br.label != null ? br.label : (br.title != null ? br.title : "")));
      box.appendChild(label);
      var items = isArr(br.items) ? br.items : (isArr(br.children) ? br.children : []);
      if (items.length) {
        var ul = el("ul");
        items.forEach(function (it) {
          var item = el("li"); item.appendChild(withCites(it)); ul.appendChild(item);
        });
        box.appendChild(ul);
      }
      grid.appendChild(box);
    });
    wrap.appendChild(grid);
    return wrap;
  }
  function insightCard(ins) {
    if (!ins || typeof ins !== "object") return null;
    var kind = ins.kind || "context";
    var card;
    if (ins.title) {
      card = el("details", "insight");
      card.open = true;
      var head = el("summary", "insight-head");
      head.appendChild(el("span", "kind", kind));
      head.appendChild(el("h3", null, ins.title));
      card.appendChild(head);
    } else {
      card = el("div", "insight");
    }
    card.dataset.kind = kind;
    if (kind === "timeliness" && (ins.videoClaim || ins.currentFact)) {
      var grid = el("div", "tl-grid");
      var then = el("div", "cell then");
      then.appendChild(el("div", "lbl", zhOr("视频原述", "In the video")));
      var tp = el("div"); tp.appendChild(withCites(ins.videoClaim || "")); then.appendChild(tp);
      var now = el("div", "cell now");
      now.appendChild(el("div", "lbl", zhOr("最新事实", "As of now")));
      var np = el("div"); np.appendChild(withCites(ins.currentFact || "")); now.appendChild(np);
      grid.appendChild(then); grid.appendChild(now);
      card.appendChild(grid);
    }
    if (ins.body) paraInto(card, ins.body);
    if (ins.table) card.appendChild(tableBlock(ins.table));
    if (isArr(ins.sources) && ins.sources.length) card.appendChild(citeList(ins.sources));
    return card;
  }
  function tableBlock(t) {
    var wrap = el("div", "tbl-wrap");
    var table = el("table");
    if (isArr(t.cols) && t.cols.length) {
      var thead = el("thead"), tr = el("tr");
      t.cols.forEach(function (c) { tr.appendChild(el("th", null, String(c))); });
      thead.appendChild(tr); table.appendChild(thead);
    }
    var tbody = el("tbody");
    (isArr(t.rows) ? t.rows : []).forEach(function (row) {
      var tr = el("tr");
      (isArr(row) ? row : [row]).forEach(function (cell) {
        var td = el("td"); td.appendChild(withCites(String(cell))); tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    wrap.appendChild(table);
    return wrap;
  }
  function zhOr(zh, en) {
    var isZh = !(DATA.meta && DATA.meta.lang) ||
      String(DATA.meta.lang).toLowerCase().indexOf("zh") === 0;
    return isZh ? zh : en;
  }
  function segmentCard(seg, idx) {
    var card = el("article", "seg");
    var id = seg.id || ("seg" + (idx + 1));
    card.id = "seg-" + id;
    card.dataset.seg = id;
    card.dataset.segStart = num(seg.start, 0);
    var det = el("details", "seg-details");
    det.open = true;
    var head = el("summary", "seg-head");
    head.appendChild(el("span", "seg-badge", fmtTime(seg.start)));
    head.appendChild(el("h3", null, seg.title || (STRINGS.analysis + " " + (idx + 1))));
    det.appendChild(head);

    var body = el("div", "seg-body");
    if (seg.keyframe) {
      var kf = mediaFigure(seg.keyframe, seg.title || "", false);
      if (kf) body.appendChild(kf);
    }
    var caption = isArr(seg.caption) ? seg.caption : (seg.text ? [{ type: "text", text: seg.text }] : []);
    caption.forEach(function (b) {
      var node = captionBlock(b);
      if (node) body.appendChild(node);
    });
    if (isArr(seg.sources) && seg.sources.length) body.appendChild(citeList(seg.sources));
    var segIns = isArr(seg.insights) ? seg.insights : [];
    if (segIns.length) {
      var box = el("div", "insights");
      box.style.marginTop = "14px";
      segIns.forEach(function (ins) {
        var n = insightCard(ins);
        if (n) box.appendChild(n);
      });
      body.appendChild(box);
    }

    det.appendChild(body);
    card.appendChild(det);
    return card;
  }
  function sourceCard(r) {
    var card = el("div", "src");
    card.id = "src-" + r.id;
    card.appendChild(el("span", "sid", r.id));
    var main = el("div");
    var titleLine = el("div", "stitle");
    if (r.url) {
      var a = el("a", null, r.title || r.url);
      a.href = r.url; a.target = "_blank"; a.rel = "noopener noreferrer";
      titleLine.appendChild(a);
    } else {
      titleLine.appendChild(document.createTextNode(r.title || r.id));
    }
    if (r.type) titleLine.appendChild(el("span", "stype", r.type));
    main.appendChild(titleLine);
    if (r.summary) main.appendChild(el("div", "ssum", r.summary));
    if (r.thumb) {
      var img = el("img", "sthumb"); img.src = r.thumb; img.loading = "lazy"; img.alt = "";
      img.addEventListener("click", function () { openLightbox(r.thumb, r.title); });
      img.addEventListener("error", function () { if (img.parentNode) img.parentNode.removeChild(img); });
      main.appendChild(img);
    }
    card.appendChild(main);
    return card;
  }
  var lightbox;
  function openLightbox(src, cap) {
    if (!lightbox) return;
    var img = lightbox.querySelector("img");
    img.src = src; img.alt = cap || "";
    lightbox.hidden = false;
  }
  function initLightbox() {
    lightbox = el("div", "lightbox");
    lightbox.hidden = true;
    lightbox.appendChild(el("img"));
    lightbox.addEventListener("click", function () { lightbox.hidden = true; });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox && !lightbox.hidden) lightbox.hidden = true;
    });
    document.body.appendChild(lightbox);
  }
  // TOC entries omit data-seg-start to avoid duplicate playback listeners.
  function buildTOC(segs, player) {
    var nav = el("nav", "toc");
    var head = el("div", "toc-head");
    head.appendChild(el("span", "toc-head-label", STRINGS.toc));
    var toggleAll = el("button", "toc-toggle-all", zhOr("全部展开/折叠", "Expand/collapse all"));
    toggleAll.type = "button";
    toggleAll.addEventListener("click", function () {
      var ds = document.querySelectorAll("details.seg-details, details.insight");
      var anyOpen = false;
      for (var i = 0; i < ds.length; i++) { if (ds[i].open) { anyOpen = true; break; } }
      for (var k = 0; k < ds.length; k++) { ds[k].open = !anyOpen; }
    });
    head.appendChild(toggleAll);
    nav.appendChild(head);

    segs.forEach(function (seg, idx) {
      var id = seg.id || ("seg" + (idx + 1));
      var item = el("button", "toc-item");
      item.type = "button";
      item.dataset.tocSeg = id;
      item.appendChild(el("span", "toc-time", fmtTime(seg.start)));
      item.appendChild(el("span", "toc-title", seg.title || (STRINGS.analysis + " " + (idx + 1))));
      item.addEventListener("click", function () {
        var t = num(seg.start, 0);
        if (player) {
          try { player.currentTime = t; } catch (e) {}
          var p = player.play && player.play();
          if (p && p.catch) p.catch(function () {});
        }
        var target = document.getElementById("seg-" + id);
        if (target) {
          var d = target.querySelector ? target.querySelector("details") : null;
          if (d && !d.open) d.open = true;
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
      nav.appendChild(item);
    });
    function addAnchor(secId, label) {
      var item = el("button", "toc-item toc-anchor");
      item.type = "button";
      item.appendChild(el("span", "toc-title", label));
      item.addEventListener("click", function () {
        var t = document.getElementById(secId);
        if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      nav.appendChild(item);
    }
    if (isArr(DATA.insights) && DATA.insights.length) addAnchor("sec-insights", STRINGS.insights);
    if (research.length) addAnchor("sec-sources", STRINGS.sources);
    if (player) {
      player.addEventListener("timeupdate", function () {
        syncTOC(nav, segs, player.currentTime);
      });
    }
    return nav;
  }
  function syncTOC(nav, segs, t) {
    var active = 0;
    for (var i = 0; i < segs.length; i++) {
      if (num(segs[i].start, 0) <= t + 1e-3) active = i; else break;
    }
    var items = nav.querySelectorAll(".toc-item:not(.toc-anchor)");
    for (var j = 0; j < items.length; j++) {
      items[j].classList.toggle("is-active", j === active);
    }
  }
  function render() {
    _seenMedia = Object.create(null);
    var root = document.documentElement;
    var theme = (DATA.meta && DATA.meta.theme) || "t01";
    if (!/^t(0[1-9]|1[0-9]|20)$/.test(theme)) theme = "t01";
    root.dataset.theme = theme;
    if (DATA.meta && DATA.meta.lang) root.lang = DATA.meta.lang;
    else if (!root.lang) root.lang = "zh";
    var bg = DATA.meta && DATA.meta.background;
    if (bg && typeof bg === "string") {
      root.style.setProperty("--bg-image", 'url("' + bg.replace(/["\\]/g, encodeURIComponent) + '")');
      root.setAttribute("data-has-bg", "1");
    } else {
      root.style.removeProperty("--bg-image");
      root.removeAttribute("data-has-bg");
    }

    var app = document.getElementById("app");
    if (!app) { app = el("div", "app"); document.body.appendChild(app); }
    app.innerHTML = "";

    var video = DATA.video || {};
    var segs = isArr(DATA.segments) ? DATA.segments.slice() : [];
    segs.sort(function (a, b) { return num(a.start, 0) - num(b.start, 0); });
    var left = el("aside", "left");
    var pw = el("div", "player-wrap");
    var v = document.createElement("video");
    v.id = "player";
    v.controls = true;
    v.preload = "metadata";
    v.playsInline = true;
    if (video.poster) v.poster = video.poster;
    var source = document.createElement("source");
    source.src = video.src || "media/source.mp4";
    v.appendChild(source);
    pw.appendChild(v);
    left.appendChild(pw);
    left.appendChild(buildTOC(segs, v));
    app.appendChild(left);
    var right = el("main", "right");

    var hero = el("header", "hero");
    if (DATA.meta && DATA.meta.category) hero.appendChild(el("div", "kicker", DATA.meta.category));
    hero.appendChild(el("h1", null, video.title || "Omni Deep Research"));
    var lede = DATA.summary || (DATA.meta && DATA.meta.summary);
    if (lede) {
      var det = el("details", "hero-lede");
      det.appendChild(el("summary", null, STRINGS.lede));
      var lb = el("div", "lede-body");
      lb.appendChild(withCites(String(lede)));
      det.appendChild(lb);
      hero.appendChild(det);
    }
    right.appendChild(hero);
    right.appendChild(sectionTitle(STRINGS.analysis));
    if (segs.length) {
      var segWrap = el("section", "segments");
      segs.forEach(function (seg, i) { segWrap.appendChild(segmentCard(seg, i)); });
      right.appendChild(segWrap);
    } else {
      right.appendChild(el("p", "notice", STRINGS.noData));
    }
    var xins = isArr(DATA.insights) ? DATA.insights : [];
    if (xins.length) {
      right.appendChild(sectionTitle(STRINGS.insights, "sec-insights"));
      var ibox = el("section", "insights");
      xins.forEach(function (ins) { var n = insightCard(ins); if (n) ibox.appendChild(n); });
      right.appendChild(ibox);
    }
    if (research.length) {
      right.appendChild(sectionTitle(STRINGS.sources, "sec-sources"));
      var sbox = el("section", "sources");
      research.forEach(function (r) { if (r && r.id) sbox.appendChild(sourceCard(r)); });
      right.appendChild(sbox);
    }

    right.appendChild(footer(video));
    app.appendChild(right);

    initLightbox();
    var broken = Object.keys(brokenCites);
    if (broken.length) {
      console.warn("[video-report-ui] " + broken.length +
        " citation(s) reference a missing research source: " + broken.join(", ") +
        ". They render inert. Add them to window.DATA.research or remove the [S#] marker.");
    }
    return { segments: segs.length, sources: research.length, broken: broken };
  }
  function sectionTitle(t, id) {
    var h = el("h2", "sec-title", t);
    if (id) h.id = id;
    return h;
  }
  function footer(video) {
    var f = el("footer", "footer");
    var bits = [];
    if (video.duration) bits.push(zhOr("时长", "Duration") + " " + fmtTime(video.duration));
    bits.push(zhOr("由 Omni Deep Research 生成", "Generated by Omni Deep Research"));
    f.textContent = bits.join(" · ");
    return f;
  }
  // link.js needs the segment DOM immediately, before DOMContentLoaded.
  window.__renderReport = render;
  render();
})();
