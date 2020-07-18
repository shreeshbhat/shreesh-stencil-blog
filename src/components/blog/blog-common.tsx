import { Build, h } from '@stencil/core';
import { href } from 'stencil-router-v2';

import Router from '../../router';

import { RenderedBlog } from '../../models';
import { parseDate } from '../../utils/parse-date';

const getBlogPostUrl = (doc: RenderedBlog) => {
  return `/blog/${doc.slug}`;
};  


export const BlogPost = ({ post, single = true }: { post: RenderedBlog, single?: boolean }) => {
  const content = single ?
                    post.html :
                    post.preview || post.html;

  return (
    <div class="blog-post__wrap">
      <div class="blog-post">
        <h2><a href={getBlogPostUrl(post)}>{post.title}</a></h2>
        <PostDescription post={post}/>
        <div class="blog-post__tag-wrap">
          {post.meta.tags.map(tag => <span class="blog-post__tag">{tag}</span>)}
        </div>
        <PostDate dateString={post.date} />
        <PostContent html={content} />
        {!single && post.preview ? <PostContinueReading post={post} /> : null}
      </div>
    </div>
  )
}

const PostContent = ({ html }: { html: string }) => (
  <div innerHTML={html} />
);

const PostContinueReading = ({ post }: { post: RenderedBlog }) => 
  <a class="blog-post__continue-reading" {...href(getBlogPostUrl(post), Router)}>Continue reading <ion-icon name="arrow-forward" /></a>

const PostDate = ({ dateString }: { dateString: string }) => {
  const date = parseDate(dateString);
  return (
    <div class="blog-post__date">
      <span>{date}</span>
    </div>
  );
}

const PostDescription = ({ post }: { post: RenderedBlog }) => (
  <span class="blog-post__description">{post.length} min read {post.lengthInEmojis}</span>
);