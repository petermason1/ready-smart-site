'use client';

import styles from './HowItWorks.module.css';

const steps = [
  {
    number: 1,
    title: 'Free Setup Call',
    description: 'We talk through your smart home goals, gear, and what you want to automate — no pressure.',
  },
  {
    number: 2,
    title: 'We Install or Guide',
    description: 'We visit in person or remotely set up Home Assistant, Alexa, or HomeKit — and keep it simple.',
  },
  {
    number: 3,
    title: 'You’re in Control',
    description: 'No subscriptions. No confusion. You get a clean, private smart home system you can trust.',
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks} aria-labelledby="how-it-works-heading">
      <h2 id="how-it-works-heading" className={styles.sectionTitle}>
        How It Works
      </h2>

      <div className={styles.steps}>
        {steps.map(({ number, title, description }) => (
          <div key={number} className={styles.step}>
            <span aria-hidden="true">{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
