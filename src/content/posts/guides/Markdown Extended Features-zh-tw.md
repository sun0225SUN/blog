---
title: Markdown 擴展功能
published: 2025-04-25
tags:
  - 指南
toc: false
lang: zh-tw
abbrlink: markdown-extended-features
---

本文介紹 Retypeset 主題支援的 Markdown 擴展功能，包括語法範例與效果呈現。

## 圖注

使用標準的 Markdown 圖像語法 `![alt](src)`，即可自動生成圖注。在 `alt` 前添加下劃線 `_` 或留空 `alt`，即可隱藏圖注。

### 語法

```
![圖片描述](https://image.radishzz.cc/image/gallery/06.webp)

![_圖片描述](https://image.radishzz.cc/image/gallery/06.webp)
```

### 效果

![圖片描述](https://image.radishzz.cc/image/gallery/06.webp)

![_圖片描述](https://image.radishzz.cc/image/gallery/06.webp)

## 提示塊

使用 GitHub 語法 `> [!TYPE]` 或三冒號語法 `:::type`，即可創建提示塊。支援 `note`、`tip`、`important`、`warning` 和 `caution` 五種類型。

### 語法

```
> [!NOTE]
> 即使快速瀏覽，也值得用戶留意的信息。

> [!TIP]
> 可選信息，可幫助用戶更輕鬆地完成操作。

> [!IMPORTANT]
> 用戶成功所需的關鍵信息。

:::warning
由於存在潛在風險，需要用戶立即關注的關鍵內容。
:::

:::caution
某些操作可能帶來的負面後果。
:::

:::note[自定義標題]
這是一個自定義標題的提示塊。
:::
```

### 效果

> [!NOTE]
> 即使快速瀏覽，也值得用戶留意的信息。

> [!TIP]
> 可選信息，可幫助用戶更輕鬆地完成操作。

> [!IMPORTANT]
> 用戶成功所需的關鍵信息。

:::warning
由於存在潛在風險，需要用戶立即關注的關鍵內容。
:::

:::caution
某些操作可能帶來的負面後果。
:::

:::note[自定義標題]
這是一個自定義標題的提示塊。
:::

## 折疊部分

使用三冒號語法 `:::fold[title]`，即可創建折疊部分。點擊標題可以展開或收起。

### 語法

```
:::fold[使用提示]
如果需要添加並非所有讀者都會感興趣的內容，可以將其放在折疊部分。
:::
```

### 效果

:::fold[使用提示]
如果需要添加並非所有讀者都會感興趣的內容，可以將其放在折疊部分。
:::

## 畫廊

使用三冒號語法 `:::gallery`，即可建立圖片畫廊。水平捲動以瀏覽更多圖片。

### 語法

```
:::gallery
![羊駝](https://image.radishzz.cc/image/gallery/sheep-1.jpg)
![轉頭](https://image.radishzz.cc/image/gallery/sheep-2.jpg)
![對視](https://image.radishzz.cc/image/gallery/sheep-3.jpg)
![小羊駝](https://image.radishzz.cc/image/gallery/sheep-4.jpg)
![可愛捏](https://image.radishzz.cc/image/gallery/sheep-5.jpg)
:::
```

### 效果

:::gallery
![羊駝](https://image.radishzz.cc/image/gallery/sheep-1.jpg)
![轉頭](https://image.radishzz.cc/image/gallery/sheep-2.jpg)
![對視](https://image.radishzz.cc/image/gallery/sheep-3.jpg)
![小羊駝](https://image.radishzz.cc/image/gallery/sheep-4.jpg)
![可愛捏](https://image.radishzz.cc/image/gallery/sheep-5.jpg)
:::

## GitHub 倉庫

使用雙冒號語法 `::github{repo="owner/repo"}`，即可創建 GitHub 倉庫卡片。在頁面載入後，從 GitHub API 中即時獲取倉庫數據。

### 語法

```
::github{repo="radishzzz/astro-theme-retypeset"}
```

### 效果

::github{repo="radishzzz/astro-theme-retypeset"}

## 視頻

使用雙冒號語法 `::youtube{id="videoId"}`，即可嵌入視頻。

### 語法

```
::youtube{id="9pP0pIgP2kE"}

::bilibili{id="BV1sK4y1Z7KG"}
```

### 效果

::youtube{id="9pP0pIgP2kE"}

::bilibili{id="BV1sK4y1Z7KG"}

## X 推文

使用雙冒號語法 `::tweet{url="tweetUrl"}`，即可嵌入 X 推文卡片。

### 語法

```
::tweet{url="https://x.com/hachi_08/status/1906456524337123549"}
```

### 效果

::tweet{url="https://x.com/hachi_08/status/1906456524337123549"}
