// src/app/page.js

import { getLatestPublishedPost, getRecentPosts } from '@/lib/mdx';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically load the homepage client component with suspense
const HomePageClient = dynamic(() => import('@/components/HomePageClient'), {
  suspense: true,
});

export default async function HomePage() {
  // Fetch latest blog post and 3 recent posts in parallel
  const [latestPost, recentPosts] = await Promise.all([
    getLatestPublishedPost(),
    getRecentPosts(3),
  ]);

  return (
    <Suspense fallback={<div>Loading homepage...</div>}>
      <HomePageClient
        latestPost={latestPost ?? null}
        recentPosts={recentPosts ?? []}
      />
    </Suspense>
  );
}
