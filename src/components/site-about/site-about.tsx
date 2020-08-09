import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "site-about",
  styleUrl: "site-about.css",
})
export class SiteAbout {
  render() {
    return (
      <Host>
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
      </Host>
    );
  }
}
