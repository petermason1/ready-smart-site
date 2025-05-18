'use client';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/hero-luxury.png"
        alt="Luxury smart home interior"
        fill
        priority
        className={styles.bgImage}
      />
      <div className={styles.overlay} />

      {/* Card content */}
      <div className={styles.content}>
        <h1 className={styles.titleMain}>The Smart Home Upgrade</h1>
        <h2 className={styles.titleSub}>You Deserve</h2>
        <p className={styles.subhead}>
          Instant, frustration-free automation for real life.<br />
          No jargon. No faff. Just results.
        </p>
      </div>

      {/* Button below card */}
      <div className={styles.ctaWrapper}>
        <a href="/contact" className={styles.cta}>Get Started</a>
      </div>
    </section>
  );
}
