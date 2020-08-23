import { Component, h, Host, State } from '@stencil/core';
import Helmet from '@stencil/helmet';

@Component({
  tag: 'landing-page',
  styleUrl: 'landing-page.css'
})
export class LandingPage {
  @State() selectedCodeTab: string = 'notifications' ;
  render() {
    return (
      <Host>
        <MetaHead />
        <div class="image-wrapper">
          <img class="profile-image" width="390" height="328" src="/assets/img/profile.svg" alt="An illustration of a standing person wearing red jacket, white t-shirt, and blue jeans." />
        </div>
        <div class="text-wrapper">
          <p>
            Hi, I'm Shreesh Bhat, a Senior Software Engineer at Manhattan
            Associates, where I love building User Interfaces and framework to
            generate UIs.
            <br />
            My pronouns are they/their.
          </p>
          <p>
            I care about performance, inclusive design, and compassionate coding.
          </p>
          <p>
            In my spare time, you will often find me playing video games, cooking,
            listening to Opeth, table top gaming with my partner, or working on{" "}
            <a href="https://github.com/shreeshbhat/strike-off">Strike off</a>.
          </p>
          <p>
            You can check out my{" "}
            <a href="https://github.com/shreeshbhat">GitHub</a> or reach out to me
            on <a href="https://www.twitter.com/shreeshbhat">Twitter</a>.
          </p>
        </div>
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
    <meta name="twitter:image" content="https://shreesh.dev/assets/img/profile.svg" />
    <meta property="og:image" content="https://shreesh.dev/assets/img/profile.svg" />
    <meta property="og:url" content="https://shreesh.dev/" />
  </Helmet>
)
