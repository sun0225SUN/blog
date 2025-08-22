---
title: Quickly Build a Douban Book/Movie Poster WebAPI Using Flask
description: "New year, new look. Recently, I've been tinkering with my new blog, preparing to give it a good makeover."
published: 2023-01-09
tags:
  - Development
lang: en
abbrlink: flask
---

New year, new look. Recently, I've been tinkering with my new blog, preparing to give it a good makeover.

In the [old site](https://gh.sunguoqi.com/books), there was a **Douban Book/Movie** display page, which I thought was pretty good.

So I wanted to add this element to the new website as well. On the other hand, it can also promote **more reading** and **more movie watching**.<br/>

<img src="https://assets.guoqi.dev/images/202312091442060.webp" />

## Initial Exploration

Emmmm, how to introduce it? Directly develop a plugin? I haven't learned how to develop a halo plugin yet❌

Let's search on GitHub first to see if there are any related projects? Good idea✅

So I found this repository [Portal](https://github.com/sadjjk/DoubanPoster)

<img src="https://assets.guoqi.dev/images/202312091442763.webp" />

The repository was created three years ago. Let's see if the code can run normally!

Sure enough... there is a bug, hahaha!

<img src="https://assets.guoqi.dev/images/202312091443113.webp" />

## Fixing the Bug

Print the status code first to diagnose where the bug is.

<img src="https://assets.guoqi.dev/images/202312091444281.webp"/>

Run it!

<img src="https://assets.guoqi.dev/images/202312091445914.webp" />

<strong>418</strong>, it's the first time I've encountered this status code, <strong>Google it!</strong>

<img src="https://assets.guoqi.dev/images/202312091445494.webp" />

<img src="https://assets.guoqi.dev/images/202312091445751.webp" />

I'm a teapot, hahaha, IT technology is full of fun.

<img src="https://assets.guoqi.dev/images/202312091446934.webp" />

Ah, I don't quite understand... Although the predecessor wrote the `UA list`, they didn't add it to the `headers` when making the request. No wonder Douban detected you as a crawler, haha.

Let's correct it!

<img src="https://assets.guoqi.dev/images/202312091446486.webp" />

Perfectly running!

<img src="https://assets.guoqi.dev/images/202312091447411.webp" />

<img src="https://assets.guoqi.dev/images/202312091447491.webp" />

But...

## New Requirement

Do I have to run this code to generate a poster every time I share a book/movie?

Why not directly develop an interface so that it can be called directly by adding code like this?

```markdown
![](https://douban.sunguoqi.com?params=DOUBANURL)
```

## Technical Exploration

The requirement exists, let's start exploring the implementation plan.

Make the Python script into an API?

We just need to create a web application. When the user accesses the specified route with the correct parameters, it can trigger the corresponding logic and finally return the data.

So what technology should we use to write this web application?

Aha, there are ready-made web frameworks, such as Spring Boot, Django, Flask...

`Spring Boot`?

JavaWeb, I'm not familiar with Java, haven't done actual development, it might be a bit difficult to get started❌

`Django`?

I have self-studied Django for a while, it's relatively easy to get started, but Django is **"too complete"**, with built-in backend, database ORM mapping, template mechanism, form handling, sessions... Using it for this script might be a bit cumbersome, feels like overkill⏱️

`Flask`?

I've heard that Flask is relatively lightweight. Let's check the official website. Wow, five lines to output **hello world**, I think it works, let's go with it✅

<img src="https://assets.guoqi.dev/images/202312091448253.webp" />

## Official Development

### 1. Failed Attempt

I originally wanted to develop it on `Windows` using `VScode` and then upload it to the server, but configuring the development environment took a long time.

First, I encountered problems when writing `Flask_App` to the `Windows` system environment variables. Second, I had issues running `Flask` on `VSCode`...

Forget it, let's not configure it, let's go directly to the server.

<img src="https://assets.guoqi.dev/images/202312091448864.webp" />

### 2. Hello World

Easily configured the environment on `Ubuntu`, then typed in the code (copy-paste)

```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
```

Hello, World! It's so elegant🎉

<img src="https://assets.guoqi.dev/images/202312091448535.webp" />

### 3. Writing Route Logic

After some intense operations, I added the following code to the original code, and it was done!

```python
...
import flask
from flask import send_file

def main(url):
    ...
    return api_img_path

@app.route('/',methods=['get'])
def img():
    url = flask.request.args.get('url')
    img = main(url)

    return send_file(img)
```

<img src="https://assets.guoqi.dev/images/202312091449847.webp" />

<img src="https://assets.guoqi.dev/images/202312091449813.webp" />

Of course, there was actually a lot of intense debugging during this period🥹

<img src="https://assets.guoqi.dev/images/202312091449225.webp" />

<img src="https://assets.guoqi.dev/images/202312091450044.webp" />

## Mission Accomplished

**Github: https://github.com/sun0225SUN/DoubanPoster**

<img src="https://assets.guoqi.dev/images/202312091451842.webp"/>
