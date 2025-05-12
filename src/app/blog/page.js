// === app/blog/page.js ===
import { getAllPosts } from '@/lib/mdx';
import BlogPageClient from './BlogPageClient';

export default async function BlogPage() {
  const posts = await getAllPosts();
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return <BlogPageClient posts={posts} />;
}
