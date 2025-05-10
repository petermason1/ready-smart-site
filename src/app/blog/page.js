import Link from 'next/link';
import { getAllPosts } from '../../../lib/mdx';
import styles from './Blog.module.css';

export const metadata = {
  title: 'Smart Home Blog | Ready Smart Homes',
  description: 'Tips, guides, and advice on smart home automation.',
};

export default async function BlogPage() {
  const posts = await getAllPosts(); // ✅ properly await async function

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Ready Smart Blog</h1>
      <p className={styles.subtitle}>
        Smart tips, automation advice, and DIY guides to upgrade your home.
      </p>

      <div className={styles.grid}>
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <span className={styles.readMore}>
  Read more <span aria-hidden="true">→</span>
</span>

          </Link>
        ))}
      </div>
    </main>
  );
}
