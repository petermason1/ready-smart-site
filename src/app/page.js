// src/app/page.js
import { getLatestPublishedPost, getRecentPosts } from '@/lib/mdx';
import HomePageClient from '@/components/HomePageClient';

export default async function Page() {
  const [latestPost, recentPosts] = await Promise.all([
    getLatestPublishedPost(),
    getRecentPosts(3),
  ]);

  return (
    <HomePageClient
      latestPost={latestPost ?? null}
      recentPosts={recentPosts ?? []}
    />
  );
}
