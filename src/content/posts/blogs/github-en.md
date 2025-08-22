---
title: 'Make Your Interviewer Impressed: Step-by-Step Guide to Creating a Personalized GitHub Homepage'
description: "You may not know how to code, but your style must be top-notch"
published: 2023-01-30
tags:
  - Tutorial
lang: en
abbrlink: github-profile

---

I don't know when it started, but I found that my skills in making things look fancy have been getting stronger.

Check out my homepage: https://sunguoqi.com

<img src="https://assets.guoqi.dev/images/202311250153497.webp"/>

Check out my blog: https://blog.sunguoqi.com

<img src="https://assets.guoqi.dev/images/202311250154365.webp"/>

Check out my photo album: https://plog.sunguoqi.com

<img src="https://assets.guoqi.dev/images/202311250154965.webp"/>

Wow~ It looks so good, my aesthetics are on point, hahaha.

## Getting to the Point

First, take a look at my GitHub homepage.

https://github.com/sun0225SUN

How is it? I think this might be the slowest loading homepage on all of GitHub 🐶.

Hahaha, do you want to have it? If you do, keep reading.

## How to Achieve It

Actually, customizing the GitHub homepage is very simple. We just need to create a repository with the same name as our GitHub user ID and add a `README.md` file.

Theory exists, practice begins.

Create a repository with the same name, add a README file, and click confirm.

<img src="https://assets.guoqi.dev/images/202311250154073.webp"/>

GitHub adds a demo to this file by default. We can edit this file to start our DIY journey!

<img src="https://assets.guoqi.dev/images/202311250155216.webp"/>

## Make It Cool

GitHub provides this special `markdown` file for us to DIY our GitHub homepage.

But, personal creativity is limited. How can we have a very cool homepage in a short time?

Emmm, got it, `ctrl+c` `ctrl+v`.

### Typing svg

<p align="center">
    <img src="https://readme-typing-svg.herokuapp.com/?lines=console.log(%22Hello%2C%20World!%22);小孙同学祝您今天愉快!&center=true&size=27">
</p>

Open source project address: https://github.com/DenverCoder1/readme-typing-svg

Refer to the project description, copy the following code, and you can display a looping typing `svg` animation on your GitHub homepage.

```html
<h1 align="center">
  <a href="https://sunguoqi.com/">
    <img
      src="https://readme-typing-svg.herokuapp.com/?lines=console.log(%22Hello%2C%20World!%22);小孙同学祝您今天愉快!&center=true&size=27"
    />
  </a>
</h1>
```

### Shields.io

<p align="center">
<span >
<img  src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
<img  src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3" />
<img  src="https://img.shields.io/badge/-JavaScript-oringe?style=flat-square&logo=javascript" />
</span>
</p>

Open source project address: https://github.com/badges/shields

Refer to the project description, copy the following code, and you can display the badges you need on your GitHub homepage.

```html
<span>
  <img
    src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"
  />
  <img
    src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3"
  />
  <img
    src="https://img.shields.io/badge/-JavaScript-oringe?style=flat-square&logo=javascript"
  />
</span>
```

```txt
![](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3)
![](https://img.shields.io/badge/-JavaScript-oringe?style=flat-square&logo=javascript)
```

### Visitor Badge

<!-- <div align="center"><img  src="https://visitor-badge.glitch.me/badge?page_id=sun0225SUN" /></div> -->

Open source project address: https://github.com/jwenjian/visitor-badge

This badge is similar to the one above, but it serves a different purpose. This badge will change in real-time, recording the number of times this page has been visited. (Remember to change the ID)

```html
<div align="center">
  <img src="https://visitor-badge.glitch.me/badge?page_id=sun0225SUN" />
</div>
```

```txt
![](https://visitor-badge.glitch.me/badge?page_id=sun0225SUN)
```

### Spotify

<!-- <img src="https://spotify-github-profile.vercel.app/api/view?uid=31k53kp6hgkbovg72427dya5av44&cover_image=true&theme=default&show_offline=false&background_color=121212" /> -->

Open source project address: https://github.com/kittinan/spotify-github-profile

Refer to the project description, copy the following code (for reference only), and you can display the music you recently listened to on `spotify` on your GitHub homepage.

```html
<img
  src="https://spotify-github-profile.vercel.app/api/view?uid=31k53kp6hgkbovg72427dya5av44&cover_image=true&theme=default&show_offline=false&background_color=121212"
/>
```

### Joke

<img src="https://readme-jokes.vercel.app/api?hideBorder&bgColor=%23121212" alt="Jokes Card" />

Open source project address: https://github.com/ABSphreak/readme-jokes

Refer to the project description, copy the following code, and you can display some jokes about the IT industry on your GitHub homepage.

```html
<img
  src="https://readme-jokes.vercel.app/api?hideBorder&bgColor=%23121212"
  alt="Jokes Card"
/>
```

### GitHub streak

<div align="center"><img  src="https://github-readme-streak-stats.herokuapp.com/?user=sun0225SUN&theme=dark&hide_border=true" /></div>

Open source project address: https://github.com/DenverCoder1/github-readme-streak-stats

Refer to the project description, copy the following code, and you can display the number of days you have continuously committed code and the total number of contributions on your GitHub homepage. (Remember to change the ID)

```html
<div align="center">
  <img
    src="https://github-readme-streak-stats.herokuapp.com/?user=sun0225SUN&theme=dark&hide_border=true"
  />
</div>
```

```text
[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=sun0225SUN&theme=dark&hide_border=true)](https://git.io/streak-stats)
```

### Metrics

<div align="center"><img src="https://metrics.lecoq.io/sun0225SUN?template=classic&config.timezone=Asia%2FShanghai"/></div>

Tool website: https://metrics.lecoq.io/

Open the link above in your browser, select the content you want to display on the left, and copy the `Markdown` code on the right.

```html
<div align="center">
  <img
    src="https://metrics.lecoq.io/sun0225SUN?template=classic&config.timezone=Asia%2FShanghai"
  />
</div>
```

```text
![Metrics](https://metrics.lecoq.io/sun0225SUN?template=classic&config.timezone=Asia%2FShanghai)
```

### Quotes

<img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=dark" />

Open source project address: https://github.com/shravan20/github-readme-quotes

Refer to the project description, copy the following code, and you can randomly display a famous quote on your GitHub homepage.

```html
<img
  src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=dark"
/>
```

### Github Profile Trophy

<div align="center"><img  src="https://github-profile-trophy.vercel.app/?username=sun0225SUN&theme=gruvbox&row=1&column=7&no-frame=true&no-bg=true" /></div>

Open source project address: https://github.com/ryo-ma/github-profile-trophy

Refer to the project description, copy the following code, and you can display your trophy achievements on your GitHub homepage (remember to change the ID)

```html
<div align="center">
  <img
    src="https://github-profile-trophy.vercel.app/?username=sun0225SUN&theme=gruvbox&row=1&column=7&no-frame=true&no-bg=true"
  />
</div>
```

```txt
[![trophy](https://github-profile-trophy.vercel.app/?username=sun0225SUN)](https://github.com/ryo-ma/github-profile-trophy)
```

### GitHub Stats Card

<div align="center"><img  src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=sun0225SUN&hide_title=true&hide_border=true&layout=compact&langs_count=6&text_color=000&icon_color=fff&bg_color=0,52fa5a,4dfcff,c64dff&theme=graywhite" /></div>

<div align="center"><img height="137px" src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=sun0225SUN&hide_title=true&hide_border=true&show_icons=trueline_height=21&text_color=000&icon_color=000&bg_color=0,ea6161,ffc64d,fffc4d,52fa5a&theme=graywhite" /></div>

Open source project address: https://github.com/anuraghazra/github-readme-stats

Refer to the project description, copy the following code, and you can display your coding data statistics on your GitHub homepage (remember to change the ID)

```html
<div align="center">
  <img
    src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=sun0225SUN&hide_title=true&hide_border=true&layout=compact&langs_count=6&text_color=000&icon_color=fff&bg_color=0,52fa5a,4dfcff,c64dff&theme=graywhite"
  />
</div>

<div align="center">
  <img
    height="137px"
    src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=sun0225SUN&hide_title=true&hide_border=true&show_icons=trueline_height=21&text_color=000&icon_color=000&bg_color=0,ea6161,ffc64d,fffc4d,52fa5a&theme=graywhite"
  />
</div>
```

```txt
![Your Nickname's Most used languages](https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=Replace with your GitHub ID&layout=compact&hide_border=true&langs_count=10)

[![Your Nickname's GitHub stats](https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=Replace with your GitHub ID)](https://github.com/anuraghazra/github-readme-stats)

```

### GitHub Readme Activity Graph

<div align="center"><img src="https://github-readme-activity-graph.vercel.app/graph?username=sun0225SUN&theme=xcode" /></div>

Open source project address: https://github.com/Ashutosh00710/github-readme-activity-graph

Refer to the project description, copy the following code, and you can display the GitHub activity graph on your GitHub homepage (remember to change the ID)

```html
<div align="center">
  <img
    src="https://activity-graph.herokuapp.com/graph?username=sun0225SUN&theme=xcode"
  />
</div>
```

```txt
[![Sunshine's GitHub Activity Graph](https://activity-graph.herokuapp.com/graph?username=sun0225SUN&theme=xcode)](https://github.com/sun0225SUN)
```

# Example Repositories

Good ideas always attract attention and catch people's eyes.

When we browse GitHub, if we come across a good-looking homepage, we can directly copy it for our own use.

The following repositories collect some good-looking GitHub homepages for your appreciation and reference.

Open source address: https://github.com/EddieHubCommunity/awesome-github-profiles

<img src="https://assets.guoqi.dev/images/202311250155404.webp" />

Open source address: https://github.com/abhisheknaiidu/awesome-github-profile-readme

<img src="https://assets.guoqi.dev/images/202311250156832.webp"/>

Open source address: https://github.com/eryajf/awesome-github-profile-readme-chinese

<img src="https://assets.guoqi.dev/images/202311250156830.webp"/>

# Conclusion

Attentive readers may have noticed that in my GitHub homepage, in addition to the content introduced today, there are also some other elements. For example, the snake contribution graph animation, 3D heatmap, etc.

These things need to be implemented with `Github Actions`. I will explain their specific operation methods and working principles in subsequent tutorials.
