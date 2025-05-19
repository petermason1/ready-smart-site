'use client';

import styles from './HowItWorks.module.css';
import utils from '@/styles/Utilities.module.css';
import animations from '@/styles/Animation.module.css';

const steps = [
  {
    number: 1,
    title: 'Free Consultation',
    description: 'We’ll chat about your home and what smart upgrades could help you most.',
  },
  {
    number: 2,
    title: 'Smart Setup Day',
    description: 'We install, configure and walk you through everything — usually same-day.',
  },
  {
    number: 3,
    title: 'Ongoing Support',
    description: 'Need help later? Just message. No call centres, no faff.',
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={`${utils.maxWidth}`}>
        <h2 className={styles.heading}>How It Works</h2>
        <div className={`${utils.grid} ${utils['grid-cols-1']} ${utils['grid-cols-2']} ${utils['grid-cols-3']}`}>
          {steps.map(({ number, title, description }) => (
            <div key={number} className={`${styles.card} ${animations.slideUp}`}>
              <div className={styles.number}>{number}</div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.desc}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
