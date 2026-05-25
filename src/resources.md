---
layout: base.njk
title: Tools & Resources
description: "Curated tools and organizations for digital safety, civil society defense, and threat intelligence response."
templateEngineOverride: njk,md
---

<section aria-labelledby="resources-title">
  <h1 id="resources-title">Tools &amp; resources directory</h1>
  <p>Use the quick filters to jump to the category you need.</p>
  <div class="filter-links" aria-label="Resource category filters">
    <a href="#civil-society">Civil Society Organizations</a>
    <a href="#opsec-tools">Personal Security &amp; OpSec Tools</a>
    <a href="#defensive-assets">Threat Intel &amp; Defensive Assets</a>
  </div>
</section>

<section id="civil-society" aria-labelledby="civil-title">
  <h2 id="civil-title">Civil Society Organizations</h2>
  <ul class="resource-list">
    <li><a href="https://www.accessnow.org/" rel="noopener noreferrer">Access Now</a> — Rapid-response support and digital security help for at-risk communities.</li>
    <li><a href="https://citizenlab.ca/" rel="noopener noreferrer">Citizen Lab</a> — Research on surveillance technologies and digital threats to civil society.</li>
    <li><a href="https://www.frontlinedefenders.org/" rel="noopener noreferrer">Front Line Defenders</a> — Protection and emergency assistance for human rights defenders.</li>
    <li><a href="https://www.amnesty.org/" rel="noopener noreferrer">Amnesty International</a> — Documentation and advocacy on global human rights abuses.</li>
  </ul>
</section>

<section id="opsec-tools" aria-labelledby="opsec-title">
  <h2 id="opsec-title">Personal Security &amp; OpSec Tools</h2>
  <ul class="resource-list">
    <li><a href="https://signal.org/" rel="noopener noreferrer">Signal</a> — End-to-end encrypted messaging with disappearing messages and safety numbers.</li>
    <li><a href="https://www.torproject.org/" rel="noopener noreferrer">Tor Browser</a> — Privacy-preserving browser for bypassing censorship and reducing tracking.</li>
    <li><a href="https://www.veracrypt.fr/" rel="noopener noreferrer">VeraCrypt</a> — Open-source encrypted storage for devices and removable media.</li>
    <li><a href="https://keepassxc.org/" rel="noopener noreferrer">KeePassXC</a> — Local password manager for strong, unique credentials.</li>
  </ul>
</section>

<section id="defensive-assets" aria-labelledby="assets-title">
  <h2 id="assets-title">Threat Intel &amp; Defensive Assets</h2>
  <ul class="resource-list">
    <li><a href="{{ '/blog/' | url }}">IDOD Threat Analysis Blog</a> — Plain-language translations of threat intel with defensive steps.</li>
    <li><a href="{{ '/posts/lessons-from-protonmail/' | url }}">Detection Rule Template</a> — Starter format for publishing YARA, Sigma, and KQL examples.</li>
    <li><a href="https://github.com/SigmaHQ/sigma" rel="noopener noreferrer">SigmaHQ</a> — Community repository of Sigma detection rules.</li>
    <li><a href="https://github.com/Yara-Rules/rules" rel="noopener noreferrer">YARA Rules</a> — Curated YARA signatures for malware and threat hunting.</li>
  </ul>
</section>
