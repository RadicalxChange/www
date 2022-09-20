---
layout: "layouts/blog-post.njk"
date: "2022-09-19"
title: "Quantum Mechanics and Plurality"
postHeader: "Reflecting on a Possible Quadratic Wormhole Between Quantum Mechanics and Plurality"
postAuthor: "Michael H. Freedman, Michal Fabinger, E. Glen Weyl"
---

> Infinite Diversity in Infinite Combinations...beauty, growth, progress – all result from the union of the unlike. Concord, as much as discord, requires the presence of at least two different notes. The brotherhood of man is an ideal based on learning to delight in our essential differences, as well as learning to recognize our similarities.

--Gene Roddenberry, *Inside Star Trek*, 1968

In parallel with this blog post, we are releasing a [formal paper](https://arxiv.org/abs/2209.08144), the results of which we will reflect on here. This project resulted from two convergent motivations. One of us recently blogged [Freedman, 2022] about a mechanism for public goods funding, Quadratic Funding (QF), proposed by another of us [Buterin et al., 2019], based on the square of the sum of square roots of individual funding contributions. A friend, Adam Brown, asked if there was a connection to the Born rule in Quantum Mechanics (QM), where a similar procedure is applied to the complex amplitudes (viz. probability *amplitudes*) to derive the observable probabilities of events.

Concurrently, Weyl [2022], Weyl et al. [2022] has been exploring, under the banner of “Plurality”, the formal duality between individuals and groups (e.g. how each can be modeled as the intersection of the other) as a technological foundation for a “network society” as envisioned by social thinkers like Simmel [1908] and Dewey [1927]. Largely mystified by QM, he nonetheless naturally wondered whether a connection is possible between this research and interactions between different processes (e.g “particle-wave duality”, the state-operator duality we discuss be low) in QM.

In this piece we make a somewhat playful foray into bridging these two distant worlds. In particular, we wonder whether QM might be formally derived from and thus interpreted as a result of a collective compromise among “agents” in the spirit of QF, or less ambitiously, if there is a kind of calculation in QM that would map to similar calculations in QF.

While our inquiry here raises far more questions than it settles, the formal companion to this post formulates an argument for why such a “wormhole” (connection) could exist. This glimpse of possibility was sufficient to raise our curiosity about the potential theoretical, practical and philosophical implications if a similar connection proves meaningful. However, we have separated out these discussions from the limited formal result we prove, hence the companion paper. The technical game theory results there are valid even if any similarity to QM is just accidental. The reader interested in being inspired by the speculative thinking can continue here, while those focused on theoretical properties of stochastic games that generalize QF can turn to the companion piece.

## Interpretation

The core idea we wish to explore is the connection between QF’s collective approach to choice and QM’s long-recognized “pluralism”, where many possible paths/futures coexist and jointly create the stochastic “decohered” reality we observe. Many aspects of our world are well-described by quantum field theory (QFT), which follows the rules of QM. Perhaps the most common formulation of this theory is Lagrangian, where an “action” (roughly a degree of difficulty) is assigned to every possible trajectory. These trajectories are then assigned complex probability amplitudes based on the corresponding action, and then summed to produce an aggregate probability amplitude. The Born rule is then applied to turn this amplitude into a probability.

In most cases the integration is only practically carried out using “perturbative” approximations: One starts with an exactly-solvable theory with a quadratic Lagrangian and then adds to the Lagrangian higher order terms. The necessary calculations correspond to summing many “Feynman diagrams”. Mathematically, these diagrams keep track of the terms in a “perturbative expansion” used to undertake the approximation, but, famously, were interpreted by Feynman as all the possible world histories which must be appropriately combined to find the final physical result. These are the “possible paths” that “coexist”. This diagrammatic approach has been resoundingly successful; when one reads of a quantum experiment confirming a prediction to 10 decimal places, the prediction was arrived at by taking a large but finite sum of the contributing diagrams. The proper interpretation of these paths, usually called “virtual processes” (VPs), is one of the longest-standing puzzles in physics and today remains as plural as the theory itself.

The perspective closest to the one we sketch here has been developed by Zurek [2009], Zwolak et al. [2009] under the name *Quantum Darwinism* (QD). Zurek observes that an experimenter (human or otherwise) only samples a tiny random piece of the environment. In his view a state becoming *collapsed*, that is becoming macroscopically correlated, involves an “evolutionary struggle” to copy its information widely into numerous small fragments of the environment. Since the universe cannot record the entire past and still do new things, being recorded/replicated is a limited resource and drives this microscale Darwinism.[^1]

The alternative we wish to consider is that, rather than being in such antagonistic and individualistic competition, these VPs are instead engaged in imperfect but approximately efficient *cooperation* to create a jointly valued set of “public goods” with which they must all live, namely the recorded information.[^2][^3] What are these agents and what motivates them?

Perhaps the most satisfying illustration was that of Chiang [1998] in a novella that was the basis of the film *Arrival*. In the story, Chiang considers an encounter between a human linguist and an alien species that lives its entire existence simultaneously and has a corresponding language. Rather than experiencing time as a series of causes and effects onto which they may freely intervene, they see events unfolding according to a teleology, where all objects are motivated to follow the “path of least action” towards their future state. As the human comes to understand the language, her own sense of agency dissipates and she finds herself compelled toward the path of least action. We can think of imperative towards least action as the “motivation” of the universe and the corresponding action function as its “utility”.

Of course, and this is precisely the point, this story is entirely classical/Newtonian: there is a single teleology and a unitary future, not the pluralism of QM. But we might well think of each VP as representing an element of a unitary classical teleology, localized to the analysis at hand. Then it would be natural to consider a collective decision making/public goods procedure that aggregates these agents’ preferences into a common good. The core mathematical result we show below is that, modulo some important formal open questions, there is at least *prima facia* evidence that (under this interpretation) the rule used by our physical world to perform this aggregation has some resemblance to QF.

Even before turning to more formal/mathematical caveats, there are a few important limitations of this interpretation we should highlight. However, in some ways they seem to apply in symmetric ways to the interpretation of both the relevant social science and physics. First, VPs are inherently tied to a perturbation analysis, which does not apply to all physics. However, much the same may be said for the QF model, which relies on a number of approximations, particularly quasi-linearity of the utility function in the “numeraire good” (viz. money); see Weyl [2019] for a discussion of approximations that support the kind of analysis used in Buterin et al. [2019]. Perhaps even more deeply, utility functions (and thus teleology) are at least as fictive in economics as in physics. Agents in the physical universe could never have a utility function (a ranking over states of the world), as even storing much less applying such an object would be computationally unimaginable. Utility functions and preferences are thus, at best, a useful modeling approximation.

Second, diagrams can incorporate violations of physical laws, which suppress the amplitude but do not reduce it to zero. Again this seems to roughly parallel the way in which the quasi-linear approximation deters expenditures that violate an agent’s budget constraint, but does not make them strictly infeasible.

Finally, some quantum field theories are believed to have no Lagrangian description at all. Once more, this seems resonant with the limits of utility functions as general descriptions of motivations. So we must remember that on both sides of this analogy sit approximate modeling constructs, not ultimate truth, if such is even ours to describe. At the same time, similar caveats apply to nearly any exercise that relates two fields of science, so we will not dwell on them excessively.

## Speculation

The computations in the QF and a related model we introduce in the companion resemble the Born rule of QM. What if computations useful for organizing social matters had a structure that would make them suitable for quantum computers (QCs)?

Computational difficulty is always relative to the size, as well as the structure, of the problem being attacked. The history of powerful computational tools is, as in the adage, “work expands to fill the time available.” A powerful new tool inspires applications to larger instances, always pushing the envelope of what can be done. QF is not merely a conceptual paradigm, but also computational tool providing useful approximations to largely intractable VCG optima [Vickrey, 1961, Clarke, 1971, Groves, 1973]. Ironically, the more powerful and the more efficient it proves, the greater the demands that will be placed on it.

A well-known computationally hard problem is economic planning [Deng et al., 2003, Shalizi, 2012]; in fact, one of the first conjectures about computational complexity regarded the difficulty of computing economic equilibrium [von Mises, 1920]. To the extent that QF and QF-like systems are able to cut the Gordian knots of pluralistic calculation, the demands on them will grow. At full scale, computing optimal levels for funding of public goods would involve billions of individuals (and organizations, and organizations or organizations, ...) and need to discover the joint optima for hundreds of millions of overlapping projects shared by a disorderly labyrinth of interests. We expect what was originally a short-cut will eventually become a clogged superhighway. That would be QF’s mark of success.

But QCs may make success less painful. QCs are a rising, if still unproven, technology based on the intrinsic parallelism of quantum physics. Quantum states are linear combinations (“superpositions”) of eigenstates each of which can encode a mathematical function value, or in some cases observed data. Superposition allows the entire function to be manipulated in a single step. This is the power. The accompanying weakness is reading out detailed information from the encoded function. In some cases, such as Shor [1994]’s factoring algorithm, the difficulty is overcome by a dexterous use of the Fourier transform within the quantum context. The promise of quantum computing varies across problem sets. Where quantum computing can shine is where the calculational bottle neck can be massaged into a step that quantum physics naturally does anyway. The Born rule is the prime example of what physics does: It takes a bunch of amplitudes, adds them, and then outputs (the absolute value of) the square.

Curiously, and marvelously, QF also asks the computer to add up a long list of weighted contributions and square them. So, if this step is, indeed, the bottleneck; quantum computers may decongest our superhighway. A word of caution is in order. Loading data into a quantum wave function will likely take time proportional to the size of the data set so much of the quantum advantage is burned when manipulation of actual classical data is involved. However, we believe that most of the computational effort will be spent normalizing models. For this task it is likely that suitable test data can be generated in superposition restoring the quantum advantage. While it is presently difficult to see though the challenges and countervailing stratagems, application of QC to QF is an intriguing possibility.

In fact, this line of reasoning might offer a critique of the argument that large-scale “artificial intelligence” (AI) systems conceived of as unitary agents (as in Bostrom [2014]) “are the future”: the argument that by overcoming the frictions naturally arising in pluralist systems, such unitary architectures will always asymptotically outperform “messier” architectures. This claim has always lacked empirical grounding: why, in this case, has biological and social evolution not pointed in this direction? In fact, the currently dominant model of computation usually labeled as AI (primarily neural networks) features tremendous diversity and complexity internally (billions of nodes, each representing objects at different levels of abstractions, often running in parallel on highly distributed systems). The line of reasoning in the previous paragraphs further suggests that economically efficient systems running of quantum computers could exhibit plurality rather than
singularity.

A critical near-term test of the foundations of this future will be probing the usability of the wormhole (connection) we are prospecting by passing items through it. QM is one of the theoretically and mathematically richest areas of science. Plurality is in its infancy as a formal field. Are there concrete problems in the latter that insights from the former can address, such as the appropriate extensions of QF to “correlated” environments where (intersecting) subgroups are partially coordinated? Even more speculatively, is there anything of concrete relevance to QM that can be gleaned from ongoing social experiments with Plurality in, for example, the Taiwanese and Ethereum ecosystems?[^4] We discuss these possibilities as next directions for future research in the
companion piece.

Understanding possible new connections between social science/game theory and quantum mechanics could be useful in the future. In the past, many concepts in economics, for example, have been motivated by physics intuition, as the terminology suggests (terms such as equilibrium, elasticity, friction, or hysteresis).

## References

Max Born. Quantenmechanik der stoßvorgange. *Zeitschrift fur Physik*, 38:803–827, 1926.

Nick Bostrom. *Superintelligence*. Oxford University Press, Oxford, 2014.

Vitalik Buterin, Zoe Hitzig, and E. Glen Weyl. A Flexible Design for Funding Public Goods. *Management Science*, 65(11):5171–5187, 2019.

Ted Chiang. The Story of your Life. Number 2 in Starlight. 1998.

Edward H. Clarke. Multipart Pricing of Public Goods. *Public Choice*, 11(1):17–33, 1971.

Xiaotie Deng, Christos Papadimitriou, and Shmuel Safra. On the complexity of price equilibria. *Journal of Computer and System Sciences*, 67:311–324, 2003.

John Dewey. *The Public and Its Problems*. H. Holt, New York, 1927.

Michael Freedman and Matthew Headrick. Bit threads and holographic entanglement. *Communications in Mathematical Physics*, 352(1):407–438, 2017.

Michael H. Freedman. Spinoza, Leibniz, Kant, and Weyl, 2022. https://www.radicalxchange.org/media/blog/spinoza-leibniz-kant-and-weyl/.

Theodore Groves. Incentives in Teams. *Econometrica*, 41(4):617–631, 1973.

Gotfried Wilhelm Leibniz. *On the Ultimate Origination of Things*. 1697.

Bertrand Russell. *History of Western Philosophy*. New York: Simon & Schuster, 1945.

Cosma Shalizi. In Soviet Union, Optimization Problem Solves you. https://crookedtimber.org/2012/05/30/in-soviet-union-optimization-problem-solves-you/, 2012.

P. W. Shor. Algorithms for quantum computation: discrete logarithms and factoring. In *Proceedings of the 35th Annual Symposium on the Foundations of Computer Science*, pages 124–134, New York, 1994. IEEE.

Georg Simmel. *Soziologie*. Duncker & Humblot, Berlin, 1908.

William Vickrey. Counterspeculation, Auctions and Competitive Sealed Tenders. *Journal of Finance*, 16(1):8–37, 1961.

Ludwig von Mises. Die Wirtschaftsrechnung im sozialistischen Gemeinwesen. *Archiv für Sozialwissenschaften*, 47:86–121, 1920.

E. Glen Weyl. Price Theory. *Journal of Economic Literature*, 57(2):329–384, 2019.

E. Glen Weyl. Why I am a Pluralist, 2022. https://www.radicalxchange.org/media/blog/why-i-am-a-pluralist/.

E. Glen Weyl, Puja Ohlhaver, and Vitalik Buterin. Decentralized Society: Finding Web3’s Soul. https://papers.ssrn.com/sol3/papers.cfm?abstract=4105763, 2022.

Wojcieh H. Zurek. Quantum Darwinism. *Nat. Phys.*, 5(3):181–188, 2009.

Michael Zwolak, H. T. Quan, and Wojciech H. Zurek. Quantum Darwinism in a Mixed Environment. *Phys. Rev. Lett.*, 103(11):110402, 2009.

**Notes**

[^1]: Note that copying eigenstates of physical observables, unlike copying the general pure state, does not violate the No-Cloning Theorem.

[^2]: Of course, we are just exploring mathematical similarities to game theory, not claiming that the VPs are thinking organisms. That said, it is more fun to think of them in such a way.

[^3]: After this paper was written the authors became aware through Russell [1945] of Leibniz [1697]. In that work the author introduced his notion of compossibility. Leibniz, apparently, published only a gentle version of his philosophy considered suitable for his courtly patrons, while writing lengthy private manuscripts which were not fully appreciated until the beginning of the twentieth century. Among this latter work is a theory that logical possibilities – the analog of our virtual processes VP – form a vast writhing sea seeking competitively and cooperatively to form reality by combining with other possibilities with which they are not in contradiction, i.e. are compossible. Something like warring Italian states, these growing compositions of possibilities competed /cooperated until one compossibility grew dominant and became our World, the World. From Russell, we understand that the well-remembered “best of all possible Worlds” was the courtly “elevator pitch”, the public face of a wilder, perhaps more demonic, view of reality.

[^4]: In the past, there have been instances where ideas in a less technical field inspired research in a more technical field. Optimal transport theory is an example where economics modeling led to progress in formal mathematics. Incidentally, one of us collaborated on a paper that applied the max-flow min-cut principle originating from network theory to the more technical field of quantum gravity to understand its holographic properties [Freedman and Headrick, 2017].
