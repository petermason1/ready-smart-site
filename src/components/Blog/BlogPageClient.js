'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import styles from '@/components/Blog/Blog.module.css';

const POSTS_PER_PAGE = 12;

export default function BlogPageClient({ posts }) {
  const searchParams = useSearchParams(); // ✅ moved to top
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  // Defensive defaults
  const safePosts = Array.isArray(posts) ? posts : [];
  const totalPages = Math.ceil(safePosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = safePosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Debugging
  console.log('[BlogPageClient] Current page:', currentPage);
  console.log('[BlogPageClient] Total pages:', totalPages);
  console.log('[BlogPageClient] Displaying:', paginatedPosts.map(p => p.slug));

  return (
    <main className={styles.blogWrapper}>
      <section className={styles.hero}>
        <h1>Smart Home Blog</h1>
        <p>
          Tips, guides, and ideas to level up your smart home. Learn to automate better, save energy, and take full control.
        </p>
      </section>

      <section className={styles.postGrid}>
        {paginatedPosts.length === 0 ? (
          <p className={styles.error}>⚠️ No posts found on this page.</p>
        ) : (
          paginatedPosts.map((post) => (
            <article key={post.slug} className={styles.card}>
              <span className={styles.date}>
                {post.date
                  ? new Date(post.date).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })
                  : ''}
              </span>
              <h3>{post.title}</h3>
              {post.description && <p>{post.description}</p>}
              <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                Read More →
              </Link>
            </article>
          ))
        )}
      </section>

      {totalPages > 1 && (
        <nav className={styles.pagination} aria-label="Pagination">
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
