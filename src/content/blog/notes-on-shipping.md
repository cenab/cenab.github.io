---
title: "notes on shipping small tools"
description: "A short playbook for scoping and shipping quickly."
pubDate: "2024-10-01"
---

Shipping small tools is mostly about scope. Pick one real user problem and write the smallest possible path to a useful outcome.

The pattern I use is simple: scope, slice, ship, then tighten. The key is to avoid a pile of nice-to-have features before you have signal.

## my quick checklist

- Define one core action and make it fast.
- Ship with strong defaults and guardrails.
- Write a short release note to lock the intent.
- Measure one thing that tells you if it worked.

Once the tool proves it helps someone, you can layer on polish without losing the original focus.
