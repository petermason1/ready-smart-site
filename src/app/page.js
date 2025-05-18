// src/app/page.js

import { getAllPosts } from '@/lib/mdx';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically load the homepage client component with suspense for SSR/CSR split
const HomePageClient = dynamic(() => import('@/components/HomePageClient'), {
  suspense: true,
});

export default async function HomePage() {
  // Fetch all blog posts for the carousel
  const allPosts = await getAllPosts();

  return (
    <Suspense fallback={<div>Loading homepage...</div>}>
      <HomePageClient allPosts={allPosts ?? []} />
    </Suspense>
  );
}
