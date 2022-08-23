---
layout: "layouts/blog-post.njk"
date: "2022-08-24"
title: "Finding Wildland's Soul"
postHeader: "Finding Wildland's Soul"
postAuthor: "RadicalxChange Foundation"
---

![Finding Wildland's Soul](/images/blog/wildlands-soul.png)

Most blockchain-based platforms face a seemingly impossible conundrum: while they aim to bypass intermediators and create distributive political economies, their very architecture is one that often produces plutocracy.

Concentrations of power happen when these platforms delineate membership (i.e. who is given the right to weigh in on decisions) through financial transactions or the use of scarce resources. This is a technical choice employed to overcome (or raise the cost of) [Sybil Attacks](https://en.wikipedia.org/wiki/Sybil_attack). However, under such primitives, power is deterministically re-centralized in the hands of small groups — a predictable, all too common dynamic that must be anticipated and avoided if those networks are to deliver on the goals of distributed and broad empowerment.

In this blog post we summarize our longer report on how [Wildland](https://wildland.io/), a decentralized storage platform spun out of Golem Foundation, can integrate plural technologies for diverse cooperation, to move beyond web3 plutocracy toward [DeSoc](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763) and [Plurality](https://www.radicalxchange.org/media/blog/why-i-am-a-pluralist/). Although many of the recommendations below are specific to Wildland, we hope they can serve other projects facing similar questions.

→ If you are a part of one of those projects, and interested
in this kind of collaboration, definitely [get in touch](http://info@radicalxchange.org/).

## Introduction

Last year, Golem Foundation introduced the [User-Defined Organization (UDO)](https://golem.foundation/2021/12/16/udo2.html) – essentially a non-plutocratic DAO that gives users shared agency over the protocols, software and platforms they rely on.

We argue that a UDO will best realize its potential if a person’s governance power in a network bears a relationship to how socially central they are to that network. But to formally measure sociality in Wildland, the plan is for users to earn governance power based on how much they “use” the Wildland storage marketplace (via non-transferable “proofof-usage” tokens). As [BlockScience’s](https://block.science/) report thoroughly and convincingly argues, this design is concerning because exclusively tying political power to marketplace transactions threatens to leave us where we started – plutocracy.

Nonetheless, PoUs are a substantial improvement on coin voting governance, and with a few key refinements embedding principles of Plurality, Wildland can make a compelling first case for UDOs and non-plutocratic web3 governance. Soulbound tokens (SBTs) in particular can complement PoUs with a richer informational substrate for sociality that recognizes other kinds of community participation and enables more subsidiary governance models, correlation discounts, permissioned access to community resources, and even more robust security assurances for its decentralized storage system.

We conclude by recommending ways, given privacy and cheating concerns, that Wildland can begin bootstrapping its own decentralization.

## Plural membership

“Proof-of-usage” does not effectively measure sociality. We propose the use of [soulbound tokens (SBTs)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763) – publicly visible, non-transferable but possibly revocable tokens; an equal or better label is community-bound tokens (CBTs), but this post will use SBTs for simplicity. The aim of such tokens is to represent various kinds of relationships and personally consented commitments, which may include affiliations, memberships and credentials, as well as permissions, rights and responsibilities. SBTs can work together with PoUs to move beyond financialized membership and governance, instead representing genuine human sociality and solidarity, and thus furthering the grand goal of UDOs to meaningfully decentralize power.

There are a number of instances in which having a more granular mapping of the participants in Wildland's marketplace can result in consequential gains to the network as a whole:

- **In establishing the reliability of storage providers,** hence preventing data from becoming lost, or devices from becoming unavailable.

- **In illuminating the existing lines of trust, cooperation and solidarity, as well as social, economic and geographical cleavages** that exist across participants in the network. This would help measure and reward the diversity of support behind each proposal in the Build Fund, as well as taking measures that prevent socially correlated groups from accidentally coordinating or even intentionally colluding against other groups within the network.

- **In increasing protections against Sybil Attacks.** To ensure the legitimacy of its governance processes, UDOs need to differentiate between unique humans and probable bots, among its participants. To that end, SBTs can be integrated with a Proof of Personhood solution, such as [BrightID](https://www.brightid.org/).

There is an important question of who has the power to issue and assign SBTs, especially since the issuing of SBTs directly affects the distribution of power through PoUs. There is also the question of how this power to self-define groups via SBTs evolves and adapts over time. Here Wildland can learn from examples of progressive decentralization, such as Gitcoin, which has effectively transitioned to a [DAO](https://gitcoin.notion.site/gitcoin/GitcoinDAO-22431fe7c9794d99986a028c23ce56b5), and Wikipedia, perhaps the best example of empowering local moderation.

We suggest starting with a small number of defined groups and SBT-issuing authorities, branching out from the founding members like a web of trust; over time participants can progressively build reputation, establish provenance, and access more opportunities. Such authorities should also have bounded abilities to sanction the formation of other (derivative or otherwise) SBT-issuers. This lets the ecosystem evolve, but sustainably and with thoughtful constraints. Eventually, the UDO could assign PoU power not just to individual users but also to SBT-defined groups themselves.

It is important to note that sociality is emergent and thus unpredictable. Still we suggest below some likely intersections and dimensions of sociality that may become relevant for bootstrapping a rich ecosystem of SBTs to illuminate substructures within the community and support governance designs of increasing complexity:

- **Usage Pattern:** users can be grouped into different tiers through SBTs that reflect the amount of gigabytes being stored by them, the number of transfers made, and how long they have been a part of the network.

- **Storage Type:** users can be grouped through SBTs that reflect their needs and preferences for different types of storage. This can provide a map of the diverse needs and uses in the system (e.g. those of commercial providers, or those of users accessing the network from their personal computers).

- **App Integrations:** similar to storage type, as Wildland develops and enables integrations with other applications, the integrations that users plug into signal the different kinds of purposes and reasons for joining and using Wildland, which SBTs can begin to measure.

- **Locality:** mapping the different localities out of which users are connecting to the network may facilitate the formation of dedicated subgroups that weigh in on accessibility questions (such as translations), or partner to advance the adoption of Wildland within their region. Although geolocation is an easily gameable data point, such SBTs could be strictly granted to more highly trusted users (that already possess an abundance of other SBTs), and participate in local groups with thick relationships.

- **Engagement:** users that contribute to the network by working on documentation, mediating forum debates, participating in online or offline events, or promoting the project through various means, can be granted with SBTs that unlock broader governance rights, access to additional free storage, and other benefits.

## Plural funding

Wildland’s Build Fund is imagined as a single pool of funds to be allocated via Plural Funding to public goods throughout the ecosystem. But while there are certainly broadly shared public goods across the Wildland ecosystem that require an ecosystem-wide layer of the Build Fund, many public goods are likely to be shared locally in different pockets of the ecosystem by subgroups. Thus we imagine a multi-level Build Fund that maps upon the nested communities in Wildland. This structure enables *correlation discounts*, which account for the dimensions of solidarity among voters supporting a particular proposal (signaled by the SBTs they hold) and apply a lower vote weight to those who are highly correlated, in order to elevate proposals with more diverse support.

Plural Funding with correlation discounts can be seen as an improvement on the Penrose Method, a rule of *degressive proportionality* that gives groups voting power equal to the square root of its population. Institutional governance structures like the United States Senate and the European Union share important elements of degressive proportionality, but the only correlating factor used is geography. With a rich ecosystem of SBTs, the Build Fund could deliver a degressively proportional system along many different dimensions of social cleavages, and Wildland could better address network inequality and foster meaningful decentralization by encouraging diverse cooperation.

## Plural storage

Novel cryptographic platforms for file storage promise decentralization, security and prevention of attacks by seeking distributed redundancy. But in their pursuit of redundancy, they limit themselves to [purely anonymous and financial mechanisms](https://filecoin.io/). Instead we can imagine certification organizations (perhaps audited by a consortium that includes Golem Foundation, and eventually supported by Wildland’s Build Fund) who issue SBTs to personal computers that are, for example, compliant with certain security or regulatory requirements. Then users would be able to search for PCs that meet their required standards or that otherwise offer some diverse hedge to reduce risk and bolster redundancy. By tracking the kinds of networked affiliations in the system, SBTs could allow for much broader use of distributed file storage and help decentralize the cloud storage market (and eventually [cloud computing](https://link.springer.com/chapter/10.1007/978-3-642-10665-1_43) market) globally across personal computers.

## Existing implementations

In their simplest form SBTs are trivial to create, and there are many existing standards that can be used and built upon to integrate SBT functionality into the Wildland network. In this section we will cover some of the options worth exploring.

- Minting and issuing SBTs can actually be [computationally-efficient](https://mirror.xyz/shreyjain.eth/YCTLFK_yKwcy36FXNol_FqX7m5OjslmMhqbKtQBmeP4) and [gas-free](https://blog.polygon.technology/how-to-mint-nfts-with-utility-gas-free-on-polygon/). Also see more [technical commentary](https://kevinyu.substack.com/p/a-technical-commentary-on-desoc-part?sd=fs&s=r).

- [Open Zeppelin Governor](https://blog.openzeppelin.com/governor-smart-contract/) enables vote tracking, vote counting, timelocks and other features that can be visualized through the intuitive interface provided by Tally. The team at Tally created [this simple tutorial](https://blog.tally.xyz/how-to-create-a-soulbound-governance-token-in-5-minutes-or-less-4151d2164b9d) on how to create a SBT for governance using Open Zeppelin.

- [Sismo.io](http://sismo.io/) will launch in July 2022, offering non-transferable “badges” to public Ethereum profiles (ENS names). These badges will work with Zero-Knowledge (ZK) attestations of facts imported from other accounts (on Ethereum, as well as Twitter or Github) that can be aggregated to build reputation, with confidentiality, to a public profile.

- Others building ZK SBTs include [0xPARC](https://0xparc.org/), [Iden3](https://iden3.io/) and [Polygon](https://polygon.technology/). Github repo leveraging Iden3 here.

- [Tribz.xyz](https://tribz.xyz/) is enabling Souldrops — airdrops of SBTs — to
contributors of different open source repositories, such as
Open Zeppelin and IPFS.

- BrightID, a Proof of Personhood solution, created a [Proof of Concept Soulbound NFT standard](https://github.com/BrightID/BrightID-Soulbound-NFT) that addresses [the transferability dilemma](https://forum.brightid.org/t/implementing-soulbound-nfts-with-brightid/430). In the absence of more sophisticated community recovery solutions (an area of active research), fully non-transferable SBTs face several limitations in cases of compromised wallets, or even more simply, when users want to change or restructure their addresses. To address this challenge, BrightID's standard enables special token transfers called "rescues" that are allowed when a BrightID owner can provide proof that the token owner wallet belonged to them.

- [Gitcoin Passport](https://passport.gitcoin.co/) allows users to collect non-transferable “stamps” that represent their unique personhood and sociality. The quantity and variety of reputable stamps help determine a user’s “trust score”, which affects how their Gitcoin Grants contributions are matched. Gitcoin signs the stamps and stores them on the [Ceramic Network](https://ceramic.network/). At least for now, the stamps are associated with a user’s Decentralized Identifier (DID) but controlled by Gitcoin’s DID.

- [Optimism Collective](https://community.optimism.io/docs/governance/) will use SBTs to gate access to its new Citizens’ House, which will govern and allocate Optimism’s Build Fund equivalent for public goods.

## Privacy & Cheating

There is no requirement for SBTs to be linked to a legal name. Instead, they can be accumulated through a persistent pseudonym, with anti-Sybil properties naturally emerging over time. Nevertheless, SBTs raise important questions of privacy and cheating.

Pluralism is about composable local control and diverse, networked cooperation; where many groups are empowered in a decentralized way to keep power away from the center, but at the same time those groups are discouraged from local rent-seeking that would undermine broader solidarity and common interests. Note that those values – of integrity to local context and accountability to shared standards, of privacy and transparency – can conflict.

But SBTs suggest information structures that can meaningfully improve the tradeoff. With various combinations of [privacy techniques](https://vitalik.ca/general/2022/06/15/using_snarks.html), we can have programmably plural privacy, where SBTs can safely represent our [private, partially private, and public commitments](https://twitter.com/pujaohlhaver/status/1537091112443252737).

Still, we recommend starting out with SBTs that do not contain Personally Identifiable Information and only represent purely public commitments. This both eases implementation since encryption techniques are less required, and, more importantly, lowers the risk of losing contextual integrity since the SBTs are only representing limited information on-chain.

Then there is the related issue of cheating. Even with some kind of transparency about social solidarities, colluding groups can hide themselves by misrepresentation or faking other solidarities; meanwhile, they can still effectively coordinate outside the system through side channels.

Getting the incentives right so people reflect their true social commitments through SBTs depends on the SBTs gating the governance of meaningful social or user clusters, i.e., meaningful user sub-communities. We recommend starting out with SBTs that can be considered in the context of Wildland as *reputable*–emerging as much as possible from actual human relationships. This would help differentiate real community members from bots and fake accounts that may try to farm and accumulate fake SBTs but will inevitably, by definition, be shown to sit outside the relevant social context and network.

Note that while these balances of incentives and of privacy and publicity are delicate, similarly delicate balances are present in other RxC-style mechanisms. The countervailing incentives to hold an SBT look much like the countervailing incentives of Harberger taxation to over- and undervalue assets, which can be designed to offset (by taxing atthe turnover rate) and reveal the true and subjective value of the asset. And introducing and proliferating elements of publicity with SBTs hold serious dangers alongside its promises. This is not so different from Quadratic Voting, which threatened to bring harmful market dynamics and transactionalism to politics, and required key refinements and thoughtful norms and practices to develop around it that better harness its benefits and reduce its risks.

Similar adjustments will be needed for SBTs that nurture their beneficial uses and prevent perilous ones. Critical developments will include solutions for community recovery and programmably plural privacy, as well as the emergence of norms and standards for things like negative reputation and differentiating between consented commitments (SBTs) and non-consented claims (tags).

There are challenges ahead, and good reasons for caution. But in a space that moves quickly, there is already much that can be done here with confidence. With a few small but meaningful steps in these directions, Wildland and others can establish themselves as first-movers beyond plutocracy in web3 and toward Plurality.
