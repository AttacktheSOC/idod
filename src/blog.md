---
layout: base.njk
title: Blog
description: "Read IDOD analyses on operational security, defensive detection engineering, and practical threat response."
templateEngineOverride: njk,md
---

<section aria-labelledby="blog-title">
  <h1 id="blog-title">IDOD technical blog</h1>
  <p>Chronological updates focused on practical security outcomes for human rights defenders and allied organizations.</p>
</section>

<section aria-labelledby="posts-title">
  <h2 id="posts-title">Latest articles</h2>
  {% if collections.posts and collections.posts.length %}
  <ul class="post-list">
    {% for post in collections.posts %}
    <li>
      <h3><a href="{{ post.url | url }}">{{ post.data.title }}</a></h3>
      <p class="meta">
        <time datetime="{{ post.date | htmlDateString }}">{{ post.date | readableDate }}</time>
        {% if post.data.readTime %} · {{ post.data.readTime }} min read{% endif %}
        {% for tag in post.data.tags %}{% if tag != "posts" %} · <span class="tag">{{ tag }}</span>{% endif %}{% endfor %}
      </p>
      {% if post.data.excerpt %}<p>{{ post.data.excerpt }}</p>{% endif %}
    </li>
    {% endfor %}
  </ul>
  {% else %}
  <p>No posts yet. Check back soon.</p>
  {% endif %}
</section>
