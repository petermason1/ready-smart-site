import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

/**
 * Reads and parses a single MDX file.
 * @param {string} fileName - The MDX filename (e.g., post.mdx)
 * @returns {Promise<object>} Parsed frontmatter and slug
 */
async function parsePostFile(fileName) {
  const slug = fileName.replace(/\.mdx$/, '');
  const filePath = path.join(POSTS_DIR, fileName);
  const fileContent = await fs.readFile(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return { ...data, content, slug };
}

/**
 * Retrieves and parses all .mdx blog posts.
 * Filters unpublished and sorts by descending date.
 * @returns {Promise<Array>} List of published blog posts
 */
export async function getAllPosts() {
  const files = await fs.readdir(POSTS_DIR);
  const mdxFiles = files.filter((f) => f.endsWith('.mdx'));

  const posts = await Promise.all(
    mdxFiles.map((file) => parsePostFile(file))
  );

  return posts
    .filter((post) => post?.published === true)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Fetches a single post by slug.
 * @param {string} slug - The post slug
 * @returns {Promise<object>} Full post data
 */
export async function getPostBySlug(slug) {
  try {
    const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    if (!data.published) {
      throw new Error(`Post "${slug}" is not published.`);
    }

    return { ...data, content, slug };
  } catch (err) {
    console.error(`Error loading post "${slug}":`, err.message);
    throw err;
  }
}

/**
 * Returns the most recent published blog post.
 * @returns {Promise<object|null>}
 */
export async function getLatestPublishedPost() {
  const posts = await getAllPosts();
  return posts[0] ?? null;
}

/**
 * Returns recent published posts, excluding the latest.
 * @param {number} limit - Number of posts to return (default 3)
 * @returns {Promise<Array>}
 */
export async function getRecentPosts(limit = 3) {
  const posts = await getAllPosts();
  return posts.slice(1, limit + 1);
}
