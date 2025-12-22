---
title: "moving into security-minded dev"
description: "Habits for threat modeling and safer defaults."
pubDate: "2024-05-03"
---

Security is a habit, not a feature. The fastest progress for me came from small, repeatable checks in daily work.

Instead of huge audits, I focus on how defaults and data flows behave when something goes wrong.

## habits that stuck

- Start every feature with a quick threat model.
- Prefer secure defaults even if they feel strict.
- Log enough to debug without leaking secrets.
- Write tests for the failure path, not just the happy path.

It is not perfect, but the mindset shift makes every release safer.
