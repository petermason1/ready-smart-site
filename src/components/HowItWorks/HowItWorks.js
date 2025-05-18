// src/components/HowItWorks.js
'use client';
import styles from './HowItWorks.module.css';

const steps = [
  {
    number: 1,
    title: 'Book Your Consultation',
    description: 'Schedule a free call to discuss your home, needs, and smart goals.',
  },
  {
    number: 2,
    title: 'Choose Your Package',
    description: 'Select the smart home package that fits your lifestyle and budget.',
  },
  {
    number: 3,
    title: 'Professional Installation',
    description: 'We install and configure your devices with expert care and minimal fuss.',
  },
  {
    number: 4,
    title: 'Enjoy & Control',
    description: 'Use your new smart home easily, with support when you need it.',
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
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber} aria-hidden="true">{number}</span>
              <h3 className={styles.stepTitle}>{title}</h3>
            </div>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
