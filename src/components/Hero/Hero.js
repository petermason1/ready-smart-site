'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
    }
  }, []);

  return (
    <motion.section
      className={styles.hero}
      variants={isMobile ? fadeInUp : {}}
      initial={isMobile ? 'hidden' : false}
      animate={isMobile ? 'show' : false}
    >
      {/* === Urgency Banner === */}
      <AnimatePresence>
        <motion.div
          className={styles.urgencyBanner}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          🎉 Today Only: Free Smart Home Help — Book Now
        </motion.div>
      </AnimatePresence>

      {/* === Hero Container === */}
      <div className={styles.heroContainer}>
        <motion.div className={styles.heroContent} variants={fadeItem}>
          <h1 className={styles.heroTitle}>
            Smart Home Setup Without the Stress
          </h1>
          <p className={styles.heroDescription}>
            Automate lights, heating, and security — set up for you, explained simply. From £299.
          </p>
          <div className={styles.heroLocation}>
            📍 Based in Morpeth — covering the whole North East
          </div>
          <motion.div variants={fadeItem}>
            <Link href="/contact" className={styles.cta}>
              Get Free Advice Today
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.heroImageWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <Image
            src="/smart-home-preview.png"
            alt="Smart Home Setup"
            width={600}
            height={400}
            className={styles.heroImage}
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
