import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';
import styles from '@/app/blog/Blog.module.css';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className={styles.blogWrapper}>
      <h1 className={styles.title}>Smart Home Blog</h1>
      <p className={styles.intro}>Tips, guides, and ideas to level up your smart home.</p>

      <div className={styles.postGrid}>
        {posts.map((post) => (
          <div key={post.slug} className={styles.postCard}>
            <h3>{post.title || 'Untitled'}</h3>
<p>{post.description || 'No summary available.'}</p>

            <p>{post.description}</p>
            <Link href={`/blog/${post.slug}`} className={styles.ctaSmall}>
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
