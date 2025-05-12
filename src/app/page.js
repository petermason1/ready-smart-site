import { getLatestPublishedPost, getRecentPosts } from '@/lib/mdx';
import HomePageClient from './components/HomePageClient';

export default async function Page() {
  const latestPost = await getLatestPublishedPost();
  const recentPosts = await getRecentPosts(3);

  return <HomePageClient latestPost={latestPost} recentPosts={recentPosts} />;
}
