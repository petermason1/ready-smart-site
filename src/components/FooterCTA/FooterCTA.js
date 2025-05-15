'use client';

import styles from './FooterCTA.module.css';
import Link from 'next/link';

export default function FooterCTA() {
  return (
    <section className={styles.footerCTA}>
      <h2 className={styles.footerCTATitle}>
        Need Help With Your Smart Home?
      </h2>
      <p className={styles.footerCTADescription}>
        We’ll help you set up, automate, and simplify your home — no hassle, no confusion.
      </p>
      <Link href="/contact" className={styles.footerCTALink}>
        Get Free Setup Advice
      </Link>
    </section>
  );
}
