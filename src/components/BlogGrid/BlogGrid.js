'use client';

import styles from './BlogGrid.module.css';
import utils from '@/styles/Utilities.module.css';
import animations from '@/styles/Animation.module.css';
import Image from 'next/image';
import Link from 'next/link';

const fallbackImage = '/carousel/default.jpg';

export default function BlogGrid({ posts }) {
  if (!Array.isArray(posts) || posts.length === 0) return null;

  return (
    <section className={styles.blogSection} aria-labelledby="blog-section-title">
      <div className={utils.maxWidth}>
        <h2 id="blog-section-title" className={styles.title}>
          Latest Blog Posts
        </h2>

        <div className={styles.grid}>
          {posts.map((post, i) => (
            <div key={post.slug || i} className={`${styles.card} ${animations.slideUp}`}>
              <div className={styles.imageWrap}>
                <Image
                  src={post.coverImage?.length > 2 ? post.coverImage : fallbackImage}
                  alt={post.title}
                  width={320}
                  height={180}
                  className={styles.image}
                />
              </div>

              <h3 className={styles.cardTitle}>{post.title}</h3>
              <p className={styles.desc}>{post.description}</p>
              <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
