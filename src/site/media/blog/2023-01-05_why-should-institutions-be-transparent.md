---
layout: "layouts/blog-post.njk"
date: "2023-01-04"
title: "Why Should Institutions Be Transparent"
postHeader: "Why Should Institutions Be Transparent?"
postAuthor: "Matt Prewitt"
---

A recent exchange between journalist Ezra Klein and technologist Vitalik Buterin prompted me to reexamine this thorny question. That conversation is [here](https://www.nytimes.com/2022/09/30/podcasts/transcript-ezra-klein-interviews-vitalik-buterin.html), and the key exchange is quoted below.

> EZRA KLEIN: I think this is a really interesting case because I think it gets at that earlier set of questions about what creates trust in institutions. So I want to interrogate it a little bit. So here’s an observation just as somebody who covers politics in America, primarily, which is that over the past, let’s call it 70 years, our institutions here have just gotten way more transparent. We have C-SPAN, we have FOIA requests, we have much more public budgeting, we have G.A.O. reports.

> We have — I mean, particularly for a journalist, my ability to track what is going on in government is far, far, far beyond what it would have been ever before. We have visitor logs at the White House. It’s actually quite a bit. It’s not to this point of this currency we can track every dollar, but it’s further than it was in 1950. Over that same period of time, trust in those institutions has completely plummeted.

> And something I’ve often noted and written about is that when you look at the U.S. government, it’s often the less transparent institutions that are more trusted. So the military, police, the Federal Reserve, the Supreme Court. Things and institutions that do not have nearly as much oversight tend to maintain a higher level of public trust. And even those institutions are suffering today as they become more transparent, as their internal workings become more known.

> And so it looks to me like there’s an inverse relationship here that when things get more transparent, or at least pass a certain level of transparency, the ability of the institution to operate internally begins to break down, or the ability of the institution’s enemies or critics to publicize what is going wrong rises up.

> And the outcomes of that are not things people like as much as they think they’ll like it in advance. The outcome of that tends to be less trust in institutions, not more. How do you think about that?

> VITALIK BUTERIN: Yeah, I mean, this gets into these challenging questions of governance, even the attempts to create various forms of governance within crypto, like all of these DAO experiments, they often end up running into similar kinds of problems like where if you try to put maximum global democracy in charge of everything, it often ends up making worse decisions than something that can still have some kind of separation of concerns.

> So it’s a good point. Obviously, it’s not an argument to throw away transparency in its entirety, right? Yes, there are many forms of corruption that people do get away with basically because they benefit from obscurity. So I suspect the answer lies in the middle. And we can probably figure out more detailed pictures of what kinds of things it makes sense to have more private and what kinds of things it makes sense to have less private.

> And this is also one of those places where I think Ethereum-style programmability really shows its power, right? Because it actually makes it possible to very easily try to create those different structures and basically say, OK, we’re going to do this thing where this component runs according to these rules, and this other component runs according to these other rules. And then we’re going to see how that works.

> And then someone might create a different system where you kind of flip those, and you make the first component less transparent, and the second component more transparent, and you get to see what happens. So actually, one very specific case where non-transparency in governance is a very good thing, right? And this is one that I’ve talked about in my writing a lot is secret ballots in voting, right?

> Because if you don’t have a secret ballot, then you can either threaten or bribe people to vote in a particular way. And so the theory is that to prevent that, not only do votes have to be private, but you need this very strong level of privacy where you can’t prove to other people how you voted, even if you want to make that kind of a proof.

> And the hope is that by creating this field of experimentation, we might actually have more of an opportunity to see what combinations of privacy in particular places and transparency in particular places actually end up making the most sense, right?

> So I think, in general, I’m definitely with you on just the core idea that more privacy, good — applied naively and especially cranked up to infinity, eventually starts leading to all kinds of problems. And I think the thing that I’m more in favor of is basically that, hey, we have tools so that if we want more privacy we can have a lot more privacy. We also have more tools so that if we want more transparency, we can have a lot more transparency.

> And you can have privacy of what individual decisions are plus transparency that some rules are being followed. So whether it’s money out equals money in, or whether this is actually a correct vote counting, and all of the votes are being counted correctly, and everyone who wanted to vote was given a chance to vote. And what we would actually be able to see better over time which combinations of these kinds of things are able to work.

There’s something interesting in this. Klein and Buterin both think deeply about democracy and institutions, yet neither, to my ears, has a complete theory about when and why transparency is good. Many people, though – from democratic citizens to digital platform participants to corporate employees – demand more transparency almost reflexively, as if it were self-evidently reasonable and pro-democratic.

Puzzling through this, I realized that my own ideas about transparency were rather gauzy. So, I puzzled through it at some length. I share the tentative framework that I landed on in the hope that it elicits useful feedback, or advances others’ thinking, or both.

Here’s my thesis: **Calling for more transparency is justified approximately to the extent that we reasonably believe it will reveal an illegitimate exercise of authority. Conversely, increasing transparency in institutions that exercise authority legitimately typically does more harm (in the form of reduced trust) than good (in the form of reduced corruption).**

This will seem strange to people who believe transparency increases trust. But in my view, such people either have strange ideas about what trust is; or more likely, they’re using the word “trust” in a strange or imprecise way. Consider the phrase “[trust but verify](https://en.wikipedia.org/wiki/Trust,_but_verify).” The word “but” indicates a contradiction. So the simple logic of this phrase reveals the sense in which verification – transparency – is the opposite of trust. Trust means *not verifying*.

Moreover, what is it that we wish to accomplish when we demand transparency of institutions? We’re not simply curious about how, say, public funds are being spent. Rather, we’re concerned something fishy is going on. Namely, we’re worried that authority is being exercised illegitimately, and we’re hoping that transparency will reveal that and/or stop it from happening.

To unpack this thesis further I need to explain exactly what I mean by *legitimate authority*.

## Legitimate Authority is Rooted in Community

Many [discussions of institutional legitimacy](https://journals.sagepub.com/doi/pdf/10.1177/0032321716667956) fixate on two analyses: process legitimacy and outcome legitimacy. The first asks whether an institution follows the satisfactory processes to reach its decisions – whether it dots its i’s and crosses its t’s, so to speak. The second asks whether the institution’s actions have desirable consequences – whether it delivers the goods.

Something’s missing. Process and outcome legitimacy are necessary, but never sufficient to explain an institution’s authority. The fact that an institution dots its i’s and delivers the goods can never explain, for example, why anyone would go out of their way, uncoerced, to obey that institution as an authority (for example, to *really try and understand what the tax form is asking*). Nor can it explain why anyone would authentically embrace an authority’s coercive power over them. Yet people frequently do accept authority in this way, such as when they dedicatedly serve their state in a war, or deeply internalize the mission of their employer. Young childrens’ uncoerced respect for their parents is a particularly vivid example.

Many people believe that accepting authority like this is categorically irrational or deluded, no matter the circumstances. I find this anti-authoritarian standpoint easy to understand, because I agree that most asserted authority is illegitimate, and *most* acceptance of authority is deluded. But not always, and the difference matters.

So what’s the missing ingredient, the special sauce that makes legitimate authority possible? What can explain it, if dotted i’s and delivered results are insufficient? The third leg of the stool is community. Authority starts to feel like a much more natural, substantial, and unmysterious idea when it is understood as flowing from the obligations that individuals have toward other members of their communities.

<div class="html">
<div class="">
  <img class="h-96 no-y-margin" src="/images/blog/mattxmidjourney_authority.png" />
  <p class="italic text-center">Midjourney’s take on "A Norman Rockwell style painting of a respected authority telling members of a community to do their duty."</p>
</div>
</div>

## When Are Communities “Good Enough” To Underwrite Legitimate Authority?

Legal philosopher Ronald Dworkin’s definition of legitimate authority in his classic book *[Law’s Empire](https://en.wikipedia.org/wiki/Law%27s_Empire)* has inspired me since I first encountered it. He explains how the kind of authority claimed by legal systems depends on the existence of a community underwriting that authority. By analogy, the same applies to government actions, workplace decrees, parental decisions, and much else. This is an attractive idea – without such grounding, authority can seem to oscillate between being an unserious empty game, or an over-serious, creepy submissiveness.

However, a community must have specific characteristics to play this underwriting role, investing institutions with real moral authority. It can’t, for example, be a wicked or oppressive group, or a random collection of people. Such groups are not “communities” in this sense, because their members don’t owe each other respect. And since the respect owed to authorities derives from the respect owed to fellow community members, these non-communities can’t imbue institutions with legitimate authority. On the other hand, a community need not be a utopia for its institutions’ decrees to have moral weight. So what makes a community “good enough” for its institutions to have legitimate authority?

Remember, Dworkin is not arguing that we ever owe obedience to “authorities” themselves, like leaders or institutions. The idea is that we sometimes owe respect to the other community members who stand behind the authority structure. Thus, if we’ve agreed to be a line cook, and the kitchen is full of decent people committed to the enterprise, and the head chef tells us to chop the onions more finely, [we probably should](https://quod.lib.umich.edu/cgi/p/pod/dod-idx/role-of-authority.pdf?c=phimp;idno=3521354.0011.007;format=pdf). Similarly, if we live in a more-or-less-decent society, we should probably pay our taxes. This is so even when the onions are already chopped finely enough, and even when the tax rules are irrational. After all, other cooks in the kitchen follow even the head chef’s more irrational orders. Other citizens dutifully pay irrational taxes.

Such respect for institutions only makes sense if the community they represent is, on the whole, deserving of respect. But no community is perfect. So where is the line? Dworkin suggests four illuminating characteristics of “good enough” communities:

1. Community members must generally understand themselves as having some mutual obligations to care for one another *on a personal level*. (Commitment only to the collective as a whole – e.g., being willing to abandon or sacrifice others on the altar of the collective – does not suffice.)

2. The community’s practices must show an *equal* concern for all its members. (This does not mean that there cannot be any meaningful differences or hierarchies. It also does not mean individuals need to care about their neighbors as much as they care about their children – that distinction flows from individuals, not from the community, so it doesn’t count against the community. The point here is that communities with caste-like systems, where some peoples’ interests are generally taken as inherently more important than others’, won’t do.)

3. Personal concern for other community members must be seen as an expression of the community’s general values – not merely the arbitrary goodwill of the individuals. (This one is a bit subtle, but think of it like this: when you treat your sister with respect, it’s not just because you are a nice person. It’s also because *that’s how people in this family treat each other*. Anyone else in your family ought to do the same, because they are a member of the family. Good-enough communities also work like that.)

4. Group members must see their obligations to one another as *special* – not merely the same obligations that all human beings have toward one another. (A community that does not work this way is simply not a community. As Dworkin memorably put it: “If we felt nothing more for lovers or friends or colleagues than the most intense concern we could possibly feel for all fellow citizens, this would mean the extinction not the universality of love.”)[^1]

This community analysis is an intricate bit of conceptual machinery, but it hangs together quite beautifully. I recommend sitting with it for a while before passing judgment on it. For more depth, dip into Law’s Empire.

![Law's Empire, by Ronald Dworkin](/images/blog/laws-empire.jpeg)

Only once we have performed this analysis of the community behind an institution can we proceed to the other, more familiar questions about institutional legitimacy, such as whether the institution follows a good process (or delivers good outcomes. Without this umbilical link to a proper community, legitimate authority – authority with moral weight – can’t exist. Institutions not grounded in community are only followed for pragmatic reasons, never obeyed out of a sense of moral duty.

All that talk about the need to [re-weave the social fabric to fix what’s wrong with contemporary democracy](https://einhorncollaborative.org/call-to-connection/)? This is what it’s about. Our institutions cannot assert authority when the communities they represent are so defective that the people in them do not experience a sense of obligation to one another.

## What The Community Analysis Shows

The community analysis explains gaps in authority that might otherwise be puzzling. For example, it’s probable that members of an apartheid society have no moral duty to pay taxes – *even if the taxes are otherwise lawfully enacted (process legitimacy), and earmarked for an undisputedly worthy cause, like curing disease (outcome legitimacy)*. Those facts simply could not make legitimate the authority of, say, a South African police officer collecting taxes in a township circa 1980. An analysis of the community itself explains why.

The community analysis also sets attractive limits on both (a) general and (b) specific critiques of authority’s legitimacy. It does the former by showing how authority is sometimes more than just a pragmatic construct: when disrespecting authority means disrespecting a community that deserves respect, authority can carry moral force. It does the latter by showing how communities can be good enough to merit respect without being perfect. Communities can be rife with friction, discord, difference, and pain, while still having the four hallmarks listed above, and still being overall a force for good.

This rich notion of legitimate authority is what I have in mind when I say that transparency should only be demanded when an exercise of authority is reasonably suspected to be illegitimate. Much like how surgery should only be done with good reason to suspect a tumor. Frustratingly, we can never really be sure that authority *is* legitimate, without perfect knowledge about an institution’s inner workings, and about the community standing behind it – that is to say, without perfect transparency. This is often a real catch-22, with no ideal solution. But we should at least reasonably suspect a problem before we demand transparency. Because transparency can actually harm otherwise healthy institutions and communities.

## The Costs Of Transparency

Not long ago, the so-called “nothing to hide” argument dominated discussions about personal privacy online. Happily, it has been [widely refuted](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3976770). The publication of information about people, even when they are doing nothing wrong or embarrassing, makes them more manipulable by bad-faith actors (such as advertisers) who can study their tendencies. This is a key takeaway from Shoshanna Zuboff’s argument in Surveillance Capitalism, Tristan Harris’s argument in the Social Dilemma, etc.

The argument about personal privacy also applies to institutional transparency. The more institutions publicize their inner workings, the more outsiders can influence those inner workings. This is good – it is, indeed, the essence of democracy – if those “outsiders” are *not actually outsiders*, but rather legitimate participants, i.e., democratic stakeholders seeking to improve the institution. But that is a big if. Transparency, by definition, does not guarantee it. When information is publicly disseminated, it always also goes to institutions’ enemies as well as their friends, and this carries a cost.

The flaws that transparency inevitably reveals present rich opportunities for good-faith stakeholders to help their institutions’ improve. But they also become an attack surface for institutions’ enemies. Publication of institutions’ internal flaws causes personal harm or embarrassment to individuals acting on behalf of the institution, increasing their risk of becoming compromised. It diminishes institutions’ prestige, reducing their ability to recruit talent and introducing friction to their operations.

In light of these costs, it’s risky to demand transparency without a strong suspicion that it will actually root out illegitimacy.

## The Benefits Of Transparency

When is transparency worth it? Surely, even when an institution is more or less legitimate, transparency can sometimes bring about improvement? Here lie the hard cases, where maximum caution is warranted.

In my discussion of legitimacy above, I focused on the underwriting of authority by a community. But I also mentioned that an institution’s authority is illegitimate when it is failing process-wise (e.g., through corruption or incompetence) or substantively (e.g., delivering bad outcomes).

Transparency can unquestionably mitigate these defects of process and outcome, providing opportunities for good-faith stakeholders to contribute positive ideas and tough love. But the idea that these positive effects will outweigh negative ones **seems to assume that good-faith observers pay closer attention than bad-faith observers**. Every flaw in an institution’s operation that transparency reveals is a two-way street: a pathway for friends to help and for enemies to exploit. It therefore seems important to consider whether stakeholders or opponents will more carefully review the revealed information.

This fits with common sense and helps explain observable differences between, say, a national military and a local birdwatching society. The military has lots of known, highly motivated enemies; while few care about the birdwatching society, besides friendly enthusiasts. Therefore, the military should guard its internal information. But when the birdwatching society hides internal information, it’s probably just denying interested birdwatchers an opportunity to improve the institution.

A further note. Even when transparency does improve the process/outcome aspects of an institution’s legitimacy, this cannot transform the institution into a legitimate *authority* if the community behind the institution remains critically flawed. Returning to the four part test above for “good enough” communities, the loose collection of local birdwatchers is unlikely to cut it. This explains why nobody owes serious obedience to their local birdwatching society; and why the society would be quite insane if it asserted authority to coerce members.

On the whole, it’s useful to think of transparency as a way of broadcasting power over an institution to a more diffuse set of actors; or granting remote access to an important part of the control panels. It does this on an unencrypted line, with no guarantee that the recipients have the institution’s best interests in mind. Transparency thus places institutions into a sort of messy receivership – in extreme cases even incapacitating them, almost like [apoptosis](https://en.wikipedia.org/wiki/Apoptosis).

This is most obviously warranted when institutions are exercising illegitimate authority. What transparency does not do, however, is build trust.

<div class="html">
<div class="">
  <img class="h-96 no-y-margin" src="/images/blog/mattxmidjourney_transparency-and-trust.webp" />
  <p class="italic text-center">Midjourney’s take on "the choice between transparency and trust."</p>
</div>
</div>

## Real Trust

The original “trustless” technology was a lock. When you put a lock on your door, you are not trusting anyone to behave well. Instead, you’re assuming people will misbehave and taking measures to stop them. If trust is a relationship that runs between people, locks on doors are evidence of the opposite: distrustful relationships.

Of course, if locks work well, something odd happens: burglars stop trying the doors. It then becomes possible, and even reasonable, to leave your door unlocked. This is nice. It’s convenient to be able to leave your door unlocked. But this is not the same as trusting that other people will not try to break in. This is not trust but rather a *bet* that no one will push the handle.

A community of high trust would leave the doors unlocked but also enjoy many other benefits attendant to that trust, such as greater collaboration and mutual support. If one burglar appeared, it would seem the exception, not the rule; doors would remain unlocked after the lone burglar was apprehended. By contrast, in a low-trust community, as soon as one burglary occurred, all unlocked latches would bolt back up immediately. Similarly: in a high-trust community of unlocked doors, everyone would *know it* if there were no burglars, whereas in a low-trust community of locked doors, even if there were no burglars, everyone could live indefinitely in a paranoid delusion that the society was crawling with burglars being foiled by locks.

The supposition that transparency builds trust in institutions is wrong. Like a lock, transparency reduces the chances that particular exploits will occur. But it doesn’t strengthen the wellspring of legitimacy – the qualities of the community behind the institution, that Dworkin’s test tries to capture. Instead, it reflects a breakdown in the community and thus feeds into a spiral of decreasing trust.

Trust is about *unlocked* doors. You can only trust an institution to the extent that it is *opaque*. Trust is faith.

Opaque institutions, like unlocked doors, carry real dangers. When and why should we accept that? It’s not an easy question, but I believe this analysis can help. When we believe an institution’s authority is all-things-considered legitimate, we should be careful before demanding to know more of its inner workings, because the warts revealed will often serve its erosion more than its improvement. On the other hand, when we suspect our institutions have run amok (and/or have few enemies) transparency is likelier good for them, however painful.

Think of the US military during the Vietnam War. It was operating with very poor process and outcome legitimacy – lying, failing, betraying its responsibilities to millions of people from Ohio to Cambodia. But this wasn’t common knowledge in the United States until the [Pentagon Papers](https://en.wikipedia.org/wiki/Pentagon_Papers) revealed it, thus *decreasing* trust in the institution. And I see no reason to think the leak mended any fractures in the civilian community, which remained highly polarized. So if the leak was overall a good thing – as I believe it was – it was mainly because the process and outcome legitimacy deficits plaguing the military at that time were so exceptionally harmful and outrageous that the institution simply had to be weakened, irrespective of the complex costs.

Another example. Federal courts (leaving aside whatever one thinks of the current Supreme Court) have long been among the more trusted and competent institutions in the United States government. They are also among the least transparent. To be sure, most arguments, briefs, and evidence are public. But there are no cameras recording all proceedings, as there are in Congress. Federal courts make fairly threadbare efforts to render their official documents easily accessible or searchable by non-professionals, and almost none to actually explain the complex proceedings to laypeople. It is difficult even for professional journalists to follow court cases competently unless they are unusually industrious and have a background in law. All this forms a real umbra of opacity in which the institution operates.

Suppose it were otherwise. Suppose transparency was taken to such an extreme, with body cameras and more, so that all live conversations, internal notes, and draft opinions in judges’ chambers were made public. Also suppose super-smart artificial intelligence algorithms assisted journalists in combing through this copious data for anything of possible public interest.

This would cause an earthquake. Judges and their clerks could not express doubts and vulnerabilities without risking public censure. They’d live in fear of minor errors. It would distort their conduct, making them behave 24/7 with the falseness of politicians. Bad-faith external actors, such as journalists funded by interested parties, would at best terrorize and at worst heavily influence the courts.

Public records laws have arguably tied the hands of many government bodies in just this way, making them less able to experiment with controversial ideas, unusual compensation packages, or even simply new ways of doing things which are likely to attract disruptive scrutiny. They incentivize institutions to behave rigidly and dumbly – to do everything exactly “by the book” so that criticism can be neutralized. Where risk-taking is punished, exceptional performance is rare and excessive caution becomes the rule.

## How Analyzing Community Helps Us See Where We Need Institutional Transparency

Analyzing the community behind an institution might seem irrelevant to the question of where we need institutional transparency. After all, institutional transparency primarily shows us the other two legs of legitimate authority’s stool: how an institution is doing in terms of processes and outcomes. The qualities of the community are sometimes already public knowledge, and other times not the kind of thing scrutinizing a particular institution’s processes would decisively reveal.

But analyzing community can still help guide our decisions about where to demand transparency. Where an institution represents a *not-good-enough* community, such as the United Nations, we know its authority will be on shaky ground. Transparency will therefore be easier to justify. And where a community is good enough – such as in a loving family – one ought to have a solid reason to suspect a problem in the authorities’ (e.g., the parents’) processes or outcomes before demanding transparency. Otherwise, they’ll be undermined without good cause, weakening the family.

![Transparency flow chart](/images/blog/flow-chart-transparency.jpeg)

## Conclusion

We aren’t thinking about transparency with enough rigor. By and large, we should demand it of institutions when, and only when, we reasonably suspect them of asserting illegitimate authority. A bit like invasive cancer surgery, the role of transparency should be primarily to attack strongly suspected corruption, not to fish for it. (Interestingly, certain [new information-sharing techniques](https://www.microsoft.com/en-us/research/video/working-towards-a-plural-public-via-common-knowledge-and-designated-verifier-proofs/) might help us increase the accuracy of our suspicions without harming institutions much – analogous to a pre-surgery CT scan.)

Transparency is not an inherent good. It’s a powerful medicine to be applied wisely.

--

*Thanks to Leon Erichsen and Alex Randaccio for extremely helpful feedback.*


**Notes**

[^1]: *Law’s Empire*, p. 215.
