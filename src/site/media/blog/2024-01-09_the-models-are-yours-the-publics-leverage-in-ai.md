---
layout: "layouts/blog-post.njk"
date: "2024-01-08"
title: "The Models Are Yours: The Public's Leverage in AI"
postHeader: "The Models Are Yours: The Public's Leverage in AI"
postAuthor: "Matt Prewitt"
---

![Starry Night Pastiche, created by Danny Adam with pastiche python program, https://www.dannyadam.com/blog/2019/06/pastiche/. CC BY-SA 4.0.](/images/blog/pastiche-van-gogh.jpeg)

On December 27, the New York Times [filed](https://www.nytimes.com/2023/12/27/business/media/new-york-times-open-ai-microsoft-lawsuit.html) a [lawsuit](https://nytco-assets.nytimes.com/2023/12/NYT_Complaint_Dec2023.pdf), claiming that Microsoft and OpenAI infringed the Times’ copyrights by using its writings to train GPT-4 and other AI models. It follows a series of [similar lawsuits](https://crsreports.congress.gov/product/pdf/LSB/LSB10922) from the Authors Guild, writers Michael Chabon and Sarah Silverman, and more.

These cases are asking one monumental question: whether training an AI model on copyrighted material violates the copyright. If copyrights are infringed by training models on them, then everyone with a digital footprint has probably already had their rights violated, and will enjoy significant leverage over the future of this transformative technology.

## What's at stake in the new copyright battles

It is a starkly binary legal question: yes or no. Training AI models on copyrighted material either infringes the copyright or doesn’t. And the two possible outcomes point toward very different future worlds.

What would it mean if the AI companies’ lawyers prevail, and courts find that AI models may freely ingest copyright-protected material? Having been trained on authors’ work, AI models will sooner or later be able to do almost exactly what all those authors do, and more, millions of times faster. So AI models’ owners, and not authors, will own most of the fruits of creative labor. 

At that point things could get very weird. Disenfranchised authors might start sharing their work only in the shadows by forbidding recordings, banning reviews, and so on. Luddite subcultures might form around efforts to keep creative work off the record and out of the systems.

On the other hand, suppose that courts find that the AI companies have violated authors’ rights. Their potential liability, civil and possibly even criminal, could be as unprecedented as the technology itself. This is because copyright provides for steep statutory damages: a minimum of $750 damages *per copyright violation*.[^1] Given the unimaginable reams of copyrighted works that have presumably already been incorporated into systems like GPT-4 and Claude, you don’t even need to do the math. AI companies, even gigantic ones, could be bankrupted by the damages they owe to—well, all of us.

Of course, destroying the companies is not what most stakeholders want. But the public and the government should appreciate just how much leverage they might have to achieve public-interested outcomes, like a grand settlement resulting in some kind of public governance rights or equity stake.

Leaving aside what companies might already owe, if copyrights are infringed by AI training, the future simply looks different. Content creators, including ordinary people producing copyrightable digital footprints (students, employees, social media users, etc.), could have huge leverage over the future of the technology. If they organize and bargain collectively (instead of getting “picked off” by individual agreements) they will hold the strings to datasets that are necessary ingredients to the world’s most powerful AIs. The public will have a seat at the table.

Europe has already given us one sketchy glimpse of what that might look like. Drafts of the EU’s AI Act, now jeopardized by stalled negotiations, have suggested [the bloc may give copyright holders the ability to programmatically “opt-out” of their works’ use in AI training](https://copyrightblog.kluweriplaw.com/2023/11/23/generative-ai-and-copyright-convergence-of-opt-outs/). The artists Holly Herndon and Mat Dryhurst have already set up an [organization](https://spawning.ai/) through which many artists have done just that. It could be a sign of things to come and the EU’s regulations are an important factor in this conversation. 

Another possibility must be noted. If it becomes clear that AI cannot be lawfully trained on all publicly available information, it could create an opening for actors beyond the reach of the law. Given the possible military applications of the technology, state actors will not want that to happen. This would nudge the state security apparatus even further into the AI business.

## Why training on copyrighted material is infringement: it's like player pianos

![Music Dream, by Bill Smith. https://www.flickr.com/photos/10688882@N00/46675631884. CC BY 2.0.](/images/blog/player-piano-dream.jpeg)

With all those considerations lurking, how will courts resolve the key question?[^2] Namely: under US law, does training AI on copyrighted materials constitute infringement, or is it fair use? 

Courts look at four factors to determine whether a use of copyrighted material is excused as “fair use”. They are:

1. the purpose and character of the use, including whether such use is of a commercial nature or is for nonprofit educational purposes; 

2. the nature of the copyrighted work, that is, whether it is more “expressive” or factual in nature; 

3. the amount and substantiality of the portion used in relation to the copyrighted work as a whole; and 

4. the effect of the use upon the potential market for or value of the copyrighted work.

First, some relevant facts. Large Language Models (the technology which underpin the commercially available generative AI products), can be thought of as a type of data compression (researchers have even experimentally shown than LLMs can simply serve as compression audio files, much like MP3s).[^3] When a model trains on a copyrighted text, it stores information about the text in the form of statistical weights relating “tokens” (words, letters, or phrases) to one another. These weights embody information about the statistical relationships between those tokens in the text. This information takes the form of numbers representing the probability that, say, word C will appear after word B if word B is preceded by word A. This data is not stored in silos corresponding to particular texts; instead the model as a whole simply uses the information from each text to modify the information culled from all the other texts it trained on. Humans cannot directly make sense of this statistical data, but they can, with a little effort, use it to reconstruct something very close to the original. The providers of these models install secondary safeguards designed to make this kind of exact reconstruction more difficult; but the fundamental capacity to perform such reconstructions is latent in the technology.

A trained model thus contains information amounting to a “lossy” compression of all of the copyrighted input. This is significant because other forms of “lossy” information compression are clearly copies. For example, an MP3 file compresses the information in a master tape, discarding much of the original recording data. And a human cannot read the binary code of an MP3 file and recognize it as a song. But MP3s are obviously not “fair uses” of recordings. The compressed file can be decompressed, or played back, in a form that sounds similar to the master tapes, a fact sufficient to prove that MP3s are copies.

Returning to the fair use factors now. The third factor, "substantiality", clearly weighs against the AI companies because whole unaltered texts are fed into the models. The second factor, "expressivity",  does too, since all sorts of works are used in training, including paradigmatically expressive ones.

The fourth factor looks scarcely better for the AI companies. Their models have obvious potential to harm the market for original works. Users can consult models trained on an authors’ work to obtain not only information about those works’ contents, but also a rich experience of their style and character. In many cases, consulting a model might be more efficient and satisfying than consuming the source material myself. This can and does constitute a reason not to buy the book, or subscribe to the magazine, or (soon) watch the movie: core expressive aspects of works can be substantially appreciated through the models alone. Search engines headed off a similar copyright issue when publishing excerpts of news articles, by saying the search engine was driving traffic and revenue to the original authors. But in the case of generative AI, the competitiveness with the original is clearer, and it would be surprising if any court were persuaded that the authors’ works were not being in some important sense superseded.

Now to the first and most important factor. Obviously the uses of models are commercial; but are they [transformative](https://en.wikipedia.org/wiki/Transformative_use) in character? This is the argument AI companies will likely end up relying upon.

On the surface, AI models may seem to have transformed expressive training material into bleep-bloop numerical arrays inside an AI model. But these numerical arrays are compressed copies of original works, capable of being transformed right back into works of a near-identical character, just as MP3s are copies of master tapes. 

Courts should not be confused by the fact that AI companies package their models with secondary safeguards designed to frustrate exact reconstructions of the source material. The outputs in the chatbox are pastiches, usually “transformative” ones, *but those pastiches are not the relevant “copies”*. The “copies” are the models themselves: the extraordinarily powerful pastiche-generators capable of rendering outputs that supersede their source material, whose power depends on containing compressed copies of that source material.

New information compression technologies have always affected the nature of whatever they compress. For example, when music recording was invented, music itself changed. In the early 1900s, player piano rolls and phonograph recordings were not legally recognized as unlawful “copies” of protected musical writings. A composer’s work consisted only of musical notation and lyrics; only the sheet music was subject to rights related to reproduction. The Supreme Court affirmed as much in the 1908 case of [White-Smith Music Publishing Co. vs. Apollo Co](https://en.wikipedia.org/wiki/White-Smith_Music_Publishing_Co._v._Apollo_Co.). But even at the time, that didn’t make sense: the case is widely remembered as a judicial misfire. And the copyright law’s period of adjustment to new technology was mercifully brief. Recognizing that piano rolls and audio recording had changed the nature of musical expression, Congress responded, passing the Copyright Act of 1909, which gave musical authors rights in recordings, so-called *mechanical rights*.

Generative AI is actually very much like player pianos—even down to the eerie, mistaken attribution of disembodied agency. Just as in 1908 recordings were emerging as the predominant artifacts of musical production, generative AI outputs are now emerging as the definitive artifacts of all recorded human expression. This shift will intensify rapidly.

Is our legal and political system still capable of rapidly responding with laws that guarantee authors (even nonprofessional ones) a seat at the table?

## A New Strategy—A New Copyright Law

As I said, the courts will find either that AI training violates copyrights, or that it doesn’t. Either way, a radically new copyright doctrine will need to be worked out legislatively. But it would be an auspicious start for courts to find against the AI companies now—first, because this is the best interpretation of the current law, and second, because it will rightfully strengthen authors’ bargaining position in any subsequent political settlement.

Across society, we should be organizing to meet the moment and guide our politicians. The tech companies’ lawyers certainly are; the rest of us can’t afford to be years behind them. How should we organize?

First, coalition-building. SAG-AFTRA and the Writers’ Guild have brought this issue to national attention; they should not be fighting alone. Where are the school systems, the universities, the religious organizations, the podcasters, the political movements, and others who have great influence and stake in important and protected data? They should be joining forces, collaborating with [Spawning](https://spawning.ai/) and others. This isn’t a partisan cause, and it isn’t anti-AI; it’s a simple matter of public empowerment.

Second, lawyers, academics, and technologists need to come together to debate and draft the legal resettlement we need. What are the deep principles and common values that we want intellectual property law to protect? Have we, perhaps, been underestimating the diffuse social contributions to “individual” intellectual work for some time; and can we devise a sensible way for the law to now correct this error? Can automatically-created [mechanical licenses](https://en.wikipedia.org/wiki/Mechanical_license) to musical recordings serve as a template for a new regime that gives everyone a stake in the AI models based upon their work?

The tech lobbyists will surely hand finished text to our representatives. Where is the countervailing proposal?

*Special thanks to Lucas Geiger for helpful comments and edits*

**Notes**

[^1]: Maximum per-violation damages are capped at $30,000, or $150,000 if the infringement was willful. The latter is not out of the question. Willful violations need not be “knowing”, they can be merely “reckless”. And the AI companies have taken many actions indicating that they knew they might be violating copyrights, such as falsely claiming that they did not train on copyrighted material. This is evidence of recklessness.

[^2]: There have been some [early setbacks](https://www.reuters.com/legal/litigation/us-judge-trims-ai-copyright-lawsuit-against-meta-2023-11-09/) for plaintiffs in these lawsuits, but these are mostly procedural; it is much too early to say that the AI companies will defeat the claims I am focusing on here. 

[^3]: Language Modeling Is Compression, https://huggingface.co/papers/2309.10668