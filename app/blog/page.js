import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export const metadata = {
  title: 'Smart Home Blog | Ready Smart Homes',
  description: 'Tips, guides, and advice on smart home automation.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.slug} style={{ marginBottom: '2rem' }}>
          <h2>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <p>{post.description}</p>
        </div>
      ))}
    </main>
  );
}
