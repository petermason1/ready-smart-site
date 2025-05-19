'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import utils from '@/styles/Utilities.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Smart Picks', href: '/smart-picks' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`${utils.maxWidth} ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="Ready Smart Homes" width={36} height={36} />
          <span className={styles.logoText}>Ready Smart Homes</span>
        </Link>

        <nav className={styles.links}>
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`${styles.link} ${pathname === href ? styles.active : ''}`}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}