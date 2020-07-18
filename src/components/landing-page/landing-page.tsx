import { Component, h, Host, State } from '@stencil/core';
import Helmet from '@stencil/helmet';
// import FancyUnderline from '../FancyUnderline';

@Component({
  tag: 'landing-page',
  styleUrl: 'landing-page.scss'
})
export class LandingPage {
  @State() selectedCodeTab: string = 'notifications' ;
  render() {
    return (
      <Host>
        <MetaHead />
        <p>Hi! I'm Shreesh. I love building User Interfaces.</p>
        <p>You can check out my <a href="https://github.com/shreeshbhat">GitHub</a> or reach out to me on <a href="https://www.twitter.com/shreeshbhat">Twitter</a>.</p>
      </Host>
    );
  }
}

const MetaHead = () => (
  <Helmet>
    <title>Shreesh.dev</title>
    <meta
      name="description"
      content={`Some words written by Shreesh Bhat about dev, art, and more.`}
    />
    <meta
      property="og:description"
      content="Some words written by Shreesh Bhat about dev, art, and more."
    />
    <meta property="og:site_name" content="Shreesh Bhat" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@shreeshbhat" />
    <meta name="twitter:creator" content="shreeshbhat" />
    <meta name="twitter:title" content="Build cross-platform apps with web technologies" />
    <meta name="twitter:description" content="Build cross-platform apps with web technologies" />
    <meta name="twitter:image" content="https://capacitorjs.com/assets/img/og.png" />
    <meta property="og:image" content="https://capacitorjs.com/assets/img/og.png" />
    <meta property="og:url" content="https://capacitorjs.com/" />
  </Helmet>
)
