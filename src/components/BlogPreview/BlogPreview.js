'use client';

import styles from './BlogPreview.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function BlogPreview({ post }) {
  if (!post) {
    console.warn('[BlogPreview] No post data provided.');
    return null;
  }

  return (
    <section className={styles.blogPreview}>
      <div className={styles.container}>
        <motion.div
          className={styles.card}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className={styles.sectionTitle}>Latest Blog Post</h2>
          <h3 className={styles.postTitle}>{post.title}</h3>
          {post.description && <p className={styles.description}>{post.description}</p>}
          <Link href={`/blog/${post.slug}`} className={styles.ctaSmall}>
            Read More →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
