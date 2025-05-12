// === app/blog/page.js ===
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import styles from './Blog.module.css';

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
    notFound();
  }

  return (
    <main className={styles.blogWrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.meta}>
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-GB')}</time>
        </p>
      </header>

      <article className={`mdxContent ${styles.mdxContent}`}>
        <MDXRemote source={post.content} />
      </article>

      <footer className={styles.footer}>
        <p>Found this helpful? Share it:</p>
        <div className={styles.footerLinks}>
          <a
            href={`https://x.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://www.readysmarthomes.com/blog/${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
          >❌ X</a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https://www.readysmarthomes.com/blog/${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
          >👍 Facebook</a>
          <a
            href={`mailto:?subject=${encodeURIComponent(post.title)}&body=Check this out: https://www.readysmarthomes.com/blog/${post.slug}`}
          >✉️ Email</a>
        </div>
      </footer>
    </main>
  );
}
