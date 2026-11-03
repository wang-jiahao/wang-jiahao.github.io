"use strict";
const scorePage = document.getElementById("score-page");
if (scorePage) {
  scorePage.addEventListener("change", function () {
    const n = Number(scorePage.value);
    const url = "assets/score-page-" + n + ".jpg";
    const image = document.getElementById("score-image");
    image.src = url;
    image.alt = "独立转写交付的第" + n + "页PDF";
    document.getElementById("score-image-open").href = url;
    document.getElementById("score-caption").textContent = "实际交付 PDF，第 " + n + " 页。只做网页预览渲染，未改谱面。";
  });
}
