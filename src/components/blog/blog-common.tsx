import { h } from '@stencil/core';
import { RenderedBlog } from '../../models';
import { parseDate } from '../../utils/parse-date';

const getBlogPostUrl = (doc: RenderedBlog) => {
  return `/blog/${doc.slug}`;
};  


export const BlogPost = ({ post, single = true }: { post: RenderedBlog, single?: boolean }) => {
  return (
    <div class="blog-post__wrap">
      <div class="blog-post">
        {single && <h2>{post.title}</h2> }
        {!single && <h2><a href={getBlogPostUrl(post)}>{post.title}</a></h2> }
        <PostDescription post={post}/>
        <div class="blog-post__tag-wrap">
          {post.meta.tags.map(tag => <span class="blog-post__tag">{tag}</span>)}
        </div>
        <PostDate dateString={post.date} />
        {!single && <p class="blog-post__preview">{post.preview} </p>}
        {single && <PostContent html={post.html} /> }
      </div>
    </div>
  )
}

const PostContent = ({ html }: { html: string }) => (
  <div innerHTML={html} />
);

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