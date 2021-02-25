---
layout: "layouts/blog-post.njk"
date: "2019-06-07T12:00:42"
title: "Motivating The Case for Decentralized Social Identity: Part Two"
slug: "2019-06-07-motivating-the-case-for-decentralized-social-identity-part-2"
postHeader: "Motivating The Case for Decentralized Social Identity: Part Two"
postAuthor: "E. Glen Weyl, Lucas Geiger, Kaliya Young (Identity Woman)"
series:
  - RxC Fundamentals
---

_This is part two of a three part series by RadicalxChange and Wireline on decentralized social identity. [Part One](/kiosk/blog/2019-06-06-d4utdx/) laid out the requirements, Part Two will discuss its applicability, and [Part Three](/kiosk/blog/2019-06-08-51kyu5/) will discuss its transformative potential._

## Emerging Architectures

This year we are seeing the first implementations of protocols that can provide truly user-centric identity.

One example is Self-Sovereign identity (SSI) a technical architecture where identifiers (e.g. a number Alice generates that is totally unique for that interaction), verifiable credential issuance (e.g. “is a Github user”), and verification of those credentials (e.g. confirmed she’s a Github user), can be created and used without an Identity provider that is “in the loop” on transactions related to the credential.

The salient features of this architecture are:

1. The user’s relation to issuers is primary. There is no intermediary between an application’s permissions it has granted you. There is no possible surveillance by an IdP.

2. Anyone or any institution can be an issuer. Your mom can issue a credential about you, and application can give you permission based on that credential.

3. Your identifiers cannot be revoked, through censure, accident, or bankruptcy of the provider.

4. The user is a peer with every credential issuer and credential verifier, thus not bound to the namespace, or otherwise subsumed by a small set of IdPs.

5. Your profile is under your control, private if you so choose, and complete. Credentials are constructed via the collective of issuers in your social graph (people or institutions).

6. Producing credentials is a low barrier to entry, a social group can produce their own credentials. Whereas perhaps 90% of online identities are managed by roughly 100 IdPs, it may be possible to have a proliferation of credential issuers without reduction in user experience.

Some of the emerging decentralized identity protocols show promise in addressing Kim Cameron’s laws. In the case of the IdPs being a necessary intermediary in single sign-on use-cases, will no longer be technologically justifiable given [W3C Verified Credentials](https://www.w3.org/TR/verifiable-claims-data-model/), pairwise connections between people, and proposals in social identity, which we’ll discuss in an upcoming article. Similarly these open standards will allow for a pluralism of operators, and portability of the identity. Finally by authorizing personal data hubs (and other similar technologies such as the Aries Agent) the control of data production and data processing, comes fully under the user’s control without opportunity for misappropriation or change in context.

It remains an open question, however, whether social identity is an allied modification of the SSI framework or is better thought of as an alternative approach. Social identity shares the hostility to highly centralized architectures in which a small number of issuers are responsible for most valued claims. It also shares the emphasis on flexibility and disaggregation of claims. On the other hand, some aspects of the social perspective are at least partly in tension with the emphasis in some parts of the SSI community on the independence and complete user control over identifying information.

A distinction needs to be made between self-sovereign identity technologies (which mean non-bureaucratic identity management through DID and Verified Credentials), and the personal data ownership movement. “Sovereignty” is a loaded word to many. Specifically in SSI it refers to sovereignty of identifiers (only) by the individual away from the namespace of the IdPs or the phone company. This is distinct from extreme advocates of proprietary control over data, such as the [Urbit](https://urbit.org/) architecture, imagine each datum as “belonging” to a single individual, as a piece of private property. Such a vision contradicts the fundamentally social nature of identifying data and claims. No datum “owned” by a single individual is meaningful or valuable, as no one is able to attest to it; there is no such thing as a purely private truth. Almost all identifying data reveal information about others as well; revealing your genetic information, for example, also reveals much about your family members’ genetic information. It is thus not clear that the typical SSI focus on total control by a single individual over each identifier or claim is aligned with the social perspective.

Of course, such tensions are unlikely to manifest themselves as literal inconsistencies, as most good SSI frameworks are sufficiently flexible to allow social interrelations to be built into the claims management framework. However, philosophically different readers will likely differ in how consistent or natural they find it to build social identity systems on top of an SSI framework versus starting from scratch using a data architecture more geared to acknowledging the fundamentally social nature of identifying data and validating claims about it.

## Applicability

Many of the proposed designs of decentralized identity services are palliative, trying to reverse the issues of the internet never having had a native identity protocol. However there are numerous greenfield practical opportunities that are being explored by companies in the P2P application spaces and blockchain.

- Emergent Social Spaces

Since our identity is constructed socially, we have many implicit memberships that aren’t manifest in usable platforms. In fact, in the often straightforward case of a professional association one needs to elect a maintainer of a registry, whether by paper, by website, or Facebook. However this gatekeeper is not necessary in the emergent identity protocols, where no central registry is necessary to access a user’s claims, or in this case professional credentials. The credentials can reside on the user’s devices, or as we describe in the users social network. Social identity takes this a step further where there need not be a producer of the claims; the claims production can happen via the social network — another step towards decentralized identity.

Having the credentials reside away from a credentials authority opens up the design space. We can imagine new credentials that we didn’t imagine or think possible. In the past it was costly to issue credentials and maintain the registries and thus were basically only issued by formal authority (e.g. professional associations). With these emerging architectures we can imagine more networked, decentralized “organizations” also having the capability to issue Verifiable Credentials (an open standard) and could see more emergent fluidly created types of credentials.

A more tangible opportunity is that having your social claims custodied away from a central authority creates a platformless social space. That is, by the simple fact of carrying these private credentials, I can allow other people with the same credentials to contact me, without previously needing to accept them to my social network. Such thinking was pioneered by the Augmented Social Network whitepaper from 2003, predating Facebook (http://asn.planetwork.net/). If technologies such as Verified Credentials are adopted by messaging apps, all the messages within could be mediated by the credentials, and not by a social media platform. As a user I could set on my device the types of credentials needed to message me. In fact at the May 2019 Internet Identity Workshop the earliest prototype of this was demonstrated with credentials issued to IIW attendees (see http://iiw.vonx.io) who could message each other. In the scenario above user gain have the power of free association, coupled with strong guarantees that the people contacting me are part of my “tribe”. This is not of course without risks to the individual. And also has implications for freedom of speech, in that we may inadvertently move all discourse to private and mediated spaces.

- Abundance of Privacy

The guarantees around identity described above are non-negotiable starting points for privacy preserving applications. And through the recent work of p2p and blockchain projects, we see glimpses of business models where abundance of privacy can be coupled with abundance of utility. These cases are still speculative given that infrastructure for private applications is very much in its infancy, but we can imagine near term scenarios in software economics, finance, and what we call private matching markets.

Today the security policies of applications are governed by the platform owner, because they are treated as fiduciaries of users’ data, despite the obvious room for conflicts of interest. In cases of decentralized applications, with decentralized identity, the security profile could allow software to be infinitely extensible, blurring the line between platform and plugin. The vendor of the document editor need only provide the text input, and what would ordinarily be core feature (spellcheck, formatting), may be a component written by a third party. This is a different model than traditional platform economics, possibly broadening the participation of developers in the development and rent from the products.

In banking, the role of the banker is often to provide confidentiality and assurances, something that private transactions through zero-knowledge proof may be able to replicate. For example, a loan syndicate needs guarantees that there are enough members in a syndicate to fill the loan, but shouldn’t actually know who they are to prevent collusion and creation of competing syndicates. If this were achievable programmatically, it may increase the amount of credit, speed of transaction, and possibly liquidity of the underlying note.

More speculatively, new types of markets might be possible for products that do not lend themselves well to advertisement, which may also be inherently confidential. Matching markets is a venue where unlike two parties supplying and demanding a product, those parties are trying to get paired together. Nobel prize winner Al Roth who first formalized these markets, described the case of students bidding on their top picks for schools, and schools bidding on students as a canonical example.
If we add fully private revealing of preferences and private matching, it may be possible for users and businesses to be better paired with financial, medical, educational products. These markets necessarily need an abundance of privacy to ensure participation. And it could likely lead to an abundance of commerce, this application alone would be of internet-scale if we assume that what businesses aim to accomplish on the internet finding the perfect match with a customer, and vice versa.

_[Part Three](/kiosk/blog/2019-06-08-51kyu5/) of this series discusses decentralized social identity and its transformative potential._
