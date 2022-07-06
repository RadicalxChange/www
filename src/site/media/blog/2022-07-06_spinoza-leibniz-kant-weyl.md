---
layout: "layouts/blog-post.njk"
date: "2022-07-06"
title: "Spinoza, Leibniz, Kant, and Weyl"
postHeader: "Spinoza, Leibniz, Kant, and Weyl"
postAuthor: "Michael H. Freedman"
---

I walk into a House of Worship and the guy up front is in the middle of an oration. I don't expect to stay but catch a few words, "... so my friends, reach down and uplift thy less fortunate neighbor---to the $$\frac{1}{2}$$-power, for so it is written, and so may it be derived." Startled, I take a seat; this sounds like theology on a wavelength I can receive. This was my experience meeting (virtually) Glen Weyl and reading his paper with Buterin and Hitzig [BHW19][^1]. The paper describes a funding mechanism called *Quadratic Finance* (QF) and deploys a bit of calculus to show that within a very clean and simple linear model QF maximizes social utility. They differentiate the social utility function. The mathematical content of this note is that by taking one further derivative, one may also deduce that QF is the *unique* solution. But what drew me into this house of worship, is a line of reasoning in [BHW19][^1], made explicit in a phone call with Glen, that Kant's *categorical imperative* (CI), properly interpreted, becomes a differential equation uniquely solved by QF. It was this second derivation from Kant's "axiom" that caused me to take a seat, and for a very personal reason.

My father, Benedict Freedman[^2], was a novelist, screenwriter, and educator, trained in philosophy and mathematical logic. He lived in the realm spanning Spinoza to Gödel; he sought, all his life, to expand upon Spinoza's Ethics, an astonishingly ambitious project to logically deduce how to act in our world from a minimal axiomatic foundation of core beliefs. As psychologists know, beliefs are generally context dependent and fuzzy. What kind of logical machinery can they survive? Is it realistic to deduce ethics? One thought (I hope to develop later), which I believe my father would endorse, is to use a logic with a web-like rather than a linear structure, a pluralist's logic, a logic which is able to weigh preponderance of evidence from various pathways much as Feynmann diagrams in perturbative quantum field theory must be summed over to reach a reliable conclusion.

As I learned from Jerry Muller[^3], Western political and social structure, both in theory and practice, can be viewed as a secularization of Judeo-Christian religious tradition. Our quest for understanding has this broader context. This view may also be applied to the sciences, and comfortably so, in the case of economics. Marxism is a prime exemplar, with its emphasis on a goal-directed, teleological, historiography replete with catastrophism and a utopian eschatology. My father once said, "All the great Jews of history were atheists: Spinoza, Marx, Einstein." He added that these three each demonstrated deep religious sensibilities. (My father, a modest man, merely considered himself a Jewish agnostic. When I asked him as a teenager how a Jew could be an atheist, he answered that atheism did not come from nowhere---it was invented by Jews, it is a sect within Judaism.) Spinoza's religious perspective encouraged his belief that there are anchor points strong enough to sustain deduction. Alas, I was never able to follow Spinoza's deductions, a shortcoming, I suspect, of a too narrowly mathematical mind, always demanding clarity of definition. For fifty years I gave all this little thought, until seeing last month, in the deduction of QF from CI, a first glimmer of success for Spinoza's (and my father's) project. That is, a success that I could understand. Imagining the future, Leibniz wrote, "When there are disputes among persons, we can simply say, 'Let us calculate', and without further ado, see who is right." In Leibniz's future, mathematics may usefully manipulate ethical propositions. I had not encountered a convincing example of this prior to $$CI \to QF$$. Is this future closer than we thought? New tools open new domains: Can an economic perspective, certainly foreign to Spinoza and Leibniz, lead to an ethical calculus?

Kant's CI is more subtle than the much remembered, "A deed which must be done though the heavens fall." Kant wrote in *Groundwork of the Metaphysics of Morals*, "Act only according to that maxim whereby you can at the same time, will that it should become universal law." This rejection of exceptionalism clearly has roots in the Golden Rule but is now couched unconditionally in a more abstract form. All those interested in distributed architectures and shared governance can feel the Kantian vibe. To accept CI requires a degree of a liberal, rationalist mind set, but superficially, it seems consistent with a wide spectrum of social and political views. But once CI is accepted, I will argue, following [BHW19][^1], that it implies QF, an apparently more generous doctrine which in the orator's words, uplifts the weaker players according the $$\frac{1}{2}$$-power. The surprise is that a calculation is required---Leibniz take note---to learn the moral scope of one's own maxim. Curiously, the conclusion is fine-tuned, one is not lead to extremes of egalitarianism, all social differences are not leveled, but rather a certain formula for adjusting then, involving square roots and squares emerges. There is a context to the argument, standard assumptions of linearity and smoothness and concavity of individual utility functions are made, as well as the insensitivity of individual preferences to some level of taxation (to cover the shortfall between contributions and dispersed funds). Nevertheless, it is remarkable how little beyond CI is required to deduce QF. The model is simple and thus far from complete, yet seeing this deduction within the model was a moving experience, if there are other examples of "ethical calculus," I would like to learn about them.

Let's review QF. QF is an answer to a question: How should public goods be financed. A "public good," such as a public park, will typically be a good that is inefficient to price and restrict, and one from which individuals receive value greater than their personal contributions. Below is a brief summary of the model presented in [BHW19][^1].

*Society* consists of *n* well-defined citizens, $$i = 1, \dots, n$$. $$p \in P$$ are the public goods in question. (In our treatment we simply consider a single good, and eventually drop the *p*-index. It has no real effect on the calculus.)

Let $$V_i^p(F^p)$$ be the currency-equivalent utility citizen *i* receives if the public funding of *p* is $$F^p$$. These functions are assumed to be smooth, increasing and concave.[^4] Remarkably, nothing else about the functional form of the citizen’s values needs to be assumed. We further assume all these values (utilities) are independent, i.e. just add, and ignore any issues of partial information and timing of decision making within the model.

$$\vec{c} =$$ {$$c_i^p$$} is the vector of individual contributions of the *i*th citizen toward the *p*th public good, which are all assumed non-negative (a non-trivial assumption); and $$\vec{F}$$ is the vector of funding with components $$F^p$$ each public good. Let *C* and *F* denote the vector spaces holding the vectors $$\vec{c}$$ and $$\vec{F}$$.

The problem considered: Find a (and eventually all) funding mechanism $$\Phi: C \to F$$ which maximizes the total social welfare $$W = \sum_{i,p} V_i^p(F^p) - \sum_p F^p$$. We do not consider within the model the equity of the mechanism, which must be treated externally to the model. And very importantly we do not analyze here the back reaction on citizen contributions *c* which taxation inevitably entails. Such an analysis is initiated in section 4.5 of [BHW19][^1], and is shown to perturb the QF extremum, but we have no further insight to add here. Taxation {$$t_i$$} (according to some other mechanism) is, of course, required to balance the budget:

<div class="html">
<div class="w-full text-center markdown markdown">
{{ "$$\sum_i t_i = \sum_p\left(F^p - \sum_i c_i^p\right)$$" | markdown | latex | safe }}
</div>
</div>

and the individual's tax-corrected utility will be

<div class="html">
<div class="w-full text-center markdown markdown">
{{ "$$U_i^t = \sum_p V_i^p(F^p) - c_i^p - t_i$$" | markdown | latex | safe }}
</div>
</div>

but I ignore taxes entirely in the calculations (as well as eventually dropping the index *p* for visual clarity).

**Optimality condition.** Fixing *p* and differentiating $$W^p = \sum_i V_i^p(F^p) - F^p$$ w.r.t. $$F^p$$ and setting this equal to zero, we find the marginal value derived from good *p* should equal 1, provided $$F^p$$ is positive at 0, $$\sum_i (V_i^p)^\prime = 1$$. Note this sum is written $${V^p}^\prime$$ in [BHW19][^1].

**Individual utility.** $$U_i = \sum_p V_i^p(F^p) - c_i = \sum_p V_i^p(g(\sum_j h(c_j^p)) - c_i^p)$$, where the model presumes that the functions $$F^p$$ are built as indicated from the internal functions *h* and *g*, explained in the following paragraph. Below, the superscript *t* is dropped since we are now neglecting taxes, and *p* added to indicate the utility of a fixed good. Upon differentiating and setting $$\frac{\partial U_i^p}{\partial c_i} = 0$$, we obtain:

<div class="html">
<div class="absolute text-left h-11 inline-flex">
<div class="my-auto markdown markdown-sm">{{ "(1)" | markdown | latex | safe }}</div>
</div>
<div class="text-center my-auto markdown">
{{ "$$\frac{\partial V_i^p}{\partial g} \cdot \frac{\partial g}{\partial h(c_i^p)} \cdot \frac{dh(c_i^p)}{dc_i^p} = 1$$" | markdown | latex | safe }}
</div>
</div>

In what follows differential calculations will not be interrupted to consider special case where $$c_i^p = 0$$, nor to reiterated the obvious boundary condition that $$\Phi(0) = 0$$, no contributions implies no funding.

The possible mechanisms $$\Phi$$ are posited to be *democratic* in that the funding function *F* is assumed to be symmetric in its *n* variables, and beyond that I adopted the *simplifying linearity assumption* of [BHW19][^1] that $$\Phi(\vec{c}) =$$ {$$F^P(\vec{c})$$} $$=$$ {$$g(\sum_i h(c_i^p))$$} for some analytic function *g* and *h* on the positive Reals. Our job is to find *g* and *h* maximizing social utility. The internal function *h* is the *weight* of contribution *c*, and *g* converts total weight into funding, it is the *funding lever*. Notice in the definition of $$\Phi^{\mathrm{QF}}$$ below that *h* and *g* scale reciprocally so funding choices are independent of the units of the currency. However, this is an outcome not an assumption.

**Definition 1.** $$\Phi^{\mathrm{QF}}(c^p) = \left(\sum_i (c_i^p)^{\frac{1}{2}}\right)^2$$, that is, for every good *p* its level of funding is the square of the sum of the square roots of the individual contributions.

At this point, going forward, I drop the superscript *p* and the set notation {}.  I will shortly set up the natural extremal problem for $$\Phi$$ and show that $$\Phi^{\mathrm{QF}}$$ is its unique critical point, but first let's show how $$\Phi^{\mathrm{QF}}$$ may be deduced from CI.

The insight I learned from Glen, reflected the differential equation (10) of [BHW19][^1], reproduced below, is that CI implies that if citizen *j* deems it proper to perturb her weighted contribution $$h(c_j)$$, say by increasing it 1%, she should be following, not her limited self-interest, but be justified in expecting all her peers to also see the virtue of such an increase---"act ... whereby ... it should become universal law." So, mathematically we may write:

<div class="html">
<div class="absolute text-left h-11 inline-flex">
<div class="my-auto markdown markdown-sm">{{ "(2)" | markdown | latex | safe }}</div>
</div>
<div class="text-center my-auto markdown">
{{ "$$\frac{\partial g(\sum_i h(c_i))}{\partial c_j} = \sum_i \frac{h(c_i)}{h(c_j)}$$" | markdown | latex | safe }}
</div>
</div>

That is, the funding should respond to the imputed community wide judgement that additional resources are required for this good. Importantly the individual's judgement and its imputed extension must be expressed in terms of *weighted* contributions, for it is the weighting function *h* that codifies how any given funding mechanism (obeying our assumptions) hears the preferences of its citizens.

From (2) QF follows directly. Differentiating we obtain

<div class="html">
<div class="absolute text-left h-11 inline-flex">
<div class="my-auto markdown markdown-sm">{{ "(3)" | markdown | latex | safe }}</div>
</div>
<div class="text-center my-auto markdown">
{{ "$$g^\prime \left(\sum_i h(c_i)\right) h^\prime(c_j) = \sum_i \frac{h^\prime(c_i)}{h(c_j)}$$" | markdown | latex | safe }}
</div>
</div>

Equation 3 is actually two independent equations as the factors involving only $$c_j$$ must separately be proportional, as must the factors involving all the {$$c_i$$}. Separating and solving one finds:

<div class="html">
<div class="absolute text-left h-11 inline-flex">
<div class="my-auto markdown markdown-sm">{{ "(4)" | markdown | latex | safe }}</div>
</div>
<div class="text-center my-auto markdown">
{{ "$$g^\prime(x) = kx$$ and $$h^\prime(y) = \frac{1}{k} h^{-1}(y)$$, so" | markdown | latex | safe }}
</div>
</div>

<div class="html">
<div class="absolute text-left h-11 inline-flex">
<div class="my-auto markdown markdown-sm">{{ "(5)" | markdown | latex | safe }}</div>
</div>
<div class="text-center my-auto markdown">
{{ "$$g(x) = \frac{k}{2} x^2 + m$$ and $$h(y) = \frac{2}{k} y^\frac{1}{2} + n$$" | markdown | latex | safe }}
</div>
</div>

The boundary conditions tells us that $$m = n = 0$$, and *k* must be set so that for a society with a single citizen, we obtain $$F($$$$c) = c$$. Thus we find:

<div class="html">
<div class="absolute text-left h-11 inline-flex">
<div class="my-auto markdown markdown-sm">{{ "(6)" | markdown | latex | safe }}</div>
</div>
<div class="text-center my-auto markdown">
{{ "$$g(x) = x^2$$ and $$h(y) = y^\frac{1}{2}$$" | markdown | latex | safe }}
</div>
</div>

Kant's IC has been interpreted as equation (2); which, as we have seen, has QF as its unique solution.

Let's now return now to the calculus problem of extremizing social utility $$U = \sum_i(U_i)$$ by varying our funding mechanism $$\Phi$$ though our choice of the internal functions *h* and *g*. To do this, first on line (7) we rewrite (1), and then on line (8) sum (7) over *i*, apply the optimality condition, and then differentiate w.r.t. any one of the citizen contributions, say $$c_1$$ (by symmetry there is no real choice here). The result is:

(7) $$\frac{\partial V}{\partial c_i} = \frac{1}{\frac{\partial g(\Sigma)}{\partial h(c_i)} \cdot \frac{d h(c_i)}{dc_i}} = \frac{1 / \frac{dh(c_i)}{dc_i}}{\frac{\partial g(\Sigma)}{\partial h(c_i)}}$$, where $$\Sigma \coloneqq \sum_{i=1}^n h(c_i) =$$ total weight

(8) $$\frac{\partial}{\partial c_1} \left(\sum_{i=1}^n \frac{\partial V_i}{\partial g}\right) = \frac{\partial}{\partial c_1} \left(\frac{1 / \frac{dh(c_i)}{dc_i}}{\frac{\partial g(\Sigma)}{\partial h(c_i)}}\right) = 0$$

Now expand the outer partial using $$\left(\frac{u}{v}\right)^\prime = \frac{u^\prime v - uv^\prime}{v^2}$$, keeping only the numerator, and breaking out the first variable $$c_1$$ from the rest of the sum, we obtain:

(9) $$0 = \left(\frac{1}{h^\prime(c_1)}\right)^\prime \cdot g^\prime(\Sigma) - \frac{g^{\prime\prime}(\Sigma) h^\prime(c_1)}{h^\prime(\Sigma)} + 0 - \sum_{i=2}^n \frac{1}{h^\prime(c_i)} g^{\prime\prime}(\Sigma) h^\prime(c_1)$$

Collecting terms:

(10) $$\left(\frac{1}{h^\prime(c_1)}\right)^\prime \cdot g^\prime(\Sigma) = g^{\prime\prime}(\Sigma) \left(\sum_{i=1}^n \frac{h^\prime (c_1)}{h^\prime(c_i)}\right), \text{ or}$$

(11) $$\frac{g^\prime(\Sigma)}{g^{\prime\prime}(\Sigma)} = \frac{\sum_{i=1}^n \frac{h^\prime(c_1)}{h^\prime(c_i)}}{\left(\frac{1}{h^\prime}\right)^\prime(c_1)}$$, or

(12) $$(\log g^\prime)^{-1} = \frac{h^\prime(c_1)}{-\frac{h^{\prime\prime}(c_1)}{(h^\prime(c_1))^2}} \left(\sum_{i=1}^n \frac{1}{h^\prime(c_i)}\right)$$, or

(13) $$(\log g^\prime)^{-1} = \left[- \frac{(h^\prime)^3}{h^{\prime\prime}}(c_1)\right]\left(\sum_{i=1}^n \frac{1}{h^\prime(c_i)}\right)$$

The factor in brackets depends only on the chosen variable, $$c_1$$, whereas $$\log(g^\prime)(\sum_{i=1}^n \frac{1}{h^\prime(c_i)})$$ is symmetric in all *n* variables. So assuming $$n > 1$$, there are more than a single citizen in the society, the factor in brackets must be constant. This leads to the equation:

<div class="html">
<div class="absolute text-left h-11 inline-flex">
<div class="my-auto markdown markdown-sm">{{ "(14)" | markdown | latex | safe }}</div>
</div>
<div class="text-center my-auto markdown">
{{ "$$(h^\prime)^3 = -kh^{\prime\prime}$$" | markdown | latex | safe }}
</div>
</div>

for some constant *k*.

Equation 14 may be solved recursively in a Taylor series expansion around any positive value of the variable, yielding:

<div class="html">
<div class="absolute text-left h-11 inline-flex">
<div class="my-auto markdown markdown-sm">{{ "(15)" | markdown | latex | safe }}</div>
</div>
<div class="text-center my-auto markdown">
{{ "$$h(y) = ay^\frac{1}{2} + b$$, and $$b = 0$$ by the boundary condition." | markdown | latex | safe }}
</div>
</div>

Thus, $$\frac{1}{h^\prime(c_i)} = \frac{2}{a} y^{\frac{1}{2}}$$, so $$\sum_{i=1}^n \frac{1}{h^\prime(c_i)} = \frac{a^2}{2} \Sigma$$, and (13) becomes:

<div class="html">
<div class="absolute text-left h-11 inline-flex">
<div class="my-auto markdown markdown-sm">{{ "(16)" | markdown | latex | safe }}</div>
</div>
<div class="text-center my-auto markdown">
{{ "$$\frac{g^\prime(\Sigma)}{g^{\prime\prime}(\Sigma)} = \mathrm{const.}\ \Sigma$$" | markdown | latex | safe }}
</div>
</div>

which again by solving the Taylor series must be

<div class="html">
<div class="absolute text-left h-11 inline-flex">
<div class="my-auto markdown markdown-sm">{{ "(17)" | markdown | latex | safe }}</div>
</div>
<div class="text-center my-auto markdown">
{{ "$$g(x) = \mathrm{const.}\ x^2 + \mathrm{const.}^\prime$$" | markdown | latex | safe }}
</div>
</div>

with $$\mathrm{const.}^\prime = 0$$ by the boundary condition, and const. $$=1$$ to match self-funding in the limit of one positive contribution. So we have recovered the *g* and *h* of QF:

<div class="html">
<div class="absolute text-left h-11 inline-flex">
<div class="my-auto markdown markdown-sm">{{ "(18)" | markdown | latex | safe }}</div>
</div>
<div class="text-center my-auto markdown">
{{ "$$g(x) = x^2$$ and $$h(y) = y^\frac{1}{2}$$" | markdown | latex | safe }}
</div>
</div>

To complete the general picture of deriving QF by maximizing social utility, we can rederive the main conclusion (18) more quickly by *assuming* homogeneity. If one presumes in advance that *g* and *h* are homogeneous, $$g(\Sigma) = \Sigma^q$$ and $$h($$$$c) = c^p$$, scale-invariance of currency implies $$p = \frac{1}{q}$$. Now consider the individual utility at the maximum for each *i*,

<div class="html">
<div class="absolute text-left h-11 inline-flex">
<div class="my-auto markdown markdown-sm">{{ "(19)" | markdown | latex | safe }}</div>
</div>
<div class="text-center my-auto markdown">
{{ "$$U_i = V_i\left(\sum_j c_j^\frac{1}{q}\right)^q - c_i$$" | markdown | latex | safe }}
</div>
</div>

(20) $$\frac{q V_i^\prime (\sum_j c_j^\frac{1}{q})^{q-1}}{q c_i \frac{q-1}{q}} = 1$$, or $$V_i^\prime = \frac{c_i^\frac{q-1}{q}}{\left(\sum_{j=1}^n c_j^\frac{1}{q}\right)^{1-q}}$$ at criticality

The optimality condition requires:

(21) $$1 = \sum_{i=1}^n V_i^\prime = \frac{\sum_{i=1}^n c_i^{\frac{q-1}{q}}}{\left(\sum_{j=1}^n c_j^{\frac{1}{q}}\right)^{q-1}}$$

By Hölder's inequality, except when all $$c_j$$ are equal, (20) cannot hold except at $$q=2$$, again yielding

<div class="html">
<div class="absolute text-left h-11 inline-flex">
<div class="my-auto markdown markdown-sm">{{ "(22)" | markdown | latex | safe }}</div>
</div>
<div class="text-center my-auto markdown">
{{ "$$g(x) = x^2$$ and $$h(y) = y^\frac{1}{2}$$" | markdown | latex | safe }}
</div>
</div>

Indeed, there are many roads to Quadratic Finance, but Kant's categorical imperative is the most exciting--to your expositor, to Spinoza, to Leibnitz, to Kant, and to my father.

Our secular rabbi, priest, minister, and iman has done his work well and found a convert. And I doubt that the modifier *secular* is even germane. As Jerry Muller has shown us, we all lie within a single broad and evolving tradition of thought. We can use both reason and love, faith for those who possess it, and the calculus of Newton and Leibnitz, for those who possess that, to navigate to a fairer, less contentious world.

**Acknowledgment.** I thank the Aspen Center for Physics for their hospitality.

**Notes**

[^1]: Vitalik Buterin, Zoë Hitzig, and Glen Weyl, [A flexible design for funding public goods](https://arxiv.org/pdf/1809.06421.pdf)

[^2]: Benedict Freedman, author of [Rescuing the Future](https://www.goodreads.com/book/show/12984031-rescuing-the-future), [The Apprentice Bastard](https://www.goodreads.com/book/show/35959394-the-apprentice-bastard), and [more](https://www.goodreads.com/author/list/85288.Benedict_Freedman).

[^3]: Jerry Muller, [Professor of Apocalypse: the Many Lives of Jacob Taubes](https://press.princeton.edu/books/hardcover/9780691170596/professor-of-apocalypse).

[^4]: Even this assumption can often be relaxed to monotonicity.
