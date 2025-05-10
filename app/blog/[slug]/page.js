import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug } from '@/lib/mdx';

export default async function PostPage({ params }) {
  const post = getPostBySlug(params.slug);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{post.title}</h1>
      <p><em>{post.date}</em></p>
      <MDXRemote source={post.content} />
    </main>
  );
}
