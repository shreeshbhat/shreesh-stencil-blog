import { Component, Prop, State, h, Host } from '@stencil/core';

import { RenderedBlog } from '../../models';
import { BlogPost } from './blog-common';

import posts from '../../assets/blog.json';

@Component({
  tag: 'blog-post',
  styleUrl: 'blog-page.scss',
  shadow: false
})
export class BlogPage {
  @Prop() slug: string;

  @State() post?: RenderedBlog;

  async componentWillLoad() {
    const { slug } = this;

    if (slug) {
      this.slug = slug;
      this.post = (posts as RenderedBlog[]).find(p => p.slug === this.slug);
    }
  }

  render() {
    if (this.slug && this.post) {
      return (
        <Host>
          <BlogPost post={this.post} />
        </Host>
      )
    }
    return null;
  }
}