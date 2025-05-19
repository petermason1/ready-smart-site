'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <motion.div
        className={styles.heroContent}
        initial="hidden"
        animate="show"
        variants={{
          show: { transition: { staggerChildren: 0.18 } }
        }}
      >
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          The Smart Home Upgrade
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
        >
          Instant, frustration-free automation for real life.
        </motion.p>

        <motion.p
          className={styles.highlightLine}
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.65, duration: 0.45 }}
        >
          <span className={styles.highlightWord}>No jargon.</span>{' '}
          <span className={styles.highlightWord}>No faff.</span>{' '}
          <span className={styles.highlightWord}>Just results.</span>
        </motion.p>

        <motion.a
          href="/contact"
          className={styles.ctaButton}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          Book Free Consultation
        </motion.a>
      </motion.div>
    </section>
  );
}
