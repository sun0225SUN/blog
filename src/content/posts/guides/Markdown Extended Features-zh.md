---
title: Markdown 扩展功能
published: 2025-04-25
tags:
  - 指南
toc: false
lang: zh
abbrlink: markdown-extended-features
---

本文介绍 Retypeset 主题支持的 Markdown 扩展功能，包括语法示例与效果展示。

## 图注

使用标准的 Markdown 图像语法 `![alt](src)`，即可自动生成图注。在 `alt` 前添加下划线 `_` 或留空 `alt`，即可隐藏图注。

### 语法

```
![图片描述](https://image.radishzz.cc/image/gallery/06.webp)

![_图片描述](https://image.radishzz.cc/image/gallery/06.webp)
```

### 效果

![图片描述](https://image.radishzz.cc/image/gallery/06.webp)

![_图片描述](https://image.radishzz.cc/image/gallery/06.webp)

## 提示块

使用 GitHub 语法 `> [!TYPE]` 或三冒号语法 `:::type`，即可创建提示块。支持 `note`、`tip`、`important`、`warning` 和 `caution` 五种类型。

### 语法

```
> [!NOTE]
> 即使快速浏览，也值得用户留意的信息。

> [!TIP]
> 可选信息，可帮助用户更轻松地完成操作。

> [!IMPORTANT]
> 用户成功所需的关键信息。

:::warning
由于存在潜在风险，需要用户立即关注的关键内容。
:::

:::caution
某些操作可能带来的负面后果。
:::

:::note[自定义标题]
这是一个自定义标题的提示块。
:::
```

### 效果

> [!NOTE]
> 即使快速浏览，也值得用户留意的信息。

> [!TIP]
> 可选信息，可帮助用户更轻松地完成操作。

> [!IMPORTANT]
> 用户成功所需的关键信息。

:::warning
由于存在潜在风险，需要用户立即关注的关键内容。
:::

:::caution
某些操作可能带来的负面后果。
:::

:::note[自定义标题]
这是一个自定义标题的提示块。
:::

## 折叠部分

使用三冒号语法 `:::fold[title]`，即可创建折叠部分。点击标题可以展开或收起。

### 语法

```
:::fold[使用提示]
如果需要添加并非所有读者都会感兴趣的内容，可以将其放在折叠部分。
:::
```

### 效果

:::fold[使用提示]
如果需要添加并非所有读者都会感兴趣的内容，可以将其放在折叠部分。
:::

## 画廊

使用三冒号语法 `:::gallery`，即可创建图片画廊。水平滚动以查看更多图片。

### 语法

```
:::gallery
![羊驼](https://image.radishzz.cc/image/gallery/sheep-1.jpg)
![转头](https://image.radishzz.cc/image/gallery/sheep-2.jpg)
![对视](https://image.radishzz.cc/image/gallery/sheep-3.jpg)
![小羊驼](https://image.radishzz.cc/image/gallery/sheep-4.jpg)
![可爱捏](https://image.radishzz.cc/image/gallery/sheep-5.jpg)
:::
```

### 效果

:::gallery
![羊驼](https://image.radishzz.cc/image/gallery/sheep-1.jpg)
![转头](https://image.radishzz.cc/image/gallery/sheep-2.jpg)
![对视](https://image.radishzz.cc/image/gallery/sheep-3.jpg)
![小羊驼](https://image.radishzz.cc/image/gallery/sheep-4.jpg)
![可爱捏](https://image.radishzz.cc/image/gallery/sheep-5.jpg)
:::

## GitHub 仓库

使用双冒号语法 `::github{repo="owner/repo"}`，即可创建 GitHub 仓库卡片。在页面加载后，从 GitHub API 中实时获取仓库数据。

### 语法

```
::github{repo="radishzzz/astro-theme-retypeset"}
```

### 效果

::github{repo="radishzzz/astro-theme-retypeset"}

## 视频

使用双冒号语法 `::youtube{id="videoId"}`，即可嵌入视频。

### 语法

```
::youtube{id="9pP0pIgP2kE"}

::bilibili{id="BV1sK4y1Z7KG"}
```

### 效果

::youtube{id="9pP0pIgP2kE"}

::bilibili{id="BV1sK4y1Z7KG"}

## X 推文

使用双冒号语法 `::tweet{url="tweetUrl"}`，即可嵌入 X 推文卡片。

### 语法

```
::tweet{url="https://x.com/hachi_08/status/1906456524337123549"}
```

### 效果

::tweet{url="https://x.com/hachi_08/status/1906456524337123549"}
