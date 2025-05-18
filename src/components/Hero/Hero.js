'use client';

import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}>
        <h1 className={styles.title}>The Smart Home Upgrade</h1>
        <h2 className={styles.subheading}>You Deserve</h2>
        <p className={styles.description}>
          Instant, frustration-free automation for real life.<br />
          No jargon. No faff. Just results.
        </p>
        <p className={styles.promo}>Free Alexa Pop if you book before May 30th</p>

        <Link href="/contact" className={styles.ctaButton}>
          Book Free Consultation
        </Link>

        <p className={styles.trustQuote}>
          “Installed in a day — works brilliantly!” – Laura, Morpeth
        </p>

        <Link href="#testimonials" className={styles.secondaryCta}>
          See What Locals Say
        </Link>
      </div>
    </section>
  );
}
