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
    <motion.section
      className={styles.hero}
      initial="hidden"
      animate="show"
      variants={fadeInUp}
      aria-labelledby="hero-heading"
    >
      {/* === Urgency Banner === */}
      <div className={styles.urgencyBanner} role="alert">
        💬 “Not Sure Where to Start? Get Free Setup Advice – Same Day Reply.”
      </div>

      <div className={styles.heroContainer}>
        {/* === Text Content === */}
        <div className={styles.heroContent}>
          <h1 id="hero-heading" className={styles.heroTitle}>
            Smart Home Setup Without the Stress
          </h1>

          <p className={styles.heroDescription}>
            We install smart plugs, lights, sensors, and automations — all fully
            connected with Alexa, Apple, or your phone. No confusion, no tech
            overwhelm — just a smarter home from £299.
          </p>

          <div className={styles.heroLocation}>
            <span>📍 Based in Morpeth — covering Newcastle, Northumberland & the North East.</span>
          </div>

          <Link href="/contact" className={styles.cta}>
            Get Free Advice Today
          </Link>
        </div>

        {/* === Image === */}
        <div className={styles.heroImageWrapper}>
          <Image
            src="/smart-home-preview.png"
            alt="Illustration of a smart home system"
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
