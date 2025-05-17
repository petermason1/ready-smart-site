'use client';

import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* === Logo & Brand === */}
        <div className={styles.logoArea}>
          <Image src="/logo.png" alt="Ready Smart Homes Logo" width={32} height={32} />
          <span className={styles.brand}>Ready Smart Homes</span>
        </div>

        {/* === Footer Navigation === */}
        <nav className={styles.footerNav} aria-label="Footer">
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/smart-picks">Smart Picks</Link>
        </nav>

        {/* === Mobile: Back to Top === */}
        <Link href="#top" className={styles.backToTop} aria-label="Back to top of page">
          ↑ Back to Top
        </Link>

        {/* === Social Links === */}
        <div className={styles.social} aria-label="Social media links">
          <a href="https://www.facebook.com/readysmarthomes" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://www.instagram.com/readysmarthomes" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://x.com/ReadySmartHomes" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/twitter.png" alt="Twitter/X" width={24} height={24} />
          </a>
        </div>

        {/* === Legal === */}
        <div className={styles.legal}>
          &copy; {year} Ready Smart Homes. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
