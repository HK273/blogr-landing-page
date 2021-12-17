# Frontend Mentor - Blogr landing page

This is a solution to the [Blogr landing page](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP/hub/blogr-landing-page-3m5XSGR52).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Responsive one page site

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/four-card-section-grid-flexbox-responsive-3LySr1LRe)
- [Live Site URL](https://hk273.github.io/four-card-section/)

### Built with

- Vanilla JS
- HTML5
- Flexbox
- Grid

### What I learned

- EventListener
- DOM manipulation
- Managing SVG's

```css
/* set svg and gradient as background  */

.header {
  /* t-r-b-l */
  padding: 5rem 8rem 10rem 8rem;
  list-style: none;
  border-bottom-left-radius: 10rem;
  /* svg as background img + linear gradient */
  background: url(/images/bg-pattern-intro.svg) 24% 52%, linear-gradient(
      to right,
      var(--gradient-v-light-red),
      var(--gradient-light-red)
    );
  /* set svg background size */
  background-size: 175rem;
  overflow: hidden;
}
```

```css
/* shift items using nth-child */

nav li:nth-child(6) {
  margin-left: auto;
}
```

### Continued development

- Mobile first design
- JavaScript

### Useful resources

- [SVG's](https://css-tricks.com/scale-svg/)
- [Flexbox Gap Space](https://coryrylan.com/blog/css-gap-space-with-flexbox)
- [Spacing Nav Items](https://stackoverflow.com/questions/43475815/how-do-i-create-a-space-between-my-nav-bar)
- [Centre things](https://stackoverflow.com/questions/7596647/ignore-br-with-css)
- [Centre more things](https://betterprogramming.pub/how-to-center-things-with-style-in-css-dc87b7542689)
- [Prevent Wrapping](https://presscustomizr.com/snippet/avoid-wrapping-menu-items/)
- [Overflow x on safari](https://stackoverflow.com/questions/32666663/overflow-x-hidden-is-not-working-in-safari)
- [Animation on links](https://www.youtube.com/watch?v=ceNMP-aQkQ4)
- [Positioning](https://www.youtube.com/watch?v=UO8ed-JB4So)
- [Underline Liks](https://a11y-101.com/development/underlined-links)
- [Responsive Menu](https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci)
- [Responsive Navbar](https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-navigation-bar-with-flexbox--cms-33535)
- [REM VS EM Media queries in Safari](https://stackoverflow.com/questions/20065149/media-queries-and-rems-not-working-in-safari-5-1/20065150)
- [Event Listener, click in specific area](https://www.codegrepper.com/code-examples/javascript/javascript+detect+click+in+a+specific+area)
- [On click function](https://newbedev.com/changing-font-awesome-icon-onclick-function)
- [Event listener to all elements](https://javascript.tutorialink.com/how-to-add-event-listener-to-all-elements/)
- [Event listener multiple elements](https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/)

## Author

- Frontend Mentor - [@HK273](https://www.frontendmentor.io/profile/HK273)

## Acknowledgments

- Thanks to [Orkhai Dickson](https://github.com/orkhai)
