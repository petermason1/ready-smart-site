'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const burgerRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Smart Picks', href: '/smart-picks' },
    { name: 'Get Free Advice', href: '/contact', cta: true },
  ];

  // Toggle burger menu
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Close on outside click
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

  // Scroll shadow toggle (throttled)
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
      });
    };
    handleScroll(); // initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <div className={styles.innerWrapper}>
        {/* === Branding / Logo === */}
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.branding} aria-label="Go to homepage">
            <div className={styles.logoTextWrapper}>
              <div className={styles.logoPulse}>
                <Image
                  src="/logo.png"
                  alt="Ready Smart Homes logo"
                  width={40}
                  height={40}
                  priority
                />
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
            aria-controls="main-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* === Navigation Links === */}
        <nav
          id="main-navigation"
          ref={navRef}
          className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}
          role="navigation"
          aria-label="Main navigation"
        >
          {navLinks.map(({ name, href, cta }) => (
            <Link
              key={name}
              href={href}
              prefetch={false}
              onClick={closeMenu}
              className={`
                ${pathname === href ? styles.active : ''}
                ${cta ? styles.ctaLink : ''}
              `}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
