import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export async function getAllPosts() {
  const fileNames = await fs.readdir(postsDirectory);
  const mdxFiles = fileNames.filter((file) => file.endsWith('.mdx'));

  const posts = await Promise.all(
    mdxFiles.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return { ...data, slug };
    })
  );

  return posts
    .filter((post) => post.published === true)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  if (!data.published) {
    throw new Error(`Post "${slug}" is not published.`);
  }

  return { ...data, content, slug };
}

export async function getLatestPublishedPost() {
  const posts = await getAllPosts();
  return posts[0];
}

export async function getRecentPosts(limit = 3) {
  const posts = await getAllPosts();
  return posts.slice(1, limit + 1); // skip the latest
}
