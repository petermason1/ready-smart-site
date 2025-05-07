'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const burgerRef = useRef(null); // 🔧 track burger button

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // ✅ Close menu if click happens outside nav & burger
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <header className={styles.navbar}>
      <div className={styles.innerWrapper}>
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.branding}>
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span>Ready Smart Homes</span>
          </Link>

          <button
            ref={burgerRef}
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

        <nav
          ref={navRef}
          className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}
        >
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
          <Link href="/blog" onClick={closeMenu}>Blog</Link>
          <Link href="/smart-picks" onClick={closeMenu}>Smart Picks</Link>
        </nav>
      </div>
    </header>
  );
}
