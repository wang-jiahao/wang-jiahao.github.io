/* Synchronize video playback, timeline navigation, and citations. */
(function () {
  "use strict";

  var player = document.getElementById("player");
  var cards = Array.prototype.slice.call(document.querySelectorAll("[data-seg-start]"));
  if (!cards.length) return;
  cards.sort(function (a, b) {
    return parseFloat(a.dataset.segStart) - parseFloat(b.dataset.segStart);
  });
  cards.forEach(function (card) {
    card.style.cursor = "pointer";
    card.addEventListener("click", function (e) {
      // Expanding a card or following a link must not also seek.
      if (e.target.closest("a, .cite, button, input, select, textarea, summary")) return;
      if (!player) return;
      var t = parseFloat(card.dataset.segStart) || 0;
      player.currentTime = t;
      var p = player.play();
      if (p && p.catch) p.catch(function () {});
      setActive(card);
      card.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
  document.addEventListener("click", function (e) {
    var cite = e.target.closest(".cite[data-src]");
    if (!cite) return;
    var el = document.getElementById("src-" + cite.dataset.src);
    if (!el) return;
    e.preventDefault();
    userScrolling = Date.now();
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.remove("flash");
    void el.offsetWidth; // Force reflow to restart the highlight animation.
    el.classList.add("flash");
  });
  var current = null;
  var userScrolling = 0;
  window.addEventListener("scroll", function () {
    userScrolling = Date.now();
  }, { passive: true });

  function setActive(card) {
    if (card === current) return;
    if (current) current.classList.remove("is-active");
    current = card;
    if (card) card.classList.add("is-active");
  }

  function activeAt(t) {
    var found = cards[0];
    for (var i = 0; i < cards.length; i++) {
      if (parseFloat(cards[i].dataset.segStart) <= t + 1e-3) found = cards[i];
      else break;
    }
    return found;
  }

  if (player) {
    player.addEventListener("timeupdate", function () {
      var card = activeAt(player.currentTime);
      if (card !== current) {
        setActive(card);
        if (Date.now() - userScrolling > 1200) {
          card.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
    });
  }
})();

/* Cache the video as a Blob when the server cannot serve seekable ranges. */
(function () {
  "use strict";

  var v = document.getElementById("player");
  if (!v || !window.fetch || !window.URL || !URL.createObjectURL) return;

  var zh = (document.documentElement.lang || "").toLowerCase().indexOf("zh") === 0;
  var T = zh
    ? { msg: "为支持拖动进度条，正在缓存视频…", fail: "视频缓存失败，进度条可能无法拖动" }
    : { msg: "Caching video so you can scrub…", fail: "Couldn't cache video; scrubbing may not work" };

  function injectCSS() {
    if (document.getElementById("seek-loading-css")) return;
    var s = document.createElement("style");
    s.id = "seek-loading-css";
    s.textContent =
      ".seek-loading{position:absolute;inset:0;display:flex;align-items:center;" +
      "justify-content:center;background:rgba(0,0,0,.62);color:#fff;z-index:50;" +
      "font:14px/1.5 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;" +
      "backdrop-filter:blur(2px);text-align:center}" +
      ".seek-loading-box{display:flex;flex-direction:column;align-items:center;gap:12px;padding:20px}" +
      ".seek-loading .spin{width:34px;height:34px;border-radius:50%;" +
      "border:3px solid rgba(255,255,255,.28);border-top-color:#fff;" +
      "animation:seek-spin .8s linear infinite}" +
      ".seek-loading .pct{font-variant-numeric:tabular-nums;opacity:.85}" +
      "@keyframes seek-spin{to{transform:rotate(360deg)}}";
    document.head.appendChild(s);
  }

  function srcUrl() {
    if (v.currentSrc) return v.currentSrc;
    var s = v.querySelector("source");
    return s ? s.src : (v.getAttribute("src") || "");
  }
  function isSeekable() {
    var d = v.duration;
    if (!isFinite(d) || d <= 0) return true;
    return v.seekable && v.seekable.length &&
           v.seekable.end(v.seekable.length - 1) >= d - 1;
  }

  var handled = false;
  function ensure() {
    if (handled) return;
    if (isSeekable()) { handled = true; return; }
    handled = true;

    var url = srcUrl();
    if (!url) return;

    injectCSS();
    var wrap = v.parentNode;
    if (wrap && getComputedStyle(wrap).position === "static") wrap.style.position = "relative";
    var ov = document.createElement("div");
    ov.className = "seek-loading";
    ov.innerHTML = '<div class="seek-loading-box"><div class="spin"></div>' +
      '<div><div class="seek-loading-msg"></div><div class="pct">0%</div></div></div>';
    ov.querySelector(".seek-loading-msg").textContent = T.msg;
    var pct = ov.querySelector(".pct");
    if (wrap) wrap.appendChild(ov);

    function fail() {
      if (pct) { pct.textContent = ""; }
      var m = ov.querySelector(".seek-loading-msg");
      if (m) m.textContent = T.fail;
      setTimeout(function () { if (ov.parentNode) ov.parentNode.removeChild(ov); }, 2500);
    }

    fetch(url).then(function (resp) {
      if (!resp.ok) throw new Error("HTTP " + resp.status);
      var total = +resp.headers.get("Content-Length") || 0;
      var type = resp.headers.get("Content-Type") || "video/mp4";
      if (!resp.body || !resp.body.getReader || !total) {
        if (pct) pct.textContent = "";
        return resp.blob();
      }
      var reader = resp.body.getReader(), chunks = [], recv = 0;
      return (function pump() {
        return reader.read().then(function (r) {
          if (r.done) return new Blob(chunks, { type: type });
          chunks.push(r.value); recv += r.value.length;
          if (pct) pct.textContent = Math.min(100, Math.round(recv / total * 100)) + "%";
          return pump();
        });
      })();
    }).then(function (blob) {
      var t = v.currentTime, wasPlaying = !v.paused && !v.ended;
      v.addEventListener("loadedmetadata", function once() {
        v.removeEventListener("loadedmetadata", once);
        try { v.currentTime = t; } catch (e) {}
        if (wasPlaying) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
        if (ov.parentNode) ov.parentNode.removeChild(ov);
      });
      var s = v.querySelector("source");
      if (s) s.parentNode.removeChild(s);
      v.src = URL.createObjectURL(blob);
      v.load();
    }).catch(fail);
  }

  if (v.readyState >= 1) ensure();
  else v.addEventListener("loadedmetadata", ensure, { once: true });
})();
