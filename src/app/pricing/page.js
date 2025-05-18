'use client';

import styles from './Pricing.module.css';
import Link from 'next/link';

const services = [
  {
    title: 'Basic Smart Setup',
    price: 'From £50 / hour',
    desc: [
      'Quick device setup for Alexa, HomeKit, plugs, lights and more.',
      'Ideal for beginners with a few gadgets.'
    ],
  },
  {
    title: 'Automation Tune-Up & Fixes',
    price: 'From £40 / job',
    desc: [
      'Fix broken automations and build smarter routines.',
      'Custom tailored to your home setup.'
    ],
  },
  {
    title: 'Full Custom Smart Home Installation',
    price: 'From £350 / project',
    desc: [
      'Complete design and install of lighting, security, sensors, and voice.',
      'Personalized to your lifestyle and budget.'
    ],
  },
  {
    title: 'Monthly Support & Monitoring',
    price: 'From £15 / month',
    desc: [
      'Regular system checks, troubleshooting and updates.',
      'Peace of mind for busy households or landlords.'
    ],
  },
  {
    title: 'Personalized User Guide',
    price: 'From £25 / guide',
    desc: [
      'Plain-English, step-by-step guide with photos for your devices.',
      'Great for families or those new to smart tech.'
    ],
  },
  {
    title: 'Smart Home Security Setup & Monitoring',
    price: 'From £150 / project',
    desc: [
      'Professional installation and configuration of security cameras, sensors, and alarms.',
      'Includes remote monitoring setup for peace of mind, accessible via your phone.'
    ],
  },
];

export default function PricingPage() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Smart Home Services & Pricing</h1>
      <p className={styles.subtitle}>
        Flexible, friendly, affordable help for your smart home setup.
      </p>
      <div className={styles.grid}>
        {services.map(({ title, price, desc }, i) => (
          <div key={i} className={styles.card}>
            <h2>{title}</h2>
            <p className={styles.price}>{price}</p>
            <ul>
              {desc.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
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
