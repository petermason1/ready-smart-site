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
    >
      {/* === Urgency Banner === */}
      <div className={styles.urgencyBanner}>
        🎉 Today Only: Free Smart Home Help — Book Now for Local Setup Advice
      </div>

      <div className={styles.heroContainer}>
        {/* === Text Content === */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Smart Home Setup Without the Stress
          </h1>

          <p className={styles.heroDescription}>
            We install smart plugs, lights, sensors, and automations — all fully
            connected with Alexa, Apple, or your phone. No confusion, no tech
            overwhelm — just a smarter home from £299.
          </p>

          <div className={styles.heroLocation}>
            <span>📍 Smart home setup based in Morpeth — covering the whole North East.</span>
          </div>

          <Link href="/contact" className={styles.cta}>
            Get Free Advice Today
          </Link>
        </div>

        {/* === Image === */}
        <div className={styles.heroImageWrapper}>
          <Image
            src="/smart-home-preview.png"
            alt="Preview of a smart home setup"
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
