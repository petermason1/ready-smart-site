'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import styles from './BlogCarousel.module.css';

const SLIDES_TO_SHOW = 3;

export default function BlogCarousel({ posts }) {
  const total = Array.isArray(posts) ? posts.length : 0;
  const [startIndex, setStartIndex] = useState(0);
  const fallbackImage = '/carousel/default.jpg';

  // Always call useMemo regardless of posts length
  const visiblePosts = useMemo(() => {
    if (!Array.isArray(posts) || total === 0) return [];
    return Array.from({ length: Math.min(SLIDES_TO_SHOW, total) }, (_, i) => posts[(startIndex + i) % total]);
  }, [startIndex, posts, total]);

  if (visiblePosts.length === 0) {
    return <div>No blog posts available.</div>;
  }

  function prevSlide() {
    setStartIndex((prev) => (prev - 1 + total) % total);
  }

  function nextSlide() {
    setStartIndex((prev) => (prev + 1) % total);
  }

  return (
    <section className={styles.carouselSection}>
      <h2 className={styles.carouselTitle}>Featured Blog Posts</h2>

      <div className={styles.carouselWrapper}>
        <button
          className={styles.arrow}
          onClick={prevSlide}
          aria-label="Previous slide"
          type="button"
        >
          &#8592;
        </button>

        <div className={styles.carouselTrack}>
          {visiblePosts.map((post, idx) => (
            <article key={post.slug || idx} className={styles.carouselCard}>
              <div className={styles.imageWrap}>
                <Image
                  src={
                    post.coverImage && post.coverImage.length > 2
                      ? post.coverImage
                      : fallbackImage
                  }
                  alt={post.title}
                  width={320}
                  height={180}
                  className={styles.image}
                  priority={false}
                  loading="lazy"
                />
              </div>
              <div className={styles.carouselContent}>
                <h3>{post.title}</h3>
                {post.description && <p>{post.description}</p>}
                <a href={`/blog/${post.slug}`} className={styles.carouselReadMore} type="button">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>

        <button
          className={styles.arrow}
          onClick={nextSlide}
          aria-label="Next slide"
          type="button"
        >
          &#8594;
        </button>
      </div>

      <div className={styles.dots}>
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === startIndex ? styles.active : ''}`}
            onClick={() => setStartIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}
