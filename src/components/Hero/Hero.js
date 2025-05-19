'use client';

import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}>
        <h1>The Smart Home Upgrade You Deserve</h1>
        <p>Instant, frustration-free automation for real life.<br /> No jargon. No faff. Just results.</p>
        <Link href="/contact" className={styles.ctaButton}>
          Book Free Consultation
        </Link>
      </div>
    </section>
  );
}
