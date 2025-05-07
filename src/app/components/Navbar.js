'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.innerWrapper}>
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.branding}>
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span>Ready Smart Homes</span>
          </Link>

          <button
            className={`${styles.burger} ${isOpen ? styles.open : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>

        <nav className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
          <Link href="/" onClick={handleLinkClick}>Home</Link>
          <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
          <Link href="/blog" onClick={handleLinkClick}>Blog</Link>
          <Link href="/smart-picks" onClick={handleLinkClick}>Smart Picks</Link>
        </nav>
      </div>
    </header>
  );
}
