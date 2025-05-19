import { getAllPosts } from '@/lib/mdx';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const BlogGrid = dynamic(() => import('@/components/BlogGrid'), { suspense: true });

export default async function BlogPage() {
  const posts = await getAllPosts();
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <Suspense fallback={<div>Loading blog posts…</div>}>
      <BlogGrid posts={posts} />
    </Suspense>
  );
}
