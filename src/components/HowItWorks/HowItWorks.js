'use client';

import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <h2 className={styles.sectionTitle}>How It Works</h2>
      <div className={styles.steps}>
        <div className={styles.step}>
          <span>1</span>
          <h3>Free Setup Call</h3>
          <p>We talk through your smart home goals, gear, and what you want to automate — no pressure.</p>
        </div>
        <div className={styles.step}>
          <span>2</span>
          <h3>We Install or Guide</h3>
          <p>We visit in person or remotely set up Home Assistant, Alexa, or HomeKit — and keep it simple.</p>
        </div>
        <div className={styles.step}>
          <span>3</span>
          <h3>You’re in Control</h3>
          <p>No subscriptions. No confusion. You get a clean, private smart home system you can trust.</p>
        </div>
      </div>
    </section>
  );
}
