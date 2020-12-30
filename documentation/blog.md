# Blog

This document explains how to publish a blog post.

## Create a blog post file

Make a copy of a previous blog post in _src/site/kiosk/blog_. Rename the copy in the format `YYYY-MM-DD_descriptive-title.md`.

## Edit the blog post metadata

Blog post metadata lives at the top of each blog post between `---` delimeters. This metadata is written in YAML.

```
---
layout: "layouts/blog-post.njk"
date: "2020-04-15"
title: "Between Abundance and Scarcity"
postHeader: "Between Abundance and Scarcity"
postAuthor: "Matt Prewitt"
---
```

Keep the `layout` field as shown above. Edit the following fields for your blog post.

| Field        | Description                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `date`       | YYYY-MM-DD timestamp for your blog post.                                                                                 |
| `title`      | A short name for your blog post. This shows up in the browser tab when people have your blog post open.                  |
| `postHeader` | A long name for your blog post. This shows up in the header of your post. It can be the same as the title if you'd like. |
| `postAuthor` | The author or authors of the post. Our convention is to separate authors by comma without using the word "and".          |

## Draft the blog post

Blog post content is written in [Markdown](https://www.markdownguide.org/cheat-sheet/).

We support:

- Basic syntax (headings, links, lists, images, etc.)

```
## I am a section header

[Click me to see a llama](https://www.happy-llama.com)

![](https://www.happy-llama.com/llama-image.png)

Favorite llama properties:
- 4 legs
- Soft
- Saucy eyes
```

- Footnotes

```
This text has some sublty to it.[^1]

[^1]: I can explain more here.
```

- Tables

```
| Header 1 | Header 2 |
| -------- | -------- |
| R1C1     | R1C2     |
| R2C1     | R2C2     |
```

- Table of content (put `[toc]` anywhere in your document to generate it)

```
This is an example of using a toc. It will render under this sentence.

[toc]

## Section 1

Blah blah blah.

### Section 1, sub 1

Blah

### Section 1, sub 2

Blah

## Section 2

Blah
```

Our Markdown is very customizable. Ask the tech lead if there's a Markdown language feature or styling change you'd like.

### Include images

To include an image in your blog post:

1. Put your image at _src/site/\_images/blog/\<descriptive-name-for-image\>_. Use a descriptive name for your image to improve the SEO of your blog post. Something like `blockchain-mechanism-diagram.png` is much better than `image1.png`.
2. Reference your image at the relative URL _/images/blog/\<descriptive-name-for-image\>_.

```
![](/images/blog/<descriptive-name-for-image>)
```

If you are developing locally, you need to run `npm run build:images` before new images will be served.

## Post the blog post

To post a blog post, merge your blog post onto `master` on GitHub. Netlify will notice new commits and deploy them.

## Edit a blog post

To edit a blog post, change any content you want and merge the changes back to `master` on GitHub. Netlify will notice new commits and deploy them.

Do not change the title of a blog post! The title of a blog post is used to generate its permalink. If you change the title a blog post has been online, you are probably breaking a link to that content from somewhere else (a tweet, another blog post, etc.). If you really must change the title of a post, you can add a `slug` key to the post metadata to override the generated permalink. The `slug` value should be the slug generated from the old title.
