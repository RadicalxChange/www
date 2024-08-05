---
layout: "layouts/blog-post.njk"
date: "2024-08-02"
title: "Edges: a Plural Money Experiment"
postHeader: "Edges: a Plural Money Experiment"
postAuthor: "Alex Randaccio"
---

![Interoperable currencies](/images/blog/circles-black.png)

## Introduction

In June 2024, RadicalxChange facilitated a community currency experiment at [Edge Esmeralda](https://www.edgeesmeralda.com/), a “pop-up village” organized by [Edge City](https://www.edgecity.live/) in Healdsburg, California. Over the month of June, Edge Esmeralda would gather up to a thousand temporary residents who were aiming “to live in a healthy and productive community focused on incubating novel technologies and ways of living.” The atmosphere of innovation and experimentation and the month-long runtime made Edge Esmeralda the perfect place to test out the community currency design Matt Prewitt had [outlined](/media/blog/plural-money-a-new-currency-design/) in earlier [blog posts](/media/blog/lets-use-new-forms-of-money-to-commit-to-our-communities/). We hoped that the currency (which we called “∈dges”) would facilitate collaboration at Edge Esmeralda, and that in the process, we could contribute some experiential learnings to the field of community currencies.

By the end of the month, nearly one hundred EE residents were holding ∈dges and using our streamlined, [off-chain ledger app](https://github.com/RadicalxChange/plural-money) to make payments for a wide variety of goods and services. In this blog post, we will share some of the ideas that underpinned the project, summarize the socio-technical implementation of the currency, and report some of our observations and learnings from the experience at Edge Esmeralda.

## Background

In contexts where currency is not widely used, individuals tend to draw from networks of social credit to meet their needs. If you need help with gardening, you might think about who you know who is an experienced gardener. If you need to borrow a hammer, you might think about who you know who has one. Of course, if you know someone who has a hammer, but you suspect they’d rather hit you with it than let you borrow it, then you might be out of luck. In other words, your access to the resources in the network depends on an ephemeral form of credit, something like trust or goodwill. This condition of interdependence incentivizes pro-social behavior; it encourages individuals to identify as a group and collaborate.

This kind of mutual aid system has certain advantages on a small scale. In order to meet their needs, individuals need to interact with the other members of their community regularly. They need to offer things to each other to maintain access to social credit. They need to maintain a networked map of resources and needs, so that they know who has what and who needs what. As a result of this gossip-like propagation of data, mutual aid networks are capable of leveraging highly detailed, localized information to allocate given resources within a small-scale community with a special kind of efficiency, and very little waste. Of course, small-scale communities are limited in what they can produce, and their networks of trust are not able to scale along with the population, causing these efficiency gains to drop off as they grow. One function of large-scale currencies such as the US dollar is to solve this problem and enable individuals to participate in large-scale markets with confidence.

A downside of large-scale currencies is that they short-circuit the cognitive process of economic agents, skipping over the question of “who do I know in my community who both *can* help me, and will be *willing* to help me because I have built social credit with them” and proceeding straight to the question of “who in the global market can fill this need most efficiently at the lowest cost in dollars.” As a result, social credit networks become more anemic, focusing mainly on the provision of resources that are difficult or impossible to monetize, such as care. When we have thinner social credit networks, our social lives suffer, and our local economies suffer too. As we become more dependent on the global economy to meet our needs, global markets exert greater power over the shape of our lives and our neighborhoods. Economies of scale naturally outcompete local businesses, and we begin to identify more strongly with large-scale consumer groups than with our local communities.

Tight-knit communities with robust networks of social credit can still develop in the context of a global market, but any value they create is extremely vulnerable to erosion and capture by external market actors. This is because universal money makes it possible for individual members of the community to unilaterally “sell out” or exit. Given that any value created by the community which is privately held, such as real estate equity, can be sold to external buyers, individual members of the community have an incentive to build up their stake in the community and liquidate it for personal gain, thus dissolving a piece of the community itself.

**Enter ∈dges**

The ∈dges experiment was based on a community currency model designed to mitigate this problem by instituting a tax on exit. If a member of the community wanted to give ∈dges to someone outside the community in exchange for a personal good or service (effectively removing value from the community), they would have to pay a tax to the community. In other words, the currency carried an incentive to keep value circulating internally. 

Given the constraints imposed by the exit tax, asking for compensation for goods and services in ∈dges represents a material commitment to serving the community and preserving the health of the local economy. This makes the ∈dges currency operate more like a social credit system—in order to build up the credit needed to access resources within the community, one would have to make oneself useful to the community. It makes something like a social credit system interoperable with universal currency, allowing communities to participate in global markets without being subsumed by them.

## Implementation

**Onboarding**

The success of any community depends on the mindset of its members. Collaboration can create a lot of value, but it requires buy-in from individuals. Are people participating in good faith? Do they believe that if the group succeeds, they have a real opportunity to share in that success? If so, they are less likely to try to game the system and more likely to assume the risks inherent in collaboration—and enjoy the resulting rewards.

In a natural community such as a neighborhood, residents probably already have informal networks of trust and aligned interests. At Edge Esmeralda, we needed to create a sense of buy-in and collaboration amongst a group of people who might have never met and are only coming together for a month. So, we devised a sort of onboarding ritual that would cultivate a feeling of shared stake and mutual vulnerability. We hoped this mutual vulnerability and shared stake would turn this previously unaquainted group into a kind of natural polity with a shared interest in ensuring good-faith participation and collaborating on making the experiment worth the price of admission.

We brought envelopes, pens, and a red box, about the size of a toaster oven, to our meetings. We asked new members to write their name and the email associated with their Edge Esmeralda ticket (provided by Zupass and powered by zero-knowledge proofs) on the outside of an envelope, place twenty dollars inside, and drop the envelope into the “community box”. We told members that any one of them was allowed to withdraw up to five times what they put in (that is a max withdrawal of $100) from the community box—but that it was strongly discouraged, and would result in expulsion from the community. In other words, we deliberately created a not-entirely-symbolic condition of mutual vulnerability in order to get people in the right mindset. Could you act in pure self-interest and take $100 from the group? Sure, but everyone will know you did it, and they won’t be amused.

**Driving adoption**

We (Matt and Alex of RadicalxChange) were both at Edge Esmeralda in person for the first week. The first goal for that week was to get an initial group of people excited about the experiment. This group would be our early adopters and evangelists who would help us create demand for ∈dges. We were scheduled to hold our first session on Monday, June 3.

At the first session, we gave a presentation on the project, had a discussion with the session attendees, and onboarded about 20 people. Between the first session on Monday and the second session on Wednesday, there were 25 transactions. As community members tested out what they could use ∈dges for, these 25 transactions were mostly payments sent in appreciation for social interactions (e.g. dinner conversations, knowledge sharing) and contributions to the ∈dges project itself (e.g. bug reporting, infrastructure development, governance ideas), with a few others (e.g. giving someone a ride).

At the second session on Wednesday, we repeated the presentation for a new group of people, and onboarded another 9. After the session, we continued our discussion with a group of community members over dinner nearby. At dinner, it became clear that we had already achieved our first goal for the week: we had piqued the interest of a core group of participants who deeply understood the project’s goals. By the time we parted ways at the end of the evening, this group had made considerable progress in fleshing out the overarching project strategy, as well as community governance and web app design.

Here are a few key ideas that originated in that impromptu dinner meeting:

- “Our primary goal is to generate excitement about the experiment.”

  - This led to a proposal to display a “velocity” stat on the participants page of the web app. This stat would keep track of who is circulating the most value in ∈dges.

- “Let’s not worry too much about governance until we have something to govern.”

  - Establishing this as one of the project’s values helped to focus the group’s attention on creating value within the community and driving demand for ∈dges, rather than getting lost in the weeds on governance concerns. As in many social situations, we had to accept some vulnerability in order to create something of value. It would be a waste of time to worry about protecting that value before it even existed.

  - We agreed on a lightweight governance system: anyone could submit a proposal at governance meetings, which would be put to a majority-rules vote by show of hands. The administrators of the project (Matt and Alex) would accept the results of any such votes, but would retain veto power—since this was an experiment, the admins’ ultimate responsibility was to make the experiment successful.

We held two more governance/onboarding meetings that week, on Thursday and Friday. In these meetings, we continued to discuss how to create demand for ∈dges, and considered a number of proposals. These proposals passed unanimously:

- Display a “velocity” stat on the participants page of the web app.

- Add a Listings board to the web app, where community members can post offerings and requests.

- Make anonymized transactions visible to non-members on the web app, to show activity in the market and encourage people to join.

- Integrate ∈dges with the Edge Esmeralda event calendar on the [Social Layer](https://edgeesmeralda.sola.day/).

- Pay out a special distribution of ∈dges from the community bank to each of the event organizers, which they can use to reward people for helping out around Edge Esmeralda.

- Authorize Matt to offer a special distribution of ∈dges to local businesses, which they could use to reward Edge Esmeralda ticket holders for shopping local. In the end, we didn’t have time to pursue this idea.

- Elect a new secretary to take Matt’s place when Matt and Alex leave at the end of week 1.

**Creating demand**

If the first goal of week 1 was to inspire and organize a group of early adopters, the second goal was to create demand for ∈dges. In order to do so, we had to model the behavior we were hoping to see on the platform—we had to offer things to the community in exchange for ∈dges. We considered what resources we had to offer (our Airbnb and rental car) and what skills we brought to the table (software development, cooking, etc), and thought of some ways we could make ourselves useful to the community:

- On Thursday, we threw a dinner party at our Airbnb and charged five ∈dges for entry (tips encouraged). We hosted seven people, serving a 3-course meal with ingredients (and wine) sourced locally from Sonoma County.

- Throughout the week, we offered a taxi service to Edge Esmeralda residents for a price of 1∈ per ride.

- We negotiated a deal for one person to rent our Airbnb as a private workspace, at a rate of 30∈ for 1 day, or 40∈ for 2 days. This deal fell through when the lessee received a better offer!

- Another community member decided to host a meme contest, offering 5∈ as a reward for the winner. We loved the idea, and contributed 5∈ each to increase the pot to 15∈ total.

- When a community member asked to interview us about our work, we good-naturedly asked for a few ∈dges as compensation for our time. The interviewer happily obliged, and we had a great conversation.

The community quickly caught on. By the end of the week, the transaction board was full of activity. People made each other food, gave each other rides, collaborated on presentations and projects, shared ideas, expressed gratitude, incentivized participation in events like open mics and project roadmapping sessions, and more. The biggest transaction in ∈dges came in the last week of Edge Esmeralda, when someone was paid 50∈ for photography services. When the event was over, the organizers of Edge Esmeralda decided to give a discount on tickets to their next event to the top ∈dge holders.

## Analysis

Participants paid $20 to be onboarded and received 100∈ in return, so it would be reasonable to say that the initial value of 1∈ was approximately 20 cents. Of course, as the new market for ∈dges was created and participants speculated about how it might grow, the value of an ∈dge was subject to uncertainty.

About half of the ∈dges transfers completed throughout the month were not really transactions but post-facto expressions of gratitude. It is difficult to estimate the dollar value of an ∈dge using data in this category, but one approach would be to relate these transfers to the cultural practice of buying someone a drink (often beer or coffee) to thank them for something. Transfers in this class were generally between one and five ∈dges, and the mean transfer was 2.2∈. There did not appear to be a statistically significant change in the amount of ∈dges transferred in these cases over the course of the month. On the 20th of June, someone actually exchanged 1∈ for a beer.

The dollar value of these transfers is probably close to that of another common category of ∈dges transfers: tips for software development. This second class of transfer is most similar to the retroactive tipping behavior facilitated by buymeacoffee.com, which is common in the open-source software community. The default, base-level tip on buymeacoffee.com is five dollars, which is comparable to the value of a cup of coffee. The amount of ∈dges transferred in these cases also remained consistent at between one and five throughout the month, and the mean transfer was 3.3∈.

∈dges were also commonly used to pay the hosts and cooks of dinner parties. There were 7 payments of this kind (often split between multiple hosts & cooks), for between 3 and 15 ∈dges total. The average total payment of this kind was 8.8∈. One participant paid another 2 ∈dges for lunch. The dollar value of these payments is difficult to determine, since dinner parties are social events that people do not usually pay for. Perhaps the closest common practice would be the custom of bringing something to contribute to the dinner, such as a bottle of wine or dish of food. The value of such in-kind contributions is usually in the range of $20-$50.

Other transactions have more obvious dollar values. For example, a few participants with access to cars started offering rides in exchange for ∈dges. These transactions can be compared to the going rates on Uber to estimate the dollar value of the ∈dges exchanged. Most of these rides were from one side of Healdsburg to the other, which would have cost about $10 on Uber. Seven rides of this kind were paid for in ∈dges. 1 or 2 ∈dges was paid in each of these cases. Two participants paid for rides from Healdsburg to the San Francisco Airport, which would cost about $100 on Uber. However, it is unclear whether these were rides or carpools—in other words, the driver may or may not have been driving to the airport anyway. One of these airport rides was paid for with 4∈, and the other with 50∈.

The most significant signal that ∈dges had acquired a real dollar value came toward the end of the month, when a participant paid 50∈ for photography services. From thumbtack.com, the going rate for freelance photography services in the Healdsburg area appears to be in the range of $200-$500 per hour.

Of course, by the end of the month-long experiment, the market for ∈dges was still not mature enough for the dollar value of an ∈dge to stabilize. However, the analysis above seems to suggest that the dollar value of an ∈dge was at least $1. Looking at the average amount of ∈dges transferred in each payment category compared to the estimated dollar value of payments in that class, the data seems to indicate that the dollar value of an ∈dge may have been somewhere in the range of $2-$10. As mentioned above, the onboarding fee was $20 for 100∈. If we interpret that as an initial exchange rate of $0.20 per ∈dge, it appears that the value of ∈dges appreciated—which would indicate that ∈dges created new value by means of a network effect.

## Further Development

The results of the Edge Esmeralda ∈dges experiment were encouraging. We are exploring other opportunities to replicate the experiment and build on what we learned. Other pop-up cities could fork the ∈dges web app and implement their own community currency. Participants could be encouraged to onboard in advance of their arrival at the pop-up city. Organizers could offer an incentive to post an offering on the Listings board, to seed a market for community services before anyone even arrives.

Once this market exists, communities can use fiscal policy to encourage certain behaviors. A community may decide to implement demurrage to encourage circulation. It may issue public goods grants to local businesses to incentivize pop-up city residents to integrate with the local community, or to event organizers to encourage volunteers.

Related communities could establish trade agreements, to open up their markets to one another thereby increasing the value of both currencies. For example, [Edge City Lanna](https://www.edgecity.live/lanna) (coming up in Chiang Mai in October) could have its own currency. The Edge City Lanna bank could accept Edge Esmeralda currency in exchange for its own at a rate of 2:1, thus partially honoring the social credit Edge Esmeralda residents may have built up in a separate but adjacent community. Lanna and Esmeralda could also agree to a reduced tax rate for transactions between members of the two communities, to honor the fact that trade between two closely connected networks might not represent exit in the full sense described above.

Perhaps one day, each neighborhood could have its own currency. Devoted community members could transact in the currency and be confident that the value they create will remain in the community. Local businesses might have a better shot at surviving. Community governance could strike the desired balance between external investment and local autonomy, the same way that nation-states do with their trade policy. Community currencies could exist as a network—interoperable and autonomous. Perhaps community currencies could furnish communities with exactly the countervailing power they need to thrive in a global market.

![Interoperable currencies](/images/blog/circles-black.png)