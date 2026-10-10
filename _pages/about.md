---
layout: home
permalink: /
title: Jiahao Wang
description: Jiahao Wang, an undergraduate at Nanjing University working on multimodal large language models and Agentic Coding.
redirect_from:
  - /about/
  - /about.html
---

<section class="profile" id="about-me" aria-labelledby="profile-title">
  <div class="profile-copy">
    <p class="eyebrow">Nanjing University</p>
    <div class="name-line"><h1 id="profile-title">Jiahao Wang</h1></div>
    <div class="profile-intro">
      <p>I'm an undergraduate in Software Engineering at <a href="https://www.nju.edu.cn/" target="_blank" rel="noopener noreferrer">Nanjing University</a>. I will soon begin my Ph.D. at <a href="https://www.nju-link.com/zh/" target="_blank" rel="noopener noreferrer">NJU-LINK Lab</a> under the supervision of <a href="https://liujiaheng.github.io/" target="_blank" rel="noopener noreferrer">Prof. Jiaheng Liu</a>.</p>
      <p>My research focuses on <strong>post-training and evaluation for multimodal large language models</strong>, and <strong>Agentic Coding</strong>.</p>
    </div>
    <nav class="contact-links" aria-label="Contact and academic profiles">
      <a href="mailto:{{ site.author.email }}">Email <span aria-hidden="true">↗</span></a>
      <a href="{{ site.author.googlescholar }}" target="_blank" rel="noopener noreferrer">Google Scholar <span aria-hidden="true">↗</span></a>
      <a href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
    </nav>
  </div>
  <figure class="profile-portrait">
    <img src="{{ '/assets/images/profile.webp' | relative_url }}" alt="Jiahao Wang's illustrated profile avatar" width="400" height="400" fetchpriority="high">
    <figcaption>{{ site.author.location }}</figcaption>
  </figure>
</section>

<section class="content-section news-section" id="news" aria-labelledby="news-title">
  <div class="section-heading"><h2 id="news-title">News</h2></div>
  <ul class="news-list">
    {% for item in site.data.news %}
    <li class="news-item"><time class="news-date" datetime="{{ item.date }}">{{ item.display_date }}</time><p>{{ item.text }}</p></li>
    {% endfor %}
  </ul>
</section>

<section class="content-section" id="publications" aria-labelledby="publications-title">
  <span class="legacy-anchor" id="-publications" aria-hidden="true"></span>
  <div class="section-heading"><h2 id="publications-title">Publications</h2><span class="section-note"><sup>*</sup> Equal contribution</span></div>
  <div class="publication-list">
    {% for paper in site.data.publications %}{% include publication.html paper=paper %}{% endfor %}
  </div>
</section>

<section class="content-section" id="experience" aria-labelledby="experience-title">
  <div class="section-heading"><h2 id="experience-title">Experience</h2></div>
  <div class="career-list">
    <article class="career-entry">
      <p class="entry-date"><time datetime="2026-07">Jul 2026</time> <span aria-hidden="true">—</span> Present</p>
      <div class="entry-copy"><h3>Agentic Coding Intern</h3><p>Alibaba Group</p></div>
      <div class="entry-logo"><img src="{{ '/Figure/Alibaba-Group.svg' | relative_url }}" alt="Alibaba Group" width="132" height="48" loading="lazy"></div>
    </article>
    <article class="career-entry">
      <p class="entry-date"><time datetime="2025-08">Aug 2025</time> <span aria-hidden="true">—</span> Present</p>
      <div class="entry-copy"><h3>Research Intern</h3><p><a href="https://www.nju-link.com/zh/" target="_blank" rel="noopener noreferrer">NJU-LINK Lab</a>, Nanjing University</p></div>
      <div class="entry-logo"><img src="{{ '/Figure/NJU-LINK.png' | relative_url }}" alt="NJU-LINK Lab" width="132" height="48" loading="lazy"></div>
    </article>
  </div>
</section>

<section class="content-section education-section" id="education" aria-labelledby="education-title">
  <span class="legacy-anchor" id="-education" aria-hidden="true"></span>
  <div class="section-heading"><h2 id="education-title">Education</h2></div>
  <article class="career-entry education-entry">
    <p class="entry-date"><time datetime="2023-09">Sep 2023</time> <span aria-hidden="true">—</span> <time datetime="2027-06">Jun 2027</time></p>
    <div class="entry-copy"><h3><a href="https://www.nju.edu.cn/" target="_blank" rel="noopener noreferrer">Nanjing University</a></h3><p>B.Eng. in Software Engineering</p></div>
  </article>
</section>


<section class="content-section game-section" id="gulou" aria-labelledby="gulou-title">
  <div class="section-heading"><h2 id="gulou-title">Gulou · 鼓楼</h2><span class="section-note">A campus you can explore</span></div>
  <div class="game-copy">
    <p>A browser game recreating Nanjing University's Gulou campus. Built over 11 days with GPT 6 Astra and more than a thousand visual references, it lets you walk, cycle, and fly past familiar buildings through day, night, and rain.</p>
    <nav class="contact-links" aria-label="Gulou project links">
      <a href="https://wang-jiahao.github.io/gulou/" target="_blank" rel="noopener noreferrer">Explore the campus <span aria-hidden="true">↗</span></a>
      <a href="https://github.com/wang-jiahao/gulou" target="_blank" rel="noopener noreferrer">Source code <span aria-hidden="true">↗</span></a>
    </nav>
  </div>
</section>

<section class="content-section sponsor-section" id="sponsor" aria-labelledby="sponsor-title">
  <div class="section-heading"><h2 id="sponsor-title">Sponsor</h2><span class="section-note">A little support goes a long way</span></div>
  <div class="sponsor-card">
    <div class="sponsor-copy">
      <h3>Help me keep building</h3>
      <p>Projects like Gulou, my walkable Nanjing University campus, take many hours of development and a substantial amount of AI tokens. If you enjoy what I make, a small contribution helps cover the cost of the next iteration.</p>
      <p>Support is entirely optional. Sharing feedback, reporting issues, and contributing campus references are just as welcome.</p>
      <a href="{{ '/assets/images/wechat-appreciation.png' | relative_url }}" download="Zackaria-WeChat-appreciation.png">Save appreciation code <span aria-hidden="true">↓</span></a>
    </div>
    <figure class="sponsor-qr">
      <a href="{{ '/assets/images/wechat-appreciation.png' | relative_url }}" target="_blank" rel="noopener noreferrer" aria-label="Open Zackaria's WeChat appreciation code at full size"><img src="{{ '/assets/images/wechat-appreciation.png' | relative_url }}" alt="Zackaria's WeChat appreciation code" width="1152" height="1152" loading="lazy"></a>
      <figcaption>Scan with WeChat · 微信赞赏<br>On mobile, save the image and open it in WeChat.</figcaption>
    </figure>
  </div>
</section>
