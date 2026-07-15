---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.g·1ithubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# 👋 About me

**Hello! I’m Wangjiahao (王佳豪) 👋**

I’m currently a junior majoring in Software Engineering at Nanjing University (NJU).

I’m currently a research intern at [NJU-LINK Lab](https://www.nju-link.com/zh/) led by [Prof. Jiaheng Liu](https://liujiaheng.github.io/).

**Research interests:** post-training and evaluation for multimodal large language models.

# 📖 Educations
- *2023.09 - now*, &nbsp;Software Engineering at [Nanjing University](https://www.nju.edu.cn/)

<span class='anchor' id='experience'></span>

# 💼 Experience

<table>
  <tr>
    <td width="25%" style="vertical-align: middle;">
      <div style="height: 76px; padding: 10px; display: flex; align-items: center; justify-content: center; border: 1px solid #d9dfe5; border-radius: 4px; background: #fff;">
        <img src="../Figure/Alibaba-Group.svg" alt="Alibaba Group logo" style="max-width: 100%; max-height: 56px; width: auto; object-fit: contain;">
      </div>
    </td>
    <td width="75%" style="vertical-align: middle;">
      2026.07 - Present<br>
      <b>Agentic Coding Intern</b><br>
      Alibaba Group
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="25%" style="vertical-align: middle;">
      <div style="height: 76px; padding: 10px; display: flex; align-items: center; justify-content: center; border: 1px solid #d9dfe5; border-radius: 4px; background: #fff;">
        <img src="../Figure/NJU-LINK.png" alt="NJU-LINK Lab logo" style="max-width: 100%; max-height: 56px; width: auto; object-fit: contain;">
      </div>
    </td>
    <td width="75%" style="vertical-align: middle;">
      2025.08 - Present<br>
      <b>Research Intern</b><br>
      <a href="https://www.nju-link.com/zh/">NJU-LINK Lab</a>, Nanjing University
    </td>
  </tr>
</table>

# 📝 Publications

<table>
  <tr>
    <td width="35%">
      <!-- 建议：在这里放置论文的 Pipeline 图或效果对比图 -->
      <!-- 如果你还没有图，可以先用下面这张占位图，后续替换为自己仓库里的图片链接 -->
      <img src="../Figure/AVSCap.png" width="100%">
    </td>
    <td width="65%">
      <b>AVSCap: Orchestrating Audio-Visual Synergy for Omni-modal Video Captioning
</b><br>
      <!-- 使用 <sup>*</sup> 来标注共一，并使用 et al. 缩略 -->
      Yanghai Wang<sup>*</sup>, <b>Jiahao Wang</b><sup>*</sup>, Jiafu Tang<sup>*</sup>, Yuanxing Zhang, Zhe Cao et al.<br>
      Nanjing University × Kling, Kuaishou<br>
      <!-- 按钮链接区域 -->
      <a href="https://arxiv.org/abs/2607.12820">
        <img src="https://img.shields.io/badge/Paper-PDF-red?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="Paper">
      </a>
      <a href="https://github.com/NJU-LINK/AVSCap">
        <img src="https://img.shields.io/badge/Code-GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="Code">
      </a>
      <a href="https://huggingface.co/datasets/NJU-LINK/AVSCapBench">
          <img src="https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Data-FFD21E?style=flat-square">
      </a>
      <a href="https://nju-link.github.io/AVSCap/">
        <img src="https://img.shields.io/badge/Project-Website-blue?style=flat-square&logo=googlechrome&logoColor=white" alt="Website">
      </a>
    </td>
  </tr>
</table>
<table>
  <tr>
    <td width="35%">
      <!-- 建议：在这里放置论文的 Pipeline 图或效果对比图 -->
      <!-- 如果你还没有图，可以先用下面这张占位图，后续替换为自己仓库里的图片链接 -->
      <img src="../Figure/OmniCap-IF.svg?text=OmniCap-IF+Teaser" width="100%">
    </td>
    <td width="65%">
      <b>OmniCap-IF: Benchmarking and Improving Instruction Following Abilities for Omni-Video Captioning</b><br>
      <!-- 使用 <sup>*</sup> 来标注共一，并使用 et al. 缩略 -->
      <b>Jiahao Wang</b><sup>*</sup>, An Ping<sup>*</sup>, Yanghai Wang<sup>*</sup>, Yuanxing Zhang, Shihao Li, et al.<br>
      Nanjing University × Kling, Kuaishou<br>
      <a href="https://arxiv.org/abs/2606.08572">
        <img src="https://img.shields.io/badge/Paper-PDF-red?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="PDF">
      </a>
      <a href="https://github.com/NJU-LINK/OmniCap-IF">
        <img src="https://img.shields.io/badge/Code-GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="Code">
      </a>
      <a href="https://huggingface.co/datasets/NJU-LINK/OmniCap-IF">
          <img src="https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Data-FFD21E?style=flat-square">
      </a>
      <a href="https://nju-link.github.io/OmniCap-IF/">
        <img src="https://img.shields.io/badge/Project-Website-blue?style=flat-square&logo=googlechrome&logoColor=white" alt="Website">
      </a>
    </td>
  </tr>
</table>
<table>
  <tr>
    <td width="35%">
      <!-- 建议：在这里放置论文的 Pipeline 图或效果对比图 -->
      <!-- 如果你还没有图，可以先用下面这张占位图，后续替换为自己仓库里的图片链接 -->
      <img src="../Figure/avbench.svg" width="100%">
    </td>
    <td width="65%">
      <b>T2AV-Compass: Towards Unified Evaluation for Text-to-Audio-Video Generation</b><br>
      <!-- 使用 <sup>*</sup> 来标注共一，并使用 et al. 缩略 -->
      Zhe Cao<sup>*</sup>, Tao Wang<sup>*</sup>, Jiaming Wang<sup>*</sup>, Yanghai Wang<sup>*</sup>, Yuanxing Zhang, <b>Jiahao Wang</b> et al.<br>
      <i>ICML, 2026</i> <br>
      <!-- 按钮链接区域 -->
      <a href="https://arxiv.org/pdf/2512.21094">
        <img src="https://img.shields.io/badge/Paper-PDF-red?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="Paper">
      </a>
      <a href="https://github.com/NJU-LINK/T2AV-Compass">
        <img src="https://img.shields.io/badge/Code-GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="Code">
      </a>
      <a href="https://huggingface.co/datasets/NJU-LINK/T2AV-Compass">
          <img src="https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Data-FFD21E?style=flat-square">
      </a>
      <a href="https://nju-link.github.io/T2AV-Compass/">
        <img src="https://img.shields.io/badge/Project-Website-blue?style=flat-square&logo=googlechrome&logoColor=white" alt="Website">
      </a>
    </td>
  </tr>
</table>


<table>
  <tr>
    <td width="35%">
      <!-- 建议：在这里放置论文的 Pipeline 图或效果对比图 -->
      <!-- 如果你还没有图，可以先用下面这张占位图，后续替换为自己仓库里的图片链接 -->
      <img src="../Figure/OmniAgent.png" width="100%">
    </td>
    <td width="65%">
      <b>AdaptiveOmniAgent: Dynamic Routing for Audio-Visual Understanding</b><br>
      <!-- 使用 <sup>*</sup> 来标注共一，并使用 et al. 缩略 -->
      Jiafu Tang<sup>*</sup>, Haowen Chen<sup>*</sup>, Yanghai Wang, Yue Ding, <b>Jiahao Wang</b>, et al.<br>
      <i>Under Review</i> <br>
    </td>
  </tr>
</table>


<table>
  <tr>
    <td width="35%">
      <!-- 建议：在这里放置论文的 Pipeline 图或效果对比图 -->
      <!-- 如果你还没有图，可以先用下面这张占位图，后续替换为自己仓库里的图片链接 -->
      <img src="../Figure/LVSG.svg" width="100%">
    </td>
    <td width="65%">
      <b>LVSG-Bench: Towards Benchmarking Long-form Video Script Generation Capabilities of Multimodal LLMs</b><br>
      <!-- 使用 <sup>*</sup> 来标注共一，并使用 et al. 缩略 -->
      Yanghai Wang<sup>*</sup>, Zhe Cao<sup>*</sup>, Yuanxing Zhang, Yifan Yao, <b>Jiahao Wang</b> et al.<br>
      <i>Under Review</i> <br>
    </td>
  </tr>
</table>

<p align="right">
  <small><sup>*</sup> Equal Contribution</small>
</p>
