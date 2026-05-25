---
layout: post.njk
title: "Cybersecurity for Civil Society: Cyber Defense Strategies on a Non-Profit Budget"
date: 2026-05-24
readTime: 12
tags:
  - posts
  - Template
excerpt: "A structured workflow for translating published threat campaigns into portable Sigma and KQL detections your team can deploy immediately."
---

Provide a plain-language overview of the threat, who is targeted, and what practical actions defenders can take immediately.

> **Urgent OpSec Note:** If compromise is suspected, prioritize account containment and secondary-channel verification before public communication.

## Threat model and assumptions

### Likely adversary goals

Document likely collection objectives, persistence mechanisms, and abuse pathways tied to affected communities.

### Detection opportunities

Include assumptions and environment-specific caveats. Mark any required telemetry sources and expected blind spots.

## Defensive snippets

Use inline code for key fields like `process.command_line` and `file.hash.sha256`.

### Sigma sample

```yaml
title: Suspicious Archive Execution Chain
id: 4bf7f097-1e0b-4c2d-ae3a-f4689c672eef
status: experimental
logsource:
  category: process_creation
  product: windows
detection:
  selection:
    ParentImage|endswith: '\explorer.exe'
    Image|endswith:
      - '\wscript.exe'
      - '\powershell.exe'
  condition: selection
level: medium
```

### KQL sample

```kql
DeviceProcessEvents
| where Timestamp > ago(7d)
| where InitiatingProcessFileName =~ "explorer.exe"
| where FileName in~ ("wscript.exe", "powershell.exe")
| project Timestamp, DeviceName, AccountName, FileName, ProcessCommandLine
```
