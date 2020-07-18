import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import frontMatter from 'front-matter';
import marked from 'marked';
import Prism from 'prismjs';

const loadLanguages = require('prismjs/components/');

loadLanguages(['javascript', 'typescript', 'bash', 'java', 'swift']);

export interface RenderedBlog {
  title: string;
  slug: string;
  date: string;
  contents: string;
  preview: string;
  html: string;

  // All frontmatter attrs just in case-ies
  meta?: any;
}

const BLOG_DIR = 'blog';
const OUTPUT_FILE = 'src/assets/blog.json';

export function slugify(text: string) {
  if (!text) {
    return '';
  }
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/\.+/g, '-') // Replace periods with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

function getReadingTime(text: string): number {
  const wordsPerMinute = 180;
  const numberOfWords = text.split(/\s/g).length;
  return Math.ceil(numberOfWords / wordsPerMinute);
}

function formatReadingTime(readingTime: number): string {
  const cakeCount = Math.round(readingTime / 5);
    if (cakeCount > 3) {
      return `${new Array(cakeCount - 3).fill('🍰').join('')}`;
    }
    else {
      return `${new Array( cakeCount || 1).fill('🧁').join('')}`;
    }
}

async function buildPost(postFile: string): Promise<RenderedBlog> {
  const contents = await fs.promises.readFile(path.join(BLOG_DIR, postFile));

  const data = frontMatter<any>(contents.toString('utf-8'));

  const slug = slugify(data.attributes.title);

  // Use the "more" token system to generate a preview on the index page
  const MORE_TOKEN = '<!--more-->';
  const moreIndex = data.body.indexOf(MORE_TOKEN);
  const postPreview = moreIndex >= 0 ? data.body.slice(0, moreIndex) : '';
  const postBody = data.body;

  const parsedPreview = marked(postPreview, {
    highlight: (code, lang) => Prism.highlight(code, Prism.languages[lang], lang as any)
  })
  // TODO: could support over vars but for now just replace $POST with the
  // final URL of the post
  .replace(/\$POST/g, `/blog/${slug}`);

  const parsedBody = marked(postBody, {
    highlight: (code, lang) => Prism.highlight(code, Prism.languages[lang], lang as any)
  });

  const readingTime = getReadingTime(data.body);
  const emojisAsReadingTime = formatReadingTime(readingTime);

  const rendered = {
    title: data.attributes.title,
    slug,
    date: (data.attributes.date as Date).toISOString(),
    contents: contents.toString('utf-8'),
    length: readingTime,
    lengthInEmojis: emojisAsReadingTime,
    preview: parsedPreview,
    html: parsedBody,
    meta: data.attributes
  } as RenderedBlog;

  return rendered;
}

async function run() {
  const posts = await fs.promises.readdir(BLOG_DIR);

  let rendered;
  try {
    rendered = await Promise.all(posts.map(buildPost))
  } catch (e) {
    console.error('Unable to build blog', e);
    process.exit(1);
  }

  rendered.forEach(r => console.log(chalk.bold.green(`POST`), r.slug));

  const sorted = rendered.sort((a: RenderedBlog, b: RenderedBlog) => b.date.localeCompare(a.date));

  await fs.promises.writeFile(OUTPUT_FILE, JSON.stringify(sorted));
}
run();