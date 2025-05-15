'use client';

import styles from './Hero.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <motion.section className={styles.hero} initial="hidden" animate="show" variants={fadeInUp}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Make Your Home Smarter, Safer & Simpler — Without Lifting a Finger
          </h1>
          <p className={styles.heroDescription}>
            We install smart plugs, lights, and sensors — all fully set up and working with your phone or Alexa.
            No jargon, no hassle, just a smarter home for £299.
          </p>
          <Link href="/contact" className={styles.cta}>
            Book Your Free Setup Call
          </Link>
        </div>

        <div className={styles.heroImageWrapper}>
          <Image
            src="/smart-home-preview.png"
            alt="Smart Home Setup"
            width={600}
            height={400}
            className={styles.heroImage}
            priority
          />
        </div>
      </div>
    </motion.section>
  );
}
