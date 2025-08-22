---
title: Oh My Posh | Windows Terminal Beautification Guide
description: "A clean and refreshing IDE theme, pleasing code colors, a high-end Terminal, and a smooth typing experience are always irresistible."
published: 2023-07-15
tags:
  - Tutorial
lang: en
abbrlink: oh-my-posh
---

As a "code lover", I naturally love everything related to it. A clean and refreshing IDE theme, pleasing code colors, a high-end Terminal, and a smooth typing experience are always irresistible.

In the Windows system, the most commonly used Shell tool is PowerShell. Although it is indeed powerful, its natural appearance is somewhat lacking. How can we have a more beautiful PowerShell?

<img src="https://assets.guoqi.dev/images/202311250146674.webp">

## Windows Terminal

Windows Terminal is a terminal application that integrates multiple command-line environments.

In Windows Terminal, we can use various command-line tools such as PowerShell, Command Prompt, and Windows Subsystem for Linux (WSL) simultaneously.

Installing Windows Terminal is also quite simple. We can directly open the Microsoft Store and install it.

<img src="https://assets.guoqi.dev/images/202311250147264.webp">

Windows Terminal offers many features and characteristics, including multi-tab support, custom themes, quick launch, split layout, Unicode character support, GPU acceleration, etc. It also supports using different profiles to define the appearance and behavior of each command-line environment.

The first step to beautifying PowerShell is to personalize its appearance directly in Windows Terminal.

<img src="https://assets.guoqi.dev/images/202311250147174.webp">

## Oh My Posh

In addition to personalizing PowerShell's appearance in Windows Terminal, we can also use [Oh My Posh](https://ohmyposh.dev/) to further beautify PowerShell.

<img src="https://assets.guoqi.dev/images/202311250147163.webp">

#### What is Oh My Posh

Oh My Posh is an open-source command-line prompt tool used to beautify and customize the command-line prompt.

Oh My Posh provides a wealth of themes and configuration options, allowing users to customize the appearance and behavior of the command-line prompt according to their preferences and needs. It supports custom icons, colors, fonts, layouts, etc., making the command-line prompt more personalized and readable.

With Oh My Posh, you can display useful information in the command-line prompt, such as the current path, Git branch, Python virtual environment, operating system information, etc. It also provides various built-in modules and functions for creating custom prompt elements and dynamic content.

#### Installing Oh My Posh

There are multiple ways to install Oh My Posh. In Windows, you can directly get it from the Microsoft Store.

<img src="https://assets.guoqi.dev/images/202311250148937.webp">

#### Using Oh My Posh

After successfully installing Oh My Posh, Windows Terminal will not use Oh My Posh to load PowerShell by default. We need to configure it as follows.

Enter `$profile` in the command line to view the PowerShell configuration file path. Create a `Microsoft.PowerShell_profile.ps1` file in that directory and add the following content.

```text
oh-my-posh init pwsh | Invoke-Expression
```

#### Installing Nerd Fonts

After configuring Oh My Posh, reopening Windows Terminal will show garbled input prompts.

This is because the current terminal font does not support icons. We need to install Nerd Fonts.

Open the [Nerd Fonts](https://www.nerdfonts.com/font-downloads) download page, choose your favorite font, and install it. Here, I chose the `Hack Nerd Font`.

<img src="https://assets.guoqi.dev/images/202311250148284.webp">

#### Using Nerd Fonts

After successfully installing the Nerd font, we need to configure the terminal to use the Nerd font.

Open Windows Terminal and use the shortcut `Ctrl+Shift+,` to open the Windows Terminal configuration file.

Add the following content to the profiles.

```json
"defaults": {
  "font": {
    "face": "Hack Nerd Font"
  }
}
```

- The value corresponding to "face" is the font name you downloaded from Nerd, such as "Hack Nerd Font".
- If you have previously set a font for PowerShell in Windows Terminal, you can comment out or modify the PowerShell font configuration.

> Of course, you can also modify the default font and PowerShell font in the graphical interface of Windows Terminal.

<img src="https://assets.guoqi.dev/images/202311250148578.webp">

After configuring the font, reopen the terminal to see the beautified effect.

<img src="https://assets.guoqi.dev/images/202311250148611.webp">

#### Choosing a Theme

Oh My Posh officially provides many out-of-the-box themes for us to choose from.

Visit the following link to view theme previews.

[https://ohmyposh.dev/docs/themes](https://ohmyposh.dev/docs/themes)

<img src="https://assets.guoqi.dev/images/202311250149788.webp">

#### Using a Theme

Enter `Get-PoshThemes` in the command line to view the path of the theme preset file at the bottom of the output.

Enter `notepad $profile` in the command line to open the PowerShell configuration file and add the theme preset file path. The format is:

```bash
oh-my-posh init pwsh --config 'C:/Users/Posh/jandedobbeleer.omp.json' | Invoke-Expression
```

## Final Effect

- In VSCode, you also need to configure the Terminal font to Nerd font to display icons correctly.
- For a tutorial on using the neofetch command in Windows: [Click Here](https://www.makeuseof.com/how-to-install-and-use-neofetch-on-windows/)

<img src="https://assets.guoqi.dev/images/202311250149384.webp">

<img src="https://assets.guoqi.dev/images/202311250149895.webp">
