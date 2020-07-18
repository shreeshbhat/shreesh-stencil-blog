---
title: Fluid design using clamp
date: 2020-05-20 08:00:00
tags: ['Today I learned', 'CSS']
---
I came across css clamp function today while browsing [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp).
<!--more-->
``` css
:root {
  font-size: clamp(1rem, 0.5rem + 1vw, 3rem);
}
```
clamp() function takes three parameters : minimum value, preferred value, and maximum value. The major benefit of this method is that we can avoid media queries and acheive Fluid Typography in a single line of code.

Here, we are using rem and vw units together to ensure font size scale according to browser zoom setting, user font size preference, and screen width.

I especially don't enjoy the abrupt change that media queries bring. This approach produces a much smoother experience to the user.

[Can I use website](https://www.caniuse.com/#search=clamp()) suggests that iOS safari got clamp support recently and some browsers still don't support it.
For a wider browser support, we can use min and max functions. The difference is 66% to 82% of global browser usage.

``` css
:root {
  font-size: max(1rem, min(0.5rem + 1vw, 3rem));
  font-size: clamp(1rem, 0.5rem + 1vw, 3rem);
}
```
