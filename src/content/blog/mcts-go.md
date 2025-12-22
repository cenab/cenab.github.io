---
title: "monte carlo tree search for go"
description: "What I learned while building a lightweight MCTS engine."
pubDate: "2024-07-18"
---

I built a lightweight Go engine using Monte Carlo Tree Search. The core loop is simple: selection, expansion, simulation, backpropagation.

The hard part is speed. Your engine only feels smart if the rollout loop is fast and steady under pressure.

## what helped the most

- Keep the board representation compact and cache friendly.
- Use quick rollout policies over perfect play.
- Cap branching early so the tree stays shallow.

Once the basics work, the fun begins: tune exploration, add priors, and test against real opponents.
