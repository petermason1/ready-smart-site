'use client';

import styles from './ServiceHighlights.module.css';
import utils from '@/styles/Utilities.module.css';
import animations from '@/styles/Animation.module.css';

const highlights = [
  {
    icon: '🛠️',
    title: 'Install & Setup',
    desc: 'We’ll get your smart home tech up and running — no jargon or stress.',
  },
  {
    icon: '💡',
    title: 'Home Automation',
    desc: 'Custom automations for lighting, heating, security and more.',
  },
  {
    icon: '📞',
    title: 'Ongoing Support',
    desc: 'Help when you need it — remote or in-person. No call centres.',
  },
  {
    icon: '🔄',
    title: 'Fix & Upgrade',
    desc: 'Sort out issues, upgrade routines, or connect new devices.',
  },
  {
    icon: '🔐',
    title: 'Security Integration',
    desc: 'Install and link up cameras, motion sensors, door/window alerts.',
  },
  {
    icon: '📦',
    title: 'Smart Device Advice',
    desc: 'Help choosing the right tech before you buy — no upsells.',
  },
];


export default function ServiceHighlights() {
  return (
    <section className={`${styles.highlightsSection} ${utils.maxWidth}`}>
      <h2 className={styles.highlightsTitle}>Services</h2>
      <div className={`${utils.grid} ${utils['grid-cols-1']} ${utils['grid-cols-2']} ${utils['grid-cols-3']}`}>
        {highlights.map(({ icon, title, desc }, i) => (
          <div
            key={i}
            className={`${styles.highlightCard} ${animations.slideUp} ${animations.hoverShadow}`}
          >
            <div className={styles.highlightHeader}>
              <span className={styles.icon} aria-hidden="true">{icon}</span>
              <h4>{title}</h4>
            </div>
            <p>{desc}</p>
          </div>
        ))}
      </div>
      <a className={styles.cta} href="/pricing">See Packages & Pricing</a>
    </section>
  );
}
