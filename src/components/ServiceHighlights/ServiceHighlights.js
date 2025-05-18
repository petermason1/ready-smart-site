// src/components/ServiceHighlights.js
'use client';
import styles from './ServiceHighlights.module.css';

const highlights = [
  {
    icon: '🛠️',
    title: 'Install & Setup',
    desc: 'We’ll get your smart home tech up and running—no jargon or stress.',
  },
  {
    icon: '💡',
    title: 'Home Automation',
    desc: 'Custom automations for lights, heating, security and more.',
  },
  {
    icon: '📞',
    title: 'Ongoing Support',
    desc: 'Help when you need it—remote or in-person. No call centres.',
  },
  {
    icon: '🔄',
    title: 'Fix & Upgrade',
    desc: 'Sort out issues, upgrade routines, or connect new devices.',
  },
];

export default function ServiceHighlights() {
  return (
    <section className={styles.highlightsSection}>
      <h3 className={styles.highlightsTitle}>What I Can Do For You</h3>
      <div className={styles.highlightsGrid}>
        {highlights.map(({ icon, title, desc }, i) => (
          <div key={i} className={styles.highlightCard}>
            <span className={styles.icon} aria-hidden="true">{icon}</span>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        ))}
      </div>
      <a className={styles.cta} href="/pricing">See Packages & Pricing</a>
    </section>
  );
}
