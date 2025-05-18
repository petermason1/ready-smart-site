'use client';

import { useState } from 'react';
import styles from './FooterCTA.module.css';
import Link from 'next/link';

export default function FooterCTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={styles.footerCTA}
      aria-labelledby="footer-cta-title"
    >
      <h2 id="footer-cta-title" className={styles.footerCTATitle}>
        Need Help With Your Smart Home?
      </h2>
      <p className={styles.footerCTADescription}>
        We’ll help you set up, automate, and simplify your home — no hassle, no confusion.
      </p>
      <Link
        href="/contact"
        className={`${styles.footerCTALink} ${isHovered ? styles.hovered : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        aria-label="Get free setup advice for your smart home"
      >
        Get Free Setup Advice
      </Link>
    </section>
  );
}
