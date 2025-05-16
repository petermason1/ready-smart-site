'use client';

import { useEffect, useState } from 'react';
import styles from './ScrollToTopButton.module.css';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible ? (
    <button onClick={scrollToTop} className={styles.scrollButton} aria-label="Back to Top">
      ↑
    </button>
  ) : null;
}
