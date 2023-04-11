---
layout: "layouts/blog-post.njk"
date: "2023-01-12"
title: "Designing Pluralistic Mechanisms for Quadratic Funding"
postHeader: "Designing Pluralistic Mechanisms for Quadratic Funding: A Technical Perspective"
postAuthor: "Joel Miller, E. Glen Weyl, Leon Erichsen"
---

*TLDR: In this blog post, we introduce a whitepaper proposing new mechanisms for Quadratic Funding that are resistant to collusion by incorporating pluralistic principles. We also discuss the potential for innovation with these mechanisms, including their potential epistemological and practical applications beyond funding public goods.*

In a recent paper, we tried to bring together two concepts – *Collusion Resistance* and *Plurality* – in the context of Quadratic Funding (QF). In this blog post, we’ll give a high-level overview of that paper ([available on SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4311507), with a related [GitHub repository](https://github.com/Jmiller4/plural-qf)). We’ll focus on explaining the connection between plural QF and collusion resistant QF. Then, we’ll briefly tell you some of our technical results, and where we can go next.

QF was first introduced as an efficient method for funding public goods. Nowadays, it's used by both private organizations like Gitcoin and public governments like Taiwan. However, QF is susceptible to collusion, which can undermine the system. For instance, in an online setting, an individual who can create Sybil agents can manipulate the system and redirect a significant portion of the matching funds to their own account. Similarly, any large social group can exploit QF by coordinating in a specific way. In our paper, we provide diagrams to illustrate how this can occur.

## The Importance of Plurality and Collusion Resistance in QF

However, simply attempting to prevent Sybil attacks or other subjectively defined "bad" actions is not sufficient for making QF resistant to collusion. To understand why, we must examine the proof of QF's optimality more closely. It turns out that the proof relies on strict assumptions about how people behave when interacting with the mechanism. These assumptions depict participants as isolated and self-interested agents, and in our paper we demonstrate that the proof does not hold if we assume otherwise. In other words, QF is not just suboptimal when strongly coordinated Sybils get involved: it is not even optimal when weakly coordinated normal human beings are involved.

While preventing Sybil attacks is important, it is only a small part of the bigger picture. To truly achieve optimality, we need to design mechanisms that can handle the full range of social possibilities that exist in human societies. From a mathematical perspective, there is no difference between "good" natural coordination and "bad" planned coordination. Therefore we should design mechanisms that recognize and account for the fact that people live in social networks and adjust their political economic behavior accordingly. In particular, QF mechanisms should provide more funding to a more if it is supported by a diverse group of people rather than a more homogenous group.

Strikingly, this is precisely the goal of Plurality. Plurality seeks to incorporate social connections into technological systems and reward “cooperation across differences.” –  a more philosophical rephrasing of the design goals outlined above. Plural mechanisms are inherently resistant to collusion, and vice versa.

## Goals and Objectives of the Paper

In our paper, we aim to design and analyze such plural mechanisms. We begin by examining a selection of previously proposed mechanisms. We find that two of these mechanisms - “Pairwise Discounting” and “Cluster Match” -  do not meet our technical definition of collusion resistance. The remaining mechanism, “Offset Match,” has a different issue: it can occasionally consume an agent's contribution without increasing funding at all, making it irrational for agents to engage with the mechanism.

## Proposed Pluralistic Mechanisms for QF

Fortunately, we were able to develop new mechanisms that build upon the previous ones to achieve the desired properties. One of these, called "Connection-Oriented Cluster Match", is fully resistant to several technical definitions of collusion. The other two other mechanisms, "Squared Cluster Match" and "Eigen Match," show great potential, although they are less developed. We are particularly excited about Eigen Match, which utilizes the eigenvectors of a social graph to fine-tune funding levels.

It is important to note that this work is not intended to determine which mechanisms are superior to others. There are numerous properties that one may desire and various ways to define those properties. Therefore, this work is simply one exploration of plural QF from a specific technical perspective. Rather than narrowing down the possibilities for plural QF, we aim to expand the scope of inquiry for the wider community to consider.

## Philosophical and Practical Potential for Innovation

The concepts discussed in this work have applications beyond funding public goods. For example, a pluralistic perspective could be used to improve content moderation on social media platforms like Twitter. It is natural for Twitter to prioritize tweets that are popular among many users. Incorporating a pluralistic approach would simply require asking "popular with whom?" and promoting tweets more if they are liked by a diverse group of people rather than a specific segment of the population.

We have high hopes for QF and hope that this paper will inspire further research and innovation. Additionally, we  are excited to delve into an area of research that necessitates abandoning the idea of a selfish, greedy agent commonly found in classical economics. Social reality is much more complex than simple models of competition and markets would suggest, and in order to create tools that enable people to cooperate in a respectful and cohesive manner, we must embrace these complexities in our research. We believe that this paper is a step towards an infinite trajectory of progress in this direction.
