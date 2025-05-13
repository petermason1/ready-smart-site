'use client';

import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoArea}>
          <Image src="/logo.png" alt="Ready Smart Homes Logo" width={32} height={32} />
          <span className={styles.brand}>Ready Smart Homes</span>
        </div>

        <nav className={styles.footerNav}>
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/smart-picks">Smart Picks</Link>
        </nav>

        <div className={styles.social}>
          <a href="https://www.facebook.com/readysmarthomes" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://www.instagram.com/readysmarthomes" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://x.com/ReadySmartHomes" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/twitter.png" alt="Twitter" width={24} height={24} />
          </a>
        </div>

        <div className={styles.legal}>
          &copy; {new Date().getFullYear()} Ready Smart Homes. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
