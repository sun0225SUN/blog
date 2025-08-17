---
title: Markdown Extended Features
published: 2025-04-25
tags:
  - Guide
toc: false
lang: en
abbrlink: markdown-extended-features
---

Here are some extended Markdown features supported by Retypeset, including syntax examples and their stylistic effects.

## Figure Captions

To create automatic figure captions, use the standard Markdown image syntax `![alt](src)`. To hide the caption, add an underscore `_` before the `alt` text or leave the `alt` text empty.

### Syntax

```
![Image description](https://image.radishzz.cc/image/gallery/06.webp)

![_Image description](https://image.radishzz.cc/image/gallery/06.webp)
```

### Output

![Image description](https://image.radishzz.cc/image/gallery/06.webp)

![_Image description](https://image.radishzz.cc/image/gallery/06.webp)

## Admonition Blocks

To create admonition blocks, use the GitHub syntax `> [!TYPE]` or the container directive `:::type`. The following types are supported: `note`, `tip`, `important`, `warning`, and `caution`.

### Syntax

```
> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

:::warning
Urgent info that needs immediate user attention to avoid problems.
:::

:::caution
Advises about risks or negative outcomes of certain actions.
:::

:::note[YOUR CUSTOM TITLE]
This is a note with a custom title.
:::
```

### Output

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

:::warning
Urgent info that needs immediate user attention to avoid problems.
:::

:::caution
Advises about risks or negative outcomes of certain actions.
:::

:::note[YOUR CUSTOM TITLE]
This is a note with a custom title.
:::

## Collapsible Sections

To create collapsible sections, use the container directive syntax `:::fold[title]`. Click the title to expand or collapse.

### Syntax

```
:::fold[Usage Tips]
Content that may not interest all readers can be placed in a collapsible section.
:::
```

### Output

:::fold[Usage Tips]
Content that may not interest all readers can be placed in a collapsible section.
:::

## Galleries

To create image galleries, use the container directive `:::gallery`. Scroll horizontally to view more images.

### Syntax

```
:::gallery
![Alpaca](https://image.radishzz.cc/image/gallery/sheep-1.jpg)
![Turning head](https://image.radishzz.cc/image/gallery/sheep-2.jpg)
![Eye contact](https://image.radishzz.cc/image/gallery/sheep-3.jpg)
![Baby alpaca](https://image.radishzz.cc/image/gallery/sheep-4.jpg)
![Aww, so cute!](https://image.radishzz.cc/image/gallery/sheep-5.jpg)
:::
```

### Output

:::gallery
![Alpaca](https://image.radishzz.cc/image/gallery/sheep-1.jpg)
![Turning head](https://image.radishzz.cc/image/gallery/sheep-2.jpg)
![Eye contact](https://image.radishzz.cc/image/gallery/sheep-3.jpg)
![Baby alpaca](https://image.radishzz.cc/image/gallery/sheep-4.jpg)
![Aww, so cute!](https://image.radishzz.cc/image/gallery/sheep-5.jpg)
:::

## GitHub Repositories

To create GitHub repository cards, use the leaf directive `::github{repo="owner/repo"}`. Repository data is fetched in real-time from the GitHub API after the page loads.

### Syntax

```
::github{repo="radishzzz/astro-theme-retypeset"}
```

### Output

::github{repo="radishzzz/astro-theme-retypeset"}

## Videos

To embed videos, use the leaf directive `::youtube{id="videoId"}`.

### Syntax

```
::youtube{id="9pP0pIgP2kE"}

::bilibili{id="BV1sK4y1Z7KG"}
```

### Output

::youtube{id="9pP0pIgP2kE"}

::bilibili{id="BV1sK4y1Z7KG"}

## Tweets

To embed tweet cards, use the leaf directive `::tweet{url="tweetUrl"}`.

### Syntax

```
::tweet{url="https://x.com/hachi_08/status/1906456524337123549"}
```

### Output

::tweet{url="https://x.com/hachi_08/status/1906456524337123549"}
