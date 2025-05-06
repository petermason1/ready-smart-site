'use client';

import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.branding}>Ready Smart Homes</div>

      <div className={styles.footerNav}>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/smart-picks">Smart Picks</Link>
      </div>

      <div className={styles.socialIcons}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/twitter.png" alt="Twitter" width={24} height={24} />
        </a>
      </div>

      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Ready Smart Homes. All rights reserved.
      </div>
    </footer>
  );
}
