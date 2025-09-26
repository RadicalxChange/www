---
layout: "layouts/method.njk"
title: "Plural Funding"
postHeader: "Plural Funding"
---

## What is PF?

Plural Funding (also known as Quadratic Funding or QF) is a matching-fund mechanism for public goods. Instead of rewarding a few big donors, Plural Funding weighs the *number* of distinct contributors more than the *amount* they give. The more unique people who chip in, the bigger the match a project earns.

## What problem does it solve?

Funding public goods suffers from both:

- **The free-rider problem**: people under-contribute because it mostly benefits other people.
- **The information problem**: funders don’t know which public goods communities truly value.

PF addresses both: small contributions become powerful signals that direct matching pools toward broadly valued goods, aligning private action with public benefit.

## How does it work?

Plural Funding works by boosting projects that have lots of different people chipping in, not just a few big donors. 

Everyone’s donation is adjusted using a square root formula, which means that many small contributions from different people count more than the same amount given by a single person. These adjusted contributions are added together, squared, and then the difference between that number and the actual donations is covered by a matching fund. 

In practice, this means small contributions from many people unlock much larger matches, so the money flows to projects with the broadest community support.

## How does this support more democratic outcomes?

- **One person, real influence:** Every additional unique contributor increases a project’s match *more* than the same dollars concentrated in one donor.
- **Resists capture:** “Whales” can’t easily dominate outcomes; many small voices together matter more than a few large ones.

## How has it been applied so far?

- **Digital public goods:**
    - **Gitcoin Grants** has run 20+ rounds of Plural Funding since 2019, distributing over **$60M** across 5,000 projects in the Ethereum ecosystem.
    - In late 2022, **UNICEF’s Office of Innovation** ran a Plural Funding round in which **5,500 unique donors** participated, distributing over $100k to members of the Digital Public Goods Alliance (DPGA)**.**
- **Local community pilots:**
    - The city of **Boulder, CO** **used Plural Funding in the summer of 2020 to allocate $43k in local recovery funds to small businesses**.**
    - The **Oakland Fund for Public Innovation** used Plural Funding to allocate $19k to local nonprofits in 2022.

## What kind of organizations, governments or contexts can benefit from the application of this tool?

- **Local Governments & Communities:** Cities, cooperatives, and other membership-based groups can use PF as a way to democratically allocate public funds to local programs and infrastructure.
- **web3 & Decentralized Communities:** Crypto communities, pop-up villages, and related groups can use PF to fund open source software development and other local public goods.
- **Prosocial Media: L**arge-scale online networks embracing “[prosocial media](https://www.noemamag.com/building-a-prosocial-media-ecosystem/)” ****can use PF to fund media ecosystems in a way that avoids the downsides of advertising and subscriptions and supports content that successfully bridges divides and reduces rather than amplifies polarization.

## What are the risks or costs?

- **Sybil attacks (fake accounts) & donor collusion:** Creates fake “breadth” to milk the match. Mitigations*:* identity verification, contribution caps, post-round audits, and anti-collusion tooling like MACI.
- **Fairness concerns:** Without safeguards, well-networked groups can outperform underserved ones. Mitigations*:* outreach budgets, per-community sub-rounds, and “cluster matching” defenses.

## What resources are required to implement?

- **Matching pool:** A committed funder (public, philanthropic, corporate, or multi-donor).
- **Admin:** An operator who manages rules, eligibility, communications, and support.
- **Tooling:** A digital platform that facilitates registration, payments, and analytics.

## How can RxC support the application of this tool in a new context?

RadicalxChange can provide:

- **Design support** to adapt the process to local goals,
- **Facilitation** and t**raining** for community organizers,
- **Evaluation and research** to document results.

## Are there opportunities for alignment with identify verification, soulbound tokens or other technologies?

Because Plural Funding depends on counting *people* rather than *dollars*, identity tools are crucial.

- **Identity verification:** Lightweight checks (email, phone, government ID) can mitigate Sybil attacks and ensure contributions represent distinct people.
- **Privacy-preserving identity:** Zero-knowledge proofs and protocols like [MACI](https://maci.pse.dev/) (Minimal Anti-Collusion Infrastructure) allow verification without exposing sensitive personal data.
- **Soulbound tokens (SBTs):** Persistent, non-transferable digital markers of membership, expertise, or community affiliation can help structure sub-rounds or cluster matches (e.g., directing resources equitably across groups).