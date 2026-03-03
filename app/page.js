import { getAllPosts } from '@/lib/mdx';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const HomePageClient = dynamic(() => import('@/components/HomePageClient'), {
  suspense: true,
});

export default async function HomePage() {
  const allPosts = await getAllPosts();

  return (
    <Suspense fallback={<div>Loading homepage...</div>}>
      <HomePageClient allPosts={allPosts ?? []} />
    </Suspense>
  );
}
