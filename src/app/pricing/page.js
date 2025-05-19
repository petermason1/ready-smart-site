'use client';

import { useEffect, useRef } from 'react';
import styles from './Pricing.module.css';
import utils from '@/styles/Utilities.module.css';
import Link from 'next/link';

const services = [
  {
    emoji: '⚡',
    title: 'Basic Smart Setup',
    price: 'From £50 / hour',
    desc: [
      'Quick setup for Alexa, HomeKit, lights, plugs, etc.',
      'Perfect for beginners with a few devices.',
    ],
  },
  {
    emoji: '🛠️',
    title: 'Automation Tune-Up & Fixes',
    price: 'From £40 / job',
    desc: [
      'Fix broken automations and routines.',
      'Customise everything to your needs.',
    ],
  },
  {
    emoji: '🏡',
    title: 'Full Custom Installation',
    price: 'From £350 / project',
    desc: [
      'Design and install lighting, sensors, and security.',
      'Tailored to your lifestyle and budget.',
    ],
  },
  {
    emoji: '📦',
    title: 'Monthly Support & Monitoring',
    price: 'From £15 / month',
    desc: [
      'Ongoing checks, troubleshooting, and updates.',
      'Great for landlords or busy families.',
    ],
  },
  {
    emoji: '💾',
    title: 'Personalised User Guide',
    price: 'From £25 / guide',
    desc: [
      'Step-by-step guide with photos.',
      'Perfect for anyone new to smart tech.',
    ],
  },
  {
    emoji: '🛡️',
    title: 'Security Setup & Monitoring',
    price: 'From £150 / project',
    desc: [
      'Install cameras, sensors, and alarms.',
      'Set up remote monitoring for peace of mind.',
    ],
  },
];

export default function PricingPage() {
  const gridRef = useRef(null);

  useEffect(() => {
    function equalizeRowHeights() {
      const cards = gridRef.current?.children;
      if (!cards) return;

      // Reset all heights
      Array.from(cards).forEach(card => {
        card.style.height = 'auto';
      });

      const rowTops = {};
      Array.from(cards).forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (!rowTops[top]) rowTops[top] = [];
        rowTops[top].push(card);
      });

      Object.values(rowTops).forEach(row => {
        const maxHeight = Math.max(...row.map(card => card.offsetHeight));
        row.forEach(card => (card.style.height = `${maxHeight}px`));
      });
    }

    equalizeRowHeights();
    window.addEventListener('resize', equalizeRowHeights);
    return () => window.removeEventListener('resize', equalizeRowHeights);
  }, []);

  return (
    <main className={`${styles.wrapper} ${utils.maxWidth}`}>
      <h1 className={styles.title}>Smart Home Services & Pricing</h1>
      <p className={styles.subtitle}>
        Friendly, flexible help to make your smart tech work properly.
      </p>

      <div className={styles.grid} ref={gridRef}>
        {services.map(({ emoji, title, price, desc }, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardInner}>
              <span className={styles.emoji}>{emoji}</span>
              <h2 className={styles.heading}>{title}</h2>
              <p className={styles.price}>{price}</p>
              <ul className={styles.features}>
                {desc.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <h2>Ready to get started?</h2>
        <p>Contact me today for a no-pressure quote or advice.</p>
        <Link href="/contact" className={styles.ctaBtn}>
          Get in Touch
        </Link>
      </div>
    </main>
  );
}
