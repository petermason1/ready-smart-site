'use client';

import { useEffect, useState } from 'react';
import styles from './ScrollToTopButton.module.css';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 200;
      setIsVisible((prev) => prev !== shouldShow ? shouldShow : prev);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount too

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className={styles.scrollButton}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  ) : null;
}
