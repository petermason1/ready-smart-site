import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  try {
    const post = await getPostBySlug(params.slug);
    return {
      title: post.title,
      description: post.description,
    };
  } catch {
    return { title: 'Not Found' };
  }
}

export default async function PostPage({ params }) {
  let post;

  try {
    post = await getPostBySlug(params.slug);
  } catch {
    notFound(); // triggers 404
  }

  return (
    <main style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{post.title}</h1>
      <p style={{ color: '#777', marginBottom: '2rem' }}>
        <em>{new Date(post.date).toLocaleDateString('en-GB')}</em>
      </p>

      <article className="mdxContent">
        <MDXRemote source={post.content} />
      </article>

      <footer style={{ marginTop: '3rem', textAlign: 'center', paddingBottom: '4rem' }}>
        <p>Found this helpful? Share it:</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
          <a href={`https://x.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://www.readysmarthomes.com/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">❌ X</a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.readysmarthomes.com/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">👍 Facebook</a>
          <a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=Check this out: https://www.readysmarthomes.com/blog/${post.slug}`}>✉️ Email</a>
        </div>
      </footer>
    </main>
  );
}
