---
layout: "layouts/blog-post.njk"
date: "2022-08-01"
title: "Abstraction v Composability Tradeoffs in Web3"
postHeader: "Abstraction v. Composability Tradeoffs in Web3"
postAuthor: "Shrey Jain, Glen Weyl"
---

It is difficult to design a system that is capable of being both abstractable—or generalizable—and composable in  unique settings. This canonical generalization problem is often discussed amongst designers of AI systems and standard's committees.

If you are building in web3 today, you may find yourself asking questions like:

1. "Will my solution work across all blockchains?"

2. "Is this the blockchain I want to be building on?"

3. "The blockchain is 'immutable,' is my solution permanent?"

You are not alone. I have heard these questions discussed in settings with government bodies, founders, web2 companies, and researchers in the context of gaming, healthcare, identity solutions, and finance. In this blog, I comment on the tension between abstraction and composability in web3 today, __specifically within identity solutions__, and argue that at this point  it would be too premature to settle for a local minimum standard. To do so, I approach the ongoing public debates about the question of consensual verification in different specs, such as soulbound tokens (SBTs), decentralized identifiers (DIDs) and verifiable credentials (VCs), and  illustrate an example of issuing an innocuous "scarlet letter" to an account that uses DIDs and VCs that is public for the world to see. I then comment on additional limitations of these specs, particularly with regards to blockchain composability. In doing so, my aim is not to discredit the valuable achievements of DIDs and VC specs, but to clarify the abstractability v. composability tradeoff at play with these different identity primitives and encourage experimentation across different methodologies.

## Standards Paradox

In Image 1, I visualize a matrix for this generalization problem in the web3 context. We face the challenge of ensuring that our solution works across as many platforms as possible while also maintaining the composability within each ecosystem.

<div class="html">
<figure>
<img class="w-full max-w-2xl" src="/images/blog/comp-abs-tradeoff.png" alt="Composability and abstraction tradeoff matrix" />
<figcaption class="text-center"><b>Image 1.</b> Composability and abstraction tradeoff matrix.</figcaption>
</figure>
</div>

This problem of generalizability versus composability is well documented in academic literature. However, I really enjoyed the analogy that [Michael Mignano](https://twitter.com/mignano) drew in his recent '[Standards Innovation Paradox](https://mignano.medium.com/the-standards-innovation-paradox-e14cab521391)' blog on standards vs the family vacation. He clearly demonstrates the problem with generalizability and the innovation ceiling that you hit early on in time by adopting standards too soon.

> Imagine you and your significant other are alone together on a vacation for two weeks in a country you've never visited before. Because it's just the two of you, you can do anything you want on that trip without putting much thought into it. Want to cancel tonight's dinner reservation and go to a concert instead? You can. Want to skip tomorrow's museum visit and instead rent a car to go to a different city? You can.
>
> Now, imagine that same trip, but instead of it just being the two of you, your kids, your parents, your in-laws, three friends, your brother, his partner, and their four kids all tag along, too. It's a completely different trip, right? In this version of the trip, everything has to be planned meticulously. And if you decide you want to make changes to the itinerary, you have to get everyone to agree, which is nearly impossible. What you end up with is a great time spent with family and friends you haven't seen in a while, but a consensus-driven trip that is far less interesting and unique. That's what it's like building products based on standards that have achieved scale and widespread adoption.
>
> Anytime a team wants to do something exciting and new that exceeds the limitations of the standard, they have to get every stakeholder (or at least enough to reach a critical mass of adoption) who has adopted that standard to also adopt the change, otherwise the change is useless. And if you plow ahead with the change anyway and break the standard, then you lose the benefits of the standard. This is hard enough with a bunch of friends and family on a vacation, but just imagine trying to do it with a variety of companies, big and small, all with different and potentially competing interests and priorities. This is the paradox of building with standards.

In web3 today, the traveling couple are the crazy experiments running in web3 siloed communities, and the family vacation is what web3 becomes with adoption of  'standards.' It would be crazy for web3 builders to adopt standards in such a nascent ecosystem, where it is impossible to know if these standards will stand the test of time.

Of the products built in the web3 ecosystem today, decentralized exchanges (DEXs) are one of the few solutions that have found proper product market fit. Once a product is mature, and reaches the scale that DEXs have with greater than $1 trillion in trading volume in the past year, protocols begin to calcify and it becomes challenging to run high-risk, high-reward experiments. However, the landscape of identity products in web3 is not nearly as mature and still contains minimal sensitive identity data (healthcare, government, insurance), making it compelling to continue experimenting on approaches. **But by settling for a local minima standard because it is convenient, we risk adopting a solution that is 100x worse than what we are capable of—the worst possible outcome for web3.**

Image 2 below is from Mignano's blog that highlights this innovation ceiling that we hit with early standards efforts. This visual is a generous representation of the ceiling we would hit with many of the identity standards being debated today.

<div class="html">
<figure>
<img class="w-full max-w-2xl" src="/images/blog/standards-innovation-paradox.png" alt="The Standards Innovation Paradox"/>
<figcaption class="text-center"><b>Image 2.</b> From 'The Standards Innovation Paradox.'</figcaption>
</figure>
</div>

On the other hand, an argument favoring adopting standards early on is that they can yield very positive externalities. Put differently: The more parties that adopt a standard, the greater coordination and network effect. As Mignano notes, standards create a  "common language for how products can interact with other products, eliminating the need to build each component within a market or re-define how systems communicate with each other." And it is vital that we eventually build some consensus on how to approach a problem. For example, thanks to TCP / IP (1970s), SMTP (1980s), RSS (1999), and FHIR (2011), we can benefit from a rich ecosystem on the internet of mail, podcasts, and sharing healthcare data. Yet, as noted by the initial draft dates of each of these standards, experiments in competitive environments may take time before they go from an initial proposal to becoming a widely adopted standard.

## Standards in Web3 Identity Today

Today, the world does not have coherent and sustainable internet identity management standards. The internet was not designed with an identity layer built in. However, diverse communities are building solutions that attempt to address this problem.

The [Decentralized Identity Foundation](https://identity.foundation/) work was adopted by World Wide Web Consortium (W3C) as the Decentralized Identifiers and Verifiable Credentials working groups seeking to create identity standards for the internet. Of this body of work so far, the consortium moved the [DID v1.0](https://www.w3.org/2022/07/pressrelease-did-rec.html.en) spec to [approval as a web standard](https://www.w3.org/2022/07/pressrelease-did-rec.html.en) by W3C. Reading the [director's decision](https://www.w3.org/2022/06/DIDRecommendationDecision.html) to advance DID v1.0 to this stage, you find explicit intentions to ensure that this identity substrate remains relevant to the developer community to keep innovating.

This move is great! The director's recommendation and approval will energize developer communities to create better and healthier standards for the internet. However, an important note is that DID v1.0 does **not** address how data itself should be stored or managed. It merely outlines how a globally unambiguous decentralized identifier should work. This may be by design, but it presents problems at implementation.

There is no widely agreed-upon [DID *method*](https://w3c.github.io/did-spec-registries/#did-methods). Each DID method implements a quasi-independent identifier. All DID methods are unique implementations of the normative DID v1.0 specification. You can think of the DID v1.0 as a template for what a DID method should look like and the properties it should uphold. Each DID method has specific tactical implementation details on how they can uniquely achieve that. Each DID method differs significantly in terms of technical frameworks and developer communities. Over [100 DID methods](https://w3c.github.io/did-spec-registries/#did-methods) exist today, with no consensus around which will become standard. In other words, DIDs methods are *under*-standardized. Many of today's applications are only composable with a subset of these DID methods.

<div class="html">
<figure>
<img class="w-full max-w-2xl" src="/images/blog/DID-structure.png" alt="The three-fold structure of DIDs"/>
<figcaption class="text-center"><b>Image 3.</b> Highlights the three-fold structure of DIDs.</figcaption>
</figure>
</div>

The [objections](https://www.w3.org/2022/06/DIDRecommendationDecision.html) from Google and Mozilla to W3C on the proposed DID v1.0 recommendation are a spot-on critique of the current state of this work. DID methods that can be used in practice are in fact not standardized and do not necessarily align with the principles of individuals who champion this work as commented on in the next section.

## Implementations that Deviate from the Identity Specifications

Recently, the "[Decentralized Society: Finding Web3's Soul](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763)" paper was published, outlining how non-transferrable "Soulbound" tokens could be used as a new identity primitive in web3.  In the wake of its publication, there were numerous public debates about the question of consent and whether SBTs would lead to people having their digital identities become unwillingly and irrevocably tagged with negative information about themselves.

Here is a quote from the [Bankless interview](https://www.youtube.com/watch?v=TbyVyVNsyys&t=2006s) titled "Soulbound" by the founder of [Disco.xyz](https://www.disco.xyz/), [Evin McMullen](https://twitter.com/provenauthority):

> If Vitalik makes a claim that I am a total chad through a soulbound token … apps will be able to read and access this information forever. Vitalik did not secure my consent to give to me a token, which is why someone was able to send him billions of Shiba tokens.
>
> Allowing for consent in the soulbound token paradigm is a norm but is not enforceable even if it is possible to secure consent first. Since gaining consent will be seen as inconvenient, it will be routed around.

Indeed, it remains [clear](https://twitter.com/0xhanvalen/status/1530324100106768384) that blockchain-based identity certificates like SBTs, in their most simplistic implementation, do not avoid the issue of issuing non-consensual "scarlet letters". I am currently capable of sending blockchain-based identity certificates to any wallet address without the consent of the recipient. The contents of this certificate are potentially public, immutable, as well as challenging and expensive to revoke.

However, it would be misguided to think that existing standardized specs can effectively prevent such non-consensual tags. To substantiate this point, below I illustrate an example of issuing an innocuous "scarlet letter" to an account that uses DIDs and VC that is public for the world to see.

The [Ceramic](https://ceramic.network/) network created the DID:3 method — used by various social apps today, including Disco.xyz, Orbis, and Gitcoin Passport. [Cerscan](https://cerscan.com/) is a tool that indexes all streams on the Ceramic network. Disco is still in private-beta, so the implementation highlighted below reflects this experimental stage and may not be the final product they release to the general public.  Thus, the outcome I'll demonstrate below is not due to the incompetence of the Disco team, but rather illustrates the challenges of getting this right on standards alone. In my exchange with the Disco team about this example, they've shared that a user's ability to curate -- namely to remove -- verifiable credentials that are not desired, consensual or accurate is the crux of their enthusiasm for these emerging primitives, but acknowledged that achieving this will still require many steps and iterations on the way to the right solution.

Therefore, my aim with the example below is to demonstrate how challenging it can be to actually achieve this, hence highlighting how multiple primitives such as DIDs, VCs and SBTs, still require substantial development and experimentation.

I first sought a stream of data to which I could issue a credential. As such, I found someone by the name of Mike Tyiska who has [created a stream of data](https://cerscan.com/testnet-clay/stream/k2t6wyfsu4pfyfy1rinhzzccqwflh2lo52sqs25nm9vzbdghlqiqmcvohwrx6j) connected to his account on the [Disco.xyz app](https://t.co/H3mEil8z2r). Disco is still in private-beta, so the implementation highlighted below, may not be the final product they release to the general public. I could see all of Tyiska's linked information in the clear, like his Ethereum address & Twitter handle, and Tyiska's DID. As you will see below I use his DID to issue a "scarlet letter" VC to.

<div class="html">
<figure>
<img class="w-full max-w-2xl" src="/images/blog/tyiska-DID-identifier.png" alt="Mike Tyiska's specific identifier for the DID:3 method"/>
<figcaption class="text-center"><b>Image 4.</b> Mike Tyiska's specific identifier for the DID:3 method found on his <a href="https://cerscan.com/testnet-clay/stream/k2t6wyfsu4pfyfy1rinhzzccqwflh2lo52sqs25nm9vzbdghlqiqmcvohwrx6j" target="_blank" rel="noopener nofollow noreferrer" class="">data stream</a>.</figcaption>
</figure>
</div>

So, I decided to issue a credential to Tyiska with his DID being the credentialSubject. As you can see in the [credential](https://cerscan.com/testnet-clay/stream/kjzl6cwe1jw14axv2pi0z37isbws18bm8mu0tprc8hsgvsz157zjm9htardvqft) that reads the content "Disco and Souls are siblings!!", anybody can read and verify that *I* issued the credential. That credential is an innocuous scarlet letter to Tyiska's DID (confirmed by the credentialSubject id matching Tyiska's DID).  See this more clearly in Image 5.

<div class="html">
<figure>
<div class="border mb-6">
  <img class="w-full max-w-2xl border-none" src="/images/blog/tyiska-credential-content.png" alt="The claim I made"/>
  <img class="w-full max-w-2xl border-none" src="/images/blog/tyiska-credential-subject.png" alt="DID of whom I issued it to (Tyiska)"/>
</div>
<figcaption class="text-center"><b>Image 5.</b> Highlights both the claim I made and DID of whom I issued it to (Tyiska) that matches from Tyiska's data stream in Image 4. You can find this claim and proof of the existence of the credential subject, <a href="https://cerscan.com/testnet-clay/stream/kjzl6cwe1jw14axv2pi0z37isbws18bm8mu0tprc8hsgvsz157zjm9htardvqft" target="_blank" rel="noopener nofollow noreferrer" class="">here</a>.</figcaption>
</figure>
</div>

You might figure by now that even DIDs are susceptible to scarlet letters. Their current shapes and forms are not exceptionally complete, generalizable, secure, and standardized. DIDs require very careful additional engineering and thus promotion of the standard may be a lower priority than iteration on it.

Section 3.3 of the verifiable credentials specification comments on [verifiable presentations](https://www.w3.org/TR/vc-data-model/#presentations), which specify the components needed to present a VC in a verified manner. One key component of this presentation is the [Presentation Proof Graph](https://www.w3.org/TR/vc-data-model/#info-graph-vp) which requires the signature of the owner of the VC to be considered verifiable. However, as shown in Table 1., this does not solve the scarlet letter problem as one can still index widely-accessible online VCs.

<div class="html">
<figure>
<table class="w-full">
  <tr>
    <th>Outcomes</th>
    <th>Side of Transaction</th>
    <th>Soulbound Tokens (SBT)</th>
    <th>Verifiable Credentials (VC)</th>
  </tr>
  <tr>
    <td>No consent. Publicly viewable. Indexable.</td>
    <td>Sender</td>
    <td>I issue an SBT to another wallet.</td>
    <td>I issue a VC to a wallet.</td>
  </tr>
  <tr>
    <td>Consent. Publicly Viewable. Indexable. Legitimate rights.</td>
    <td>Receiver</td>
    <td>I sign a transaction approving an SBT that I am eligible to claim.</td>
    <td>I sign a VC that was issued to my wallet.</td>
  </tr>
</table>
<figcaption class="text-center"><b>Table 1.</b> Shows why the "scarlet letters" are, in practice, the same for both SBTs and VCs.</figcaption>
</figure>
</div>

In the VC specification, section [7.3 comments specifically on identifier-based correlation](https://www.w3.org/TR/vc-data-model/#personally-identifiable-information), which is a possible solution to solving the issue of scarlet letters by not being able to correlate identities with one another. The specification reads that "disclosing the credential identifier (credential.id) leads to situations where multiple verifiers, or an issuer and a verifier, can collude to correlate the holder. If holders want to reduce correlation, they should use VC schemes that allow hiding the identifier during verifiable presentation". Possibly, Tyiska used his DID only once. Nevertheless, it does not solve the problem that I was able to issue a public claim about a specific individual DID. If the DID were offline or secret, I would not have been able to issue this VC. In theory, with an off-chain solution Mike should also be able to delete the data from his stream or could encrypt all of it. This however, does not solve the scarlet letter problem and makes it very taxing for Mike to continue to monitor what data is sent to his stream or not. And as shown in the implementation example above, is not the case today.

This also shows a potential deviation from the specification. Again, I want to reiterate that DID v1.0 is the *only* standardized specification of all this work. The DID methods and implementations of VCs are a no man's land, as shown partly in this example. The W3C director claimed, "The DID core specification as it is now does not lack proofs of implementability", which may be true for DID v1.0. However, it remains clear that the translation from specification to scalable adoption for DID methods and VCs still needs to improve.  Currently, unsigned online VCs are conceptually equivalent to indexable SBTs whose subjects haven't countersigned them. The lack of a single "silver bullet" solution means we should keep an open mind and continue experimentation across different methodologies.  

## Composability with Blockchain Code

The other problem with VCs and DIDs in the current web3 context is their lack of composability with blockchain-based applications via smart contracts. A high potential for blockchain composability is vital for innovation around blockchain-based communities like [DAOs](https://ethereum.org/en/dao/), which primarily govern blockchain-based assets.

Native composability of identities with blockchain code enables:

- **Correct execution** of code with identity inputs
- **Censorship-resistant** identity rights and responsibilities
- **Private** participation of identities in applications
- **Coercion-resistant** participation of identities in applications[^1]

**To illustrate this:** Imagine a community that operates an election through an __Ethereum Virtual Machine__ (EVM). Suppose the community members need a specific membership certificate to participate in the election. Moreover, the election recognizes specific additional community memberships of the participants to gradually increase the votes for candidates that receive votes from participants with distinct sets of community memberships.

Given that we store the membership certificates in an EVM compatible system (making it accessible at runtime), the EVM can execute the election function based on the membership certificates and vote inputs as programmed. Assuming the current distribution of membership certificates conforms to the state of this EVM — any voter authorized by the certificate can participate in the election.

Conversely, participants cannot hide membership certificates from the election function if these are __bound__ to their identity in the EVM. In doing so, voters can __utilize zero-knowledge proofs__ to prove what membership certificates they have without revealing their account address. Additionally, combinations of __community recovery mechanisms__ and __minimum anti-collusion infrastructure__ can make it nearly impossible for voters to prove their votes to somebody.

In contrast to the vast opportunity space for social innovation through blockchain-native technologies in blockchain protocols, off-chain identity solutions have an inherent ceiling. On the one hand, [popular DID methods in web3 protocols](https://github.com/w3c-ccg/did-pkh/blob/main/did-pkh-method-draft.md) are compatible with most blockchain addresses. Yet, on the other hand, the [widely-adopted applications](https://www.disco.xyz/) utilizing DIDs in web3 protocols store identity data off-chain (for example on the [Ceramic Network](https://ceramic.network/)). So any EVM-native (or blockchain-native) application would need to rely on [oracles](https://ethereum.org/en/developers/docs/oracles/) to take the identities of legitimate community members as inputs.

Consider the election example again; however, imagine the membership certificates are stored off-chain via DIDs and VCs.  Operating the oracle makes the election more expensive. Community administrators and voters heavily rely on the oracle to correctly execute the election function and recognize the complete set of legitimate identities. Privacy and coercion-resistance towards the oracle entity seem tricky-to-achieve, if not impossible. Unless maybe the voters submitted their identities and votes in an offline, in-person process as conducted in many national democracies [that may demand ten-figure operative budgets](https://electionlab.mit.edu/research/cost-of-conducting-elections).

There is [some work in progress](https://arxiv.org/ftp/arxiv/papers/2207/2207.04459.pdf) to explore the integration of VCs and blockchain code, yet still no product work to show for it. In the foreseeable future, one way to cope with these limitations of off-chain DIDs and VCs might be to make every participant's votes and identity publicly viewable on a blockchain. So anybody could challenge the election results (and oracle operator) if they don't execute the election as pre-determined. In other words, anybody could at least verify the correct election outcome, given the publicly-available inputs. While, of course, this process would come with inherent privacy and coercion-resistance disadvantages and only informally (by way of disputes) assure correct execution and censorship-resistance.

Since DIDs can not be appropriately interoperate with a single blockchain app,  this is equivalent to not being interoperable with any large blockchain platform. Despite this, it is a common argument from advocates of this substrate to comment on the portability and abstraction that DIDs have compared to SBTs.

I want to preface that I believe a lot of the work in progress with DIDs and VCs is valuable. However, I do not think we should be naive and make recommendations to adopt these standards in their current form. The [first draft of DID v1.0](https://www.w3.org/2019/did-https://www.w3.org/2019/did-wg/PublStatuswg/PublStatus) is from 2019. It still has much maturing to do before we can claim it is the identity solution to work across all networks.

Many other challenges with recoverability, indexing, and the developer community's maturity make it hard to work with DIDs and VCs in the blockchain ecosystem. Nonetheless, there are many applications where this work may be practical. Still, it remains unclear if web3 can benefit from it more than from blockchain-native identity (ie., SBTs). And if we do want to adapt DIDs to web3 native applications specifically, we must highlight the limitations. Otherwise, the web3 adventure might turn out far less interesting and unique than it could.

Let's revisit the analogy from the family vacation. Web3 today is like a couple that has the freedom to explore its new favorite spots on holiday. With [soulbound tokens](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763), web3 communities may be able to find identity solutions for correct execution, censorship-resistance, privacy, and coercion-resistance of their social applications. These blockchain native solutions will also enable privacy, smart contract composability, and abstract to EVM compatible chains. So to say, this may not be the direction web3 will take for vacation in the indefinite future. We also don't know if family and friends from all walks of life (e.g., the various governments, firms, and nonprofits of this world) would be down to join these vacations. Instead, it primarily enables web3 to explore higher identity innovation ceilings that other identity drafts like DIDs could hit.

## Identity & Smart Contract Composability Today

I am going to walk through a case study of the options for identity substrates today.

Consider a DAO that we created for the alumni of the University of Washington. The DAO's goal is to aggregate funds from alumni and invest them into alumni causes. This DAO requires you to prove that you are an alumnus of the University of Washington. You, therefore, need some way of showing the smart contract that you are an alumnus. How can we do this?

1. Put this data into an ERC-721 token issued by the University of Washington. This solution is suboptimal as it does not preserve any privacy,  is costly at scale, and the permit would be transferable to others at a low cost.

2. Call the smart contract with (if on Ethereum) the [EIP-712 method](https://eips.ethereum.org/EIPS/eip-712) – this lets you put a JSON-LD-based credential as the payload into the blockchain code call. Gas concerns aside, this would work if Ethereum did not emit these logs. For anyone that can run an [archive node on Ethereum](https://etherscan.io/chartsync/chainarchive), could rerun the chain and see what the payload was for all time. This is also suboptimal as it does not preserve privacy.

3. You could (as mentioned in the [DeSoc](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763) paper) have a pointer to a VC that sits off-chain from an on-chain ERC721/ERC1155 token – this is useful for controlling and interacting with a front-end. Still, the blockchain apps themselves cannot read the data that sits off-chain.

4. You could prove to a front-end (whoever controls the smart contract) that you have a VC (some selective disclosure mechanism). This front-end has the keys to write to the smart contract and put you on an "allow-list." This method would avoid putting  PII on-chain but contextually leaks privacy since you have met some conditions to put you on the allow list.

5. Once it matures, you could use a version of our [zero-knowledge soulbound token](https://github.com/enricobottazzi/ZK-SBT) implementation that Enrico Bottazzi and I recently released in open-source. This mechanism is not mature, not very scalable, and has many computational limits with most browsers today.

Yes, standards can be useful, but as you can see through this article, we should aim for innovation that does not conform to standards that are dependent on becoming standardized later.  It's a process, not an endpoint, and it just so happens that DIDs/VCs along with soulbound tokens can be useful at different points along this. Let's hope that web3 can harness its capital and momentum to continue innovating with an open mind to build identity primitives for more coherent and sustainable social cooperation.

<div class="html">
<figure>
<img class="w-full max-w-2xl" src="/images/blog/mapping-current-id-solutions.png" alt="Where current identity solutions sit in the composability and abstraction tradeoff matrix"/>
<figcaption class="text-center"><b>Image 6.</b> This shows where current identity solutions sit in this matrix.</figcaption>
</figure>
</div>

## Moving Forward

If you are a founder, an executive at a large organization, or working in government, by now you already know that with most software based technologies, you can only bet on 5-year time horizons. If you are going to make a 5-year bet on where identity solutions are heading in the web3 ecosystem, it is highly probable that this will continue to be on EVM-native solutions because Ethereum is the most prominent blockchain out there.  It has the most active developer ecosystem, mature tools available for builders, technical foundations have been proven in the wild since 2015, and the culture is focused on utility.

As a supporter of the RadicalxChange and Plurality paradigm you may know that technology and networks evolve. And we need to keep them in sync to increase the quality of human life.

It is inadvisable to commit your organization to any particular technology substrate, but to rather focus on integrating  plural solutions from different camps of thought. We need to be cautious with the pace that we adopt standards. For any technical innovation, specifically, when applied in more complex networks like large-scale political economies, there is a lot of friction to revert.

*This piece owes its existence to many amazing conversations with amazing people. I will name only a few: [Puja Ohlhaver](https://twitter.com/pujaohlhaver), [Vitalik Buterin](https://twitter.com/VitalikButerin), Leon Erichschen, [Yorke Rhodes](https://twitter.com/yorkerhodes), [Enrico Bottazzi](https://twitter.com/backaes), [JB Rubinovitz](https://twitter.com/rubinovitz), [Josh Sperling](https://twitter.com/selfsovrin), [Michael Mignano](https://twitter.com/mignano), [Paula Berman](https://twitter.com/_paulaberman), and [Matthew Prewitt](https://twitter.com/m_t_prewitt).*

**Notes**

[^1]: In Vitalik Buterin's (2021) blog post, you can learn more about these concepts applied to the blockchain voting context: "__Blockchain voting is overrated among uninformed people but underrated among informed people__."
