---
layout: base.njk
title: Home
description: "In Defense of Defenders (IDOD) supports human rights defenders with practical cybersecurity guidance and defensive resources."
templateEngineOverride: njk,md
---

<section class="hero" aria-labelledby="mission-title">
  <h1 id="mission-title">Aiding civil society with practical, low-bandwidth security guidance.</h1>
  <p>In Defense of Defenders (IDOD) translates high-level threat research into actionable defenses for human rights defenders, journalists, and activists operating in hostile environments.</p>
</section>

<section aria-labelledby="crisis-title">
  <h2 id="crisis-title">Global crisis dashboard</h2>
  <div class="grid grid-3">
    <article>
      <h3>Cross-border spyware targeting</h3>
      <p class="meta">Updated: 24 May 2026</p>
      <p>Field reports indicate increased phishing and mobile surveillance attempts against independent media workers in multiple regions.</p>
    </article>
    <article>
      <h3>Election-period digital repression</h3>
      <p class="meta">Updated: 22 May 2026</p>
      <p>Network disruptions and account takeovers are escalating during election cycles, especially where legal protections are weak.</p>
    </article>
    <article>
      <h3>Legal pressure and data seizure risk</h3>
      <p class="meta">Updated: 20 May 2026</p>
      <p>Human rights organizations report rising requests for device access at border crossings and checkpoints.</p>
    </article>
  </div>
</section>

<section aria-labelledby="highlights-title">
  <h2 id="highlights-title">Recent content highlights</h2>
  <ul class="post-list">
    {% for post in collections.posts | limit(3) %}
    <li>
      <h3><a href="{{ post.url | url }}">{{ post.data.title }}</a></h3>
      <p class="meta">
        <time datetime="{{ post.date | htmlDateString }}">{{ post.date | readableDate }}</time>
        {% if post.data.readTime %} · {{ post.data.readTime }} min read{% endif %}
        {% for tag in post.data.tags %}{% if tag != "posts" %} · <span class="tag">{{ tag }}</span>{% endif %}{% endfor %}
      </p>
      {% if post.data.excerpt %}<p>{{ post.data.excerpt }}</p>{% endif %}
    </li>
    {% else %}
    <li><p>No posts yet. Check back soon.</p></li>
    {% endfor %}
  </ul>
</section>
