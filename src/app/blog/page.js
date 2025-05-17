// === app/blog/page.js ===
import { getAllPosts } from '@/lib/mdx';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// ✅ Updated import path to use the Blog component folder
const BlogPageClient = dynamic(() => import('@/components/Blog/BlogPageClient'), { suspense: true });

export default async function BlogPage() {
  const posts = await getAllPosts();

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <Suspense fallback={<div>Loading blog posts…</div>}>
      <BlogPageClient posts={posts} />
    </Suspense>
  );
}
