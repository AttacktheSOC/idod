---
layout: base.njk
title: Contact & Submissions
description: "Contact IDOD to suggest topics, request guidance, or submit technical questions with privacy-aware handling."
templateEngineOverride: njk,md
---

<section aria-labelledby="contact-title">
  <h1 id="contact-title">Contact &amp; submissions</h1>
  <blockquote>
    <p><strong>Privacy and safety notice:</strong> Do not submit highly sensitive personal data, passwords, or active case details through this form. Use encrypted channels for critical or high-risk communication.</p>
  </blockquote>
</section>

<section aria-labelledby="form-title">
  <h2 id="form-title">Submit a request</h2>
  <p class="meta">Fields marked as required must be completed. All other fields are optional.</p>

  <form action="https://formspree.io/f/{{ site.formspreeId }}" method="post">
    <div>
      <label for="name">Name / Alias (optional)</label>
      <input id="name" name="name" type="text" autocomplete="name" />
    </div>

    <div>
      <label for="contact">Contact Method / Email (optional)</label>
      <input id="contact" name="contact" type="email" autocomplete="email" inputmode="email" />
    </div>

    <div>
      <label for="submission-type">Submission Type <span aria-hidden="true">*</span></label>
      <select id="submission-type" name="submission_type" required aria-required="true">
        <option value="">Select one</option>
        <option value="topic">Suggest a Blog Topic / Report to Analyze</option>
        <option value="help">Request Technical Help / Guidance</option>
        <option value="general">General Inquiry</option>
      </select>
    </div>

    <div>
      <label for="message">Message / Details <span aria-hidden="true">*</span></label>
      <textarea id="message" name="message" required aria-required="true"></textarea>
    </div>

    <button type="submit">Send Submission</button>
  </form>
</section>
