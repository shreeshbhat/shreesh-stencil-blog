import { Component, Host, h, Build } from '@stencil/core';
import { getRandomEmoji } from '../../utils/emojis';

@Component({
  tag: 'site-header',
  styleUrl: './site-header.css',
  shadow: true
})
export class SiteHeader {

  render() {
    return (
      <Host>
        <header>
          <h1 class="home">
            <a href="/" aria-label="Go to homepage">Shreesh.dev</a>{Build.isBrowser? getRandomEmoji() : null}
          </h1>
          <ul class="nav">
            <li class="nav-item nav-item-active"><a href="/">Home</a></li>
            <li class="nav-item"><a href="/blog/">Blog</a></li>
            <li class="nav-item"><a href="/about/">About</a></li>
          </ul>
        </header>
      </Host>
    );
  }

}
