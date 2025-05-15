'use client';

import styles from './Pricing.module.css';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.hero}>
        <h1>Smart Home Pricing</h1>
        <p>Simple packages, clear value, and use cases that actually make sense.</p>
      </section>

      <section className={styles.pricingGrid}>
        <div className={styles.card}>
          <h2>Starter Setup</h2>
          <p className={styles.price}>£299</p>
          <ul>
            <li>3 smart devices installed</li>
            <li>Alexa / Apple Home setup</li>
            <li>Personalised walkthrough</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h2>Home Assistant Premium</h2>
          <p className={styles.price}>£499</p>
          <ul>
            <li>Up to 6 devices installed</li>
            <li>Home Assistant setup + dashboard</li>
            <li>Advanced automations</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h2>Whole Home Bundle</h2>
          <p className={styles.price}>from £749</p>
          <ul>
            <li>8+ devices</li>
            <li>Multi-room coverage</li>
            <li>Camera & sensor integration</li>
          </ul>
        </div>
      </section>

      <section className={styles.useCases}>
        <h3>Smart Home Use Cases</h3>
        <div className={styles.useGrid}>
          {[
            ['👵 Elderly Monitoring', 'Check in on a vulnerable relative with sensors, alerts and live access.'],
            ['🐶 Pet Monitoring', 'See what your dog’s up to. Motion alerts and indoor cameras.'],
            ['⚡ Energy Saving', 'Track usage and switch off appliances when you’re out.'],
            ['🛌 Bedtime Routines', 'One button shuts off all lights, locks doors, and arms sensors.'],
            ['🚪 Door Alerts', 'Get notified if a back door or window is left open.'],
            ['🌅 Seasonal Modes', 'Lights come on at sunset, or run “Holiday” mode while away.'],
            ['🎤 Voice Commands', 'Turn on lights, heating or the kettle with Alexa or Siri.'],
            ['🎥 Cameras & Sensors', 'See and hear what’s happening live, right from your phone.'],
          ].map(([title, desc], i) => (
            <div key={i} className={styles.useCard}>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Not Sure What You Need?</h2>
        <p>We’ll help you pick the right setup for your home.</p>
        <Link href="/contact" className={styles.ctaBtn}>Get Free Setup Advice</Link>
      </section>
    </div>
  );
}
