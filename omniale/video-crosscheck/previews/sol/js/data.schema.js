/* OmniDR report field reference. This commented object is DOCUMENTATION, not data.js.
 * Write data.js with a JSON serializer: window.DATA = <strict JSON>;
 * Renderer inputs contain no functions or executable expressions.
 * Times refer to the original source. Media/evidence paths stay inside the report.
 * Fill fields from observations and saved sources, not the illustrative values here.
 */
window.OMNIDR_SCHEMA_EXAMPLE = {
  meta: { theme: "t05", category: "Subject category", lang: "en" },
  summary: "The source and the externally supported finding [S1].",
  video: { src: "media/source.mp4", title: "Video title", duration: 120, poster: "img/poster.jpg" },
  segments: [
    {
      id: "seg1", start: 0, end: 120, title: "Semantic segment title",
      keyframe: "img/seg1-00m30s.jpg",
      caption: [
        { type: "text", text: "Observed visual and spoken content. External claims cite [S1]." },
        { type: "image", src: "anchors/A1-detail.jpg", cap: "What this source crop shows." },
        { type: "flow", title: "Process", steps: ["Step one", "Step two"] },
        { type: "mindmap", root: "Topic", branches: [{ label: "Branch", items: ["Detail"] }] },
        { type: "svg", svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"20\"/></svg>" }
      ],
      sources: ["S1"],
      insights: [] // Same insight shapes and evidence requirements as the top-level array.
    }
  ],
  anchors: [
    {
      id: "A1", label: "Research question", category: "comparison",
      why: "Why external evidence would help the viewer.", segmentIds: ["seg1"],
      frame: "anchors/A1-detail.jpg" // Optional inspected source crop.
    }
  ],
  // Categories: background, more support, comparison, commentary, related material, timeliness.
  // Chinese equivalents: 背景知识, 更多支撑, 类似产品·事件对比, 网络观点评论, 相似资料, 时效纠偏.
  research: [
    {
      id: "S1", type: "web", title: "Opened source title", url: "https://example.org/article",
      summary: "The finding actually read from this source.", anchorId: "A1",
      publisher: "Independent author or publisher", primary: true,
      media: "_assets/docs/S1.html" // Required saved evidence; thumb is an optional local image.
    },
    {
      id: "S2", type: "video", title: "Watched related video", url: "https://example.org/watch",
      summary: "Finding grounded in inspected visual and audio ranges.", anchorId: "A1",
      publisher: "Independent video creator",
      media: "_assets/videos/S2.mp4", perception: "_work/S2/reading.json"
    }
  ],
  // Source types: web, image, video, report. A PDF uses type report and a local PDF media path.
  insights: [
    {
      kind: "compare", title: "A supported comparison",
      table: { cols: ["Dimension", "Source video", "External evidence"], rows: [["Dimension A", "Value", "Value"]] },
      body: "The comparison and its practical implication [S1][S2].", sources: ["S1", "S2"],
      evidence: [
        { srcId: "S1", quote: "A verbatim passage of at least twenty characters from the saved source.", local: "_assets/docs/S1.html" },
        { srcId: "S2", quote: "A faithful transcript passage supporting the compared statement.", local: "_assets/docs/S2-transcript.txt" }
      ]
    },
    { kind: "cause", title: "Explanation", body: "A source-backed explanation [S1].", sources: ["S1"] },
    { kind: "context", title: "Background", body: "Useful background [S1].", sources: ["S1"] }
  ]
};
/* Timeliness insights use kind: "timeliness", title, videoClaim, currentFact,
 * sources and evidence. Include the as-of date and preserve units. Like compare,
 * they require at least two independently produced sources and saved quoted evidence
 * for EVERY cited source, at both report and segment level. Use faithful text extracts
 * for binary PDFs. Mechanical quote matching does not establish the claim's truth.
 */

/* Delivery also requires _work/research-review.json: full source/video readings,
 * primary-reader notes, inspected used crops, current per-claim reviews and browser
 * checks. See the Skill review reference. A structural pass is not delivery-ready. */
