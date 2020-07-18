import { Component, Host, h } from '@stencil/core';

import { Route, match } from 'stencil-router-v2';

import { InternalRouterState } from 'stencil-router-v2/dist/types';

import state from '../../store';
import Router from '../../router';

@Component({
  tag: 'site-routes',
  styleUrl: 'site-routes.css',
})
export class SiteRoutes {

  componentWillLoad() {
    let oldUrl: URL;

    Router.onChange('url', (newValue: InternalRouterState['url'], _oldValue: InternalRouterState['url']) => {
      if (!oldUrl || oldUrl.pathname !== newValue.pathname) {
        state.pageTheme = 'dark';
      }
      oldUrl = newValue;
      // Reset scroll position
      requestAnimationFrame(() => window.scrollTo(0, 0));
    });
  }

  render() {
    return (
      <Host>
        <Router.Switch>
          <Route path="/">
            <landing-page />
          </Route>

          <Route path={match('/blog', { exact: true })} render={() => {
            return <blog-page />
          }} />

          <Route path={match('/blog/:slug')} render={({ slug }) => {
            return <blog-post slug={slug} />
          }} />
        </Router.Switch>
      </Host>
    );
  }

}
