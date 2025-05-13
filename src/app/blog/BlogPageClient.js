'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import styles from './Blog.module.css';

const POSTS_PER_PAGE = 12;

export default function BlogPageClient({ posts }) {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <main className={styles.blogWrapper}>
      {/* === Hero Section === */}
      <section className={styles.hero}>
        <h1>Smart Home Blog</h1>
        <p>
          Tips, guides, and ideas to level up your smart home. Learn to automate better, save energy, and take full control.
        </p>
      </section>

      {/* === Blog Post Grid === */}
      <div className={styles.postGrid}>
        {paginatedPosts.map((post) => (
          <article key={post.slug} className={styles.postCard}>
            <span className={styles.date}>
              {post.date
                ? new Date(post.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })
                : ''}
            </span>
            <h3>{post.title}</h3>
            {post.description && <p>{post.description}</p>}
            <Link href={`/blog/${post.slug}`} className={styles.ctaSmall}>
              Read More →
            </Link>
          </article>
        ))}
      </div>

      {/* === Pagination === */}
      {totalPages > 1 && (
        <nav className={styles.pagination}>
          {currentPage > 1 && (
            <Link href={`?page=${currentPage - 1}`} className={styles.pageButton}>
              ← Previous
            </Link>
          )}

          {Array.from({ length: totalPages }, (_, i) => {
            const page = i + 1;
            return (
              <Link
                key={page}
                href={`?page=${page}`}
                className={`${styles.pageButton} ${
                  currentPage === page ? styles.pageButtonActive : ''
                }`}
              >
                {page}
              </Link>
            );
          })}

          {currentPage < totalPages && (
            <Link href={`?page=${currentPage + 1}`} className={styles.pageButton}>
              Next →
            </Link>
          )}
        </nav>
      )}
    </main>
  );
}
