---
layout: "layouts/blog-post.njk"
date: "2022-01-21"
title: "A Speculative Sketch of a DAO, with Open Collective"
postHeader: "A Speculative Sketch of a DAO, with Open Collective"
postAuthor: "Matt Prewitt"
---

This post describes a possible new system of DAO governance that emerged in conversations between RadicalxChange Foundation and [Open Collective](https://opencollective.com/). Open Collective is exploring how to [transition](https://opencollective.com/e2c) from a privately owned organization to one that shares power and money with its vibrant network of stakeholders.

This sketch leaves many questions unanswered. But we thought it worth sharing, even in this embryonic stage, to invite both the RadicalxChange and Open Collective communities to join the conversation. Let us know your thoughts, and let’s figure out together whether there is something worth exploring further here. And even if this doesn’t make sense for Open Collective, it might be something other organizations can iterate on!

## Open Collective

Open Collective helps communities overcome the hurdles of starting an organization, accessing charitable status, and managing donations and finances transparently, which can be challenging when you’re small and just trying to organize around urgent good work. By running a network of fiscal hosts who manage the logistics of receiving, tracking, and reporting money for grassroots projects, Open Collective lets [an incredibly important network](https://opencollective.com/discover) of small (and even not-so-small) organizations (called “Collectives”) focus on doing good work. It charges an administration fee for this, and is now a profitable business.

Open Collective is a huge success, with thousands of amazing groups relying on its services. Having accomplished much of what it set out to do in 2016, how can it now turn over the reins of its governance to the communities that comprise it?

## Exit to Community: To DAO or Not to DAO?

Many blockchain projects have [shown](https://coinmarketcap.com/alexandria/article/a-deep-dive-into-how-the-top-daos-work) that it is possible to meaningfully reward the people who helped build a network by issuing them governance tokens entitling them to influence the network’s future. Uniswap is a prominent example: the early users of that decentralized exchange received an airdrop of UNI tokens, which are now used to govern the DAO that steers Uniswap’s future. The amount of governance tokens each Uniswap user received in 2020 is now worth thousands of dollars.

You can think of protocols like Uniswap as infrastructure. Open Collective is too: it’s a shared, co-built network upon which lots of people and projects depend. Infrastructure is a very special sort of thing. As I’ve written elsewhere, it is better off not being privately owned: [it should be democratically governed, and the value it generates should be shared](https://www.radicalxchange.org/media/blog/democracy-actually-is-good-at-governing-infrastructure-and-infrastructure-is-exactly-what-democracy-should-govern/).

In a sense, this is why Uniswap-style tokenification of governance is attractive: it immediately shares both financial value and decision-making power. But there’s a huge pitfall to this maneuver. While it is democratic and value-sharing in the short term, it can ironically guarantee plutocracy in the long run. It sacrifices the future on the altar of the present. Why? Well, without an identity system tracking who owns the tokens representing governance power, Uniswap’s DAO and every similar one can be influenced fairly directly, with the power of money. [Token voting systems without identity](https://vitalik.ca/general/2021/08/16/voting3.html) can seem to work well for a while, but we shouldn’t forget that they will converge, sooner or later, with plutocracy.

## Against Plutocracy

Long run plutocracy is wrong for Open Collective. (In fact, it’s wrong for every community, because it rewards rent-seeking and extraction. But it especially doesn’t work for a community motivated by democratic and non-profit values.) So what might a more durably democratic system look like?

Again: **The first consideration must be identity**. Any token-voting system must have an identity system that formally distinguishes between different agents, or it will slide toward plutocracy. Open Collective is off to a great start here because its key stakeholders, the nonprofit Collectives and their fiscal hosts, are not anonymous. They are known organizations led by known people. Faking them to game governance would be relatively hard to do, and relatively easy to detect. So by making these known organizations the primary participants in governance, Open Collective has a natural advantage in setting up a non-plutocratic DAO.

A **second important consideration is power concentration**. When we tokenize governance, even with a good identity system in place, we open up the possibility that lots of power will end up in a few hands. This would undermine the kind of distributed participation that reflects Open Collective’s values, and it would waste the opportunity to get better outcomes through diverse inputs to governance.

To address power concentration we used three different design patterns. The **first** is partial common ownership: assets whose value recycles into the community and doesn’t unduly build upon itself. The **second** is periodicity. This is the ancient idea behind [debt jubilees](https://www.newyorker.com/business/currency/a-robin-hood-for-the-debt-crisis): every now and then, to ensure rough egalitarianism in a system where exchange is occurring, it makes sense to wipe the slates clean. Juice cleanses also work on this principle. The **third** pattern is QV ([quadratic voting](https://www.radicalxchange.org/concepts/quadratic-voting/)).

## A Sketch of a DAO

I’ll now sketch a hypothetical DAO. To keep this a blog post instead of a white paper, I’ll need to under-describe certain things. Please interpret it as a sketch, and click the explanatory links to drill deeper.

Think of all the nonprofit collectives and fiscal sponsors as the voting members of the DAO. (For now, let’s assume they have equal weight, but we could change that assumption, e.g. by giving larger organizations more voting power).

![Voting members of the DAO](/images/blog/dao-voting-members.png)

At the beginning of each governance period (let’s say this is a year) each member of the DAO (a collective or a fiscal sponsor) receives two special NFTs, which we’ll call for now a “Governance NFT” and a “Veto NFT”.

![Governance and Veto NFTs](/images/blog/dao-gov-nfts.png)

These Governance and Veto NFTs are similar in many respects.

- Both are **only good for a year** (or other governance period). At the end of that period, they turn into useless pumpkins.

- Both NFTs are **reissued yearly** to all active members of Open Collective (collectives and fiscal sponsors). This happens **on a staggered basis** so that all the reissuances don’t happen at the same time. For example, you might divide all stakeholders into 12 equal-sized groups, with each group getting their token reissuances on the first day of a different month.

- Each of the two NFTs **contains within it an allotment of special-purpose QV tokens that are only usable by the holder of the NFT**.  (These NFT-linked QV tokens are what people actually use to vote.) Like so:

![Each NFT contains an allotment of QV tokens](/images/blog/dao-nft-tokens.png)

In other ways, the Governance NFTs and Veto NFTs work very differently.

- **The QV tokens associated with the Governance NFT are used to do all the “usual” things that governance tokens let you do in a DAO**. At a minimum, you can use them to make proposals and vote on proposals. The cost of using the tokens to take these actions is calculated quadratically (so voting many times on one item, or posting many proposals in a year, comes at a steep cost).

- **The QV tokens associated with the Veto NFT can only be used to vote for or against special vetoes**. More on this in a moment.

- **The Governance NFT can be sold**, thus transferring the QV power it contains to any (verified) entity willing to buy it. **The Veto NFT is strictly non-transferable**. It must remain with the organization that received it when it was issued.

- **The Governance NFT is a SALSA (Self-Assessed License Sold at Auction) NFT**. [SALSA is a form of partial common ownership](https://www.radicalxchange.org/concepts/partial-common-ownership/). A SALSA NFT has a special design that lets the asset flow to the party best positioned to use it; while also deterring speculative purchasers and generating shared value for the whole community.[^1]

So, to add a little more detail to the picture above:

![The Governance NFT is a SALSA NFT](/images/blog/dao-salsa-nfts.png)

**What is a SALSA NFT, and Why?**

A SALSA NFT (sometimes also called a Harberger NFT) works as follows. Its holder must at all times publicly post the price for which they would be willing to sell it. Anyone who wishes to may pay that price to the holder, and claim the SALSA NFT. To deter the holder from posting an unrealistic or exorbitant price, the holder of the SALSA NFT must pay a regular fee to the rest of the community which is calculated as a percentage of their posted price. If the fee is not paid, the SALSA NFT may be reclaimed by the community. For more on standardizing and instantiating SALSA NFTs, see this [discussion](https://github.com/RadicalxChange/salsa-nft/discussions) and [this repo](https://github.com/721labs/partial-common-ownership) among others.

This has several interesting features. **First**, it deters apathetic participation. All governance stakeholders would have to pay the community some amount in order to hold on to their voice in the process. So anyone who didn’t care about governance would post a low value for their token, letting someone else claim it. **Second**, it provides a recurring revenue source for governance stakeholders, letting them transparently convert their governance power into cash if they wish. Note, however, that because the tokens are only good for a year, this does not amount to permanently selling governance power. And the SALSA mechanism ensures that whenever community members relinquish their governance power, this will increase the community’s wealth (because the new SALSA NFT holders will be paying higher fees to the community to hold the tokens). **Third**, it makes it very difficult and expensive for anyone uninterested in the governance to buy the tokens speculatively, hoping their value increases. If the tokens’ value increases, so will the cost of holding onto them.

These are good things. But there’s an obvious objection to using SALSA NFTs for governance, which will already have some of you squirming in your seat: corruption. People might, for example, try to buy a bunch of Governance NFTs all at once, obtaining lots of temporary influence, and then pass extractive, self-interested governance measures. That would be very bad! And that’s where the Veto Tokens come in.

**What About the Vetoes?**

In the yin-yang symbol, the black field contains a white dot, and the white field contains a black dot. This symbolizes the idea that forces in balance must contain their opposite. Here, for the market mechanism of SALSA to do its work – letting market mechanisms improve the allocation of governance power and letting stakeholders “cash out” their power – an element of non-market judgment has to be in place, holding back the forces of corruption. Here, the Veto Tokens play that role.

The power in these tokens cannot be sold. It can’t even be transferred. Only the Open Collective stakeholder who was initially issued each Veto NFT can use the special QV voting power it contains.

**Every significant governance decision can be blocked by a quadratic vote exceeding some threshold (50%, 67%, or similar)**. But this will not result in a gridlocked veto-ocracy. We are not talking about lots of parties with unilateral veto power: vetoes here are collective decisions by the Veto NFT holders. And the QV tokens used in veto votes can be used *for or against vetos*. So, if a decision has been passed through the normal governance process, but you know it faces significant opposition, you can allocate a portion of your veto QV budget to oppose the veto and help ensure it passes.

Vetoable decisions include **passed governance proposals**. But importantly, they also include **SALSA NFT transactions**. This is very significant. It means that if some outside party tried to purchase a lot of SALSA NFTs all at once, threatening to upset the future of the organization, the community could simply stop it with a veto vote. To avoid governance fatigue, a timelock can be put in place to ensure all sale decisions happen at a set time (say, monthly), giving participants the opportunity to review them in aggregate. This also means that if a valued participant in the governance community got unwillingly “bought out” of their SALSA NFT because they assigned it too low of a value, the community could in effect give that party a second chance to remain in the governance process, by vetoing the sale.

**Who Can Buy the SALSA NFTs?**

Finally, for Open Collective (and other shared-values-oriented communities experimenting with this design), I suspect it might make sense to treat insiders differently from outsiders in SALSA NFT transactions. If one genuine community member buys another genuine community member’s governance power (thus increasing shared fees to the community in the process, don’t forget), it’s less worrisome than if a potentially malign outsider buys in. So why not simply impose a higher price for non-community members, such as a 25% or 50% or even 500% surcharge on SALSA token purchases? This surcharge would be shared by the community (as opposed to going to the SALSA token’s seller).

The surcharge amount could be adjusted through the normal governance process. But I think it’s an important lever to have in mind. It could temper the dangers of the system and make sure that the community as a whole is amply compensated whenever governance power passes outside the circle of trust.

## Conclusion

There are many unanswered questions with this design. With apologies to ancient Greece and modern Taiwan, few large organizations have used SALSA or other forms of partial common ownership to allocate governance power. However, for organizations like Open Collective who are interested in experimenting with making governance power more open and alienable, while also holding the line against plutocracy, it is a mechanism that demands serious attention. This short post tries to sketch some of the safeguards one might put around it in a DAO design. I’m looking forward to working through this in more detail and hoping it will spark other ideas, refinements, and experiments!

*Huge thanks to Paula Berman, Pia Mancini, and Nathan Hewitt for their contributions and feedback on this post.*

**Notes**

[^1]: For more on SALSA (a form of partial common ownership, based on the same idea as Harberger taxes) and SALSA NFTs, see [here](https://www.radicalxchange.org/concepts/partial-common-ownership/).
