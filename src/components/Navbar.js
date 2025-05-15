'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const burgerRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // ✅ Close mobile nav on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(e.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // ✅ Apply 'scrolled' class on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    handleScroll(); // check on initial load
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? 'scrolled' : ''}`}>
      <div className={styles.innerWrapper}>
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.branding}>
            <div className={styles.logoTextWrapper}>
              <div className={styles.logoPulse}>
                <Image src="/logo.png" alt="Logo" width={40} height={40} />
              </div>
              <span className={styles.brandText}>Ready Smart Homes</span>
            </div>
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
          <Link href="/pricing" onClick={closeMenu}>Pricing</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
          <Link href="/blog" onClick={closeMenu}>Blog</Link>
          <Link href="/smart-picks" onClick={closeMenu}>Smart Picks</Link>
        </nav>
      </div>
    </header>
  );
}
