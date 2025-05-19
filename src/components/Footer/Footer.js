'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <nav className={styles.footerLinks}>
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/smart-picks">Smart Picks</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className={styles.socials}>
          <a
            href="https://facebook.com/readysmarthomes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <div className={styles.iconWrap}>
              <Image src="/icons/facebook.svg" alt="Facebook" fill />
            </div>
          </a>

          <a
            href="https://instagram.com/readysmarthomes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <div className={styles.iconWrap}>
              <Image src="/icons/instagram.svg" alt="Instagram" fill />
            </div>
          </a>
        </div>

        <p className={styles.footerCopyright}>
          &copy; {new Date().getFullYear()} Ready Smart Homes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
