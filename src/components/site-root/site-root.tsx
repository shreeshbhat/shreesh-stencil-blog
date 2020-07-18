import { Component, Element, h } from '@stencil/core';

import state from '../../store';

@Component({
  tag: 'site-root',
  styleUrl: 'site-root.scss'
})
export class App {
  @Element() el: HTMLElement;

  render() {
    return (
      <div class={`page-theme--${state.pageTheme}`}>
        <site-header />
        <site-routes />
      </div>
    );
  }
}
