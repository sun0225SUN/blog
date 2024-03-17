---
title: "让面试官眼前一亮，手把手带你打造个性化的 GitHub 首页"
description: ""
pubDate: "2023-1-30"
heroImage: "https://files.sunguoqi.com/images/202311220231908.webp"
tags: ["教程"]
---

> 代码可以不会敲，但是逼格一定要高。

不知从何时起，我发现自己**花里胡哨**的本领是越来越强了。

看看俺滴主页 https://sunguoqi.com

<img src="https://files.sunguoqi.com/images/202311250153497.webp"/>

看看俺滴博客 https://blog.sunguoqi.com

<img src="https://files.sunguoqi.com/images/202311250154365.webp"/>

再看看俺滴相册 https://plog.sunguoqi.com

<img src="https://files.sunguoqi.com/images/202311250154965.webp"/>

哇呜~ 好好看喔，审美在线，哈哈哈。

## 步入正题


先看一下我的 GitHub 首页吧。

https://github.com/sun0225SUN

怎么样，我想这可能是全 GitHub 加载最慢的首页了吧🐶。

哈哈哈，想拥有吗，想拥有的话就继续往下看吧。

## 如何实现

其实自定义 Github 的首页很简单，我们只需要新建一个**仓库名**和自己 Github **用户 ID** 相同的仓库并且添加一个 `README.md`自述文件即可。

理论存在，实践开始

新建一个同名仓库，添加一个自述文件后点击确认。

<img src="https://files.sunguoqi.com/images/202311250154073.webp"/>

GitHub 默认为此文件添加了 demo，我们编辑此文件，即可开启自己的 DIY 之路了！

<img src="https://files.sunguoqi.com/images/202311250155216.webp"/>

## 酷炫一点

Github 提供了这样一个特殊的 `markdown` 文件以供我们 DIY GitHub 首页。

但是，个人的创造力毕竟有限，如何能在短时间内拥有一个非常酷炫的首页呢！

emmm，有了，`ctrl+c` `ctrl+v`。

### Typing svg

<p align="center">
    <img src="https://readme-typing-svg.herokuapp.com/?lines=console.log(%22Hello%2C%20World!%22);小孙同学祝您今天愉快!&center=true&size=27">
</p>

开源项目地址：https://github.com/DenverCoder1/readme-typing-svg

参考项目说明，复制如下代码，便可以在 GitHub 首页中展示一个循环打字的`svg`小动画。

```html
<h1 align="center">
  <a href="https://sunguoqi.com/">
    <img src="https://readme-typing-svg.herokuapp.com/?lines=console.log(%22Hello%2C%20World!%22);小孙同学祝您今天愉快!&center=true&size=27">
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

开源项目地址：https://github.com/badges/shields

参考项目说明，复制如下代码，便可以在 GitHub 首页中展示您所需要的徽章图标。

```HTML
<span >
	<img  src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
	<img  src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3" />
	<img  src="https://img.shields.io/badge/-JavaScript-oringe?style=flat-square&logo=javascript" />
</span>
```

```code
![](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3)
![](https://img.shields.io/badge/-JavaScript-oringe?style=flat-square&logo=javascript)
```

### Visitor Badge

<!-- <div align="center"><img  src="https://visitor-badge.glitch.me/badge?page_id=sun0225SUN" /></div> -->

开源项目地址：https://github.com/jwenjian/visitor-badge

这个图标和上面的徽章类似，但作用不同，这个徽标会实时改变，记录此页面被访问的次数。（注意修改 ID）

```HTML
<div align="center">
    <img  src="https://visitor-badge.glitch.me/badge?page_id=sun0225SUN" />
</div>
```

```code
![](https://visitor-badge.glitch.me/badge?page_id=sun0225SUN)
```


### Spotify

<!-- <img src="https://spotify-github-profile.vercel.app/api/view?uid=31k53kp6hgkbovg72427dya5av44&cover_image=true&theme=default&show_offline=false&background_color=121212" /> -->
  
开源项目地址：https://github.com/kittinan/spotify-github-profile

参考项目说明，复制如下代码（仅供参考），便可以在 GitHub 首页中展示您最近在`spotify`中所听过的音乐。

```HTML
<img src="https://spotify-github-profile.vercel.app/api/view?uid=31k53kp6hgkbovg72427dya5av44&cover_image=true&theme=default&show_offline=false&background_color=121212" />
```

### Joke

<img src="https://readme-jokes.vercel.app/api?hideBorder&bgColor=%23121212" alt="Jokes Card" />

开源项目地址：https://github.com/ABSphreak/readme-jokes

参考项目说明，复制如下代码，便可以在 GitHub 首页中展示一些关于 IT 行业的笑话。

```HTML
<img src="https://readme-jokes.vercel.app/api?hideBorder&bgColor=%23121212" alt="Jokes Card" />
```


### GitHub streak

<div align="center"><img  src="https://github-readme-streak-stats.herokuapp.com/?user=sun0225SUN&theme=dark&hide_border=true" /></div>

开源项目地址：https://github.com/DenverCoder1/github-readme-streak-stats

参考项目说明，复制如下代码，便可以在 GitHub 首页中展示您连续提交代码的天数及贡献总数。（注意修改 ID）

```HTML
<div align="center">
    <img  src="https://github-readme-streak-stats.herokuapp.com/?user=sun0225SUN&theme=dark&hide_border=true" />
</div>
```

```code
[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=sun0225SUN&theme=dark&hide_border=true)](https://git.io/streak-stats)
```


### Metrics

<div align="center"><img src="https://metrics.lecoq.io/sun0225SUN?template=classic&config.timezone=Asia%2FShanghai"/></div>

工具网站：https://metrics.lecoq.io/

在浏览器中打开上方链接，在左侧选择您要展示的内容，复制右边的`Maekdown`代码即可。

```HTML
<div align="center">
    <img src="https://metrics.lecoq.io/sun0225SUN?template=classic&config.timezone=Asia%2FShanghai">
</div>
```

``` code
![Metrics](https://metrics.lecoq.io/sun0225SUN?template=classic&config.timezone=Asia%2FShanghai)
```


### Quotes

<img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=dark" />

开源项目地址：https://github.com/shravan20/github-readme-quotes

参考项目说明，复制如下代码，便可以在 GitHub 首页中随机展示一段名人名言。

```HTML
<img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=dark" />
```

### Github Profile Trophy

<div align="center"><img  src="https://github-profile-trophy.vercel.app/?username=sun0225SUN&theme=gruvbox&row=1&column=7&no-frame=true&no-bg=true" /></div>

开源项目地址：https://github.com/ryo-ma/github-profile-trophy

参考项目说明，复制如下代码，便可以在 GitHub 首页中展示您的奖杯成就（注意修改 ID）

```HTML
<div align="center">
  <img  src="https://github-profile-trophy.vercel.app/?username=sun0225SUN&theme=gruvbox&row=1&column=7&no-frame=true&no-bg=true" />
</div>
```

```code
[![trophy](https://github-profile-trophy.vercel.app/?username=sun0225SUN)](https://github.com/ryo-ma/github-profile-trophy)
```

### GitHub 统计卡片

<div align="center"><img  src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=sun0225SUN&hide_title=true&hide_border=true&layout=compact&langs_count=6&text_color=000&icon_color=fff&bg_color=0,52fa5a,4dfcff,c64dff&theme=graywhite" /></div>

<div align="center"><img height="137px" src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=sun0225SUN&hide_title=true&hide_border=true&show_icons=trueline_height=21&text_color=000&icon_color=000&bg_color=0,ea6161,ffc64d,fffc4d,52fa5a&theme=graywhite" /></div>

 
开源项目地址：https://github.com/anuraghazra/github-readme-stats 
 
参考项目说明，复制如下代码，便可以在 GitHub 首页中展示您的编码数据统计图（注意修改 ID）

```HTML
<div align="center">
    <img  src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=sun0225SUN&hide_title=true&hide_border=true&layout=compact&langs_count=6&text_color=000&icon_color=fff&bg_color=0,52fa5a,4dfcff,c64dff&theme=graywhite" />
</div>

<div align="center">
    <img height="137px" src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=sun0225SUN&hide_title=true&hide_border=true&show_icons=trueline_height=21&text_color=000&icon_color=000&bg_color=0,ea6161,ffc64d,fffc4d,52fa5a&theme=graywhite" />
</div>
```

```code
![这里写你的昵称's Most used languages](https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=这里替换成你的 GitHub ID&layout=compact&hide_border=true&langs_count=10)

[![这里写你的昵称's GitHub stats](https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=这里替换成你的 GitHub ID)](https://github.com/anuraghazra/github-readme-stats)

```

### GitHub Readme Activity Graph


<div align="center"><img src="https://github-readme-activity-graph.vercel.app/graph?username=sun0225SUN&theme=xcode" /></div>

开源项目地址：https://github.com/Ashutosh00710/github-readme-activity-graph

参考项目说明，复制如下代码，便可以在 GitHub 首页中展示 GitHub 活动统计图（注意修改 ID）

```HTML
<div align="center">
    <img src="https://activity-graph.herokuapp.com/graph?username=sun0225SUN&theme=xcode" />
</div>
```

```code
[![Sunshine's GitHub Activity Graph](https://activity-graph.herokuapp.com/graph?username=sun0225SUN&theme=xcode)](https://github.com/sun0225SUN)
```


# 案例仓库

好的创意总是能博得人的关注，吸引人的眼球。

当我们在逛 GitHub 时，如果遇到了好看的主页，我们便可以直接把他扒下来，为我所用。

下面几个仓库收集了一些好看的 GitHub 主页，仅供大家欣赏和参考。

开源地址：https://github.com/EddieHubCommunity/awesome-github-profiles

<img src="https://files.sunguoqi.com/images/202311250155404.webp" />

开源地址：https://github.com/abhisheknaiidu/awesome-github-profile-readme

<img src="https://files.sunguoqi.com/images/202311250156832.webp"/>

开源地址：https://github.com/eryajf/awesome-github-profile-readme-chinese

<img src="https://files.sunguoqi.com/images/202311250156830.webp"/>

# 写在后面

细心的读者可能会发现，在我的 GitHub 首页中，除了今天所介绍的一些内容之外，还包含一些其他元素。比如贪吃蛇贡献图动画，3D 热力图等。

这些东西需要借助`Github Actions`实现，我将在后续的教程中阐述他具体的操作方法和工作原理。





