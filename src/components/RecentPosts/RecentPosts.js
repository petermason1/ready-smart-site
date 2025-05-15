'use client';

import styles from './RecentPosts.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function RecentPosts({ posts }) {
  return (
    <section className={styles.recentPosts}>
       <div className="container">  
      <motion.h2
        className={styles.sectionTitle}
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        Recent Blog Posts
      </motion.h2>

      <motion.div
        className={styles.postGrid}
        variants={{ show: { transition: { staggerChildren: 0.2 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {posts.map((post) => (
          <motion.div key={post.slug} className={styles.postCard} variants={fadeInUp}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <Link href={`/blog/${post.slug}`} className={styles.ctaSmall}>
              Read More →
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <Link href="/blog" className={styles.cta}>
        View All Posts →
      </Link>
      </div>
    </section>
  );
}
