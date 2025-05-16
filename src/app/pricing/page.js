'use client';

import styles from './Pricing.module.css';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* === HERO TEXT === */}
      <section className={styles.hero}>
        <h2>Smart Home Packages & What You Can Do With Them</h2>
        <p>
          Simple pricing. Powerful results. Choose a setup that fits your lifestyle — or get free advice.
        </p>
      </section>

      {/* === PRICING GRID === */}
      <section className={styles.pricingGrid}>
        {[
          {
            title: 'Starter Setup',
            price: '£299',
            features: [
              '3 smart devices installed',
              'Alexa / Apple setup',
              'Quick local install, fully working on the day',
            ],
          },
          {
            title: 'Home Assistant Premium',
            price: '£499',
            features: [
              'Up to 6 devices installed',
              'Full Home Assistant setup',
              'Advanced automations with mobile dashboard',
            ],
          },
          {
            title: 'Whole Home Bundle',
            price: 'from £749',
            features: [
              '8+ devices across your home',
              'Multi-room lighting & routines',
              'Includes cameras, sensors & custom automations',
            ],
          },
        ].map((pkg, i) => (
          <div key={i} className={styles.card}>
            <h2>{pkg.title}</h2>
            <p className={styles.price}>{pkg.price}</p>
            <ul>
              {pkg.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* === USE CASE GRID === */}
      <section className={styles.useCases}>
        <h3>Smart Home Use Cases</h3>
        <p className={styles.useIntro}>
          These are the real-world benefits you’ll get — no tech talk needed.
        </p>

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
          ].map(([title, desc], i) => {
            const [emoji, ...textParts] = title.split(' ');
            return (
              <div key={i} className={styles.useCard}>
                <h4 data-icon={emoji}>{textParts.join(' ')}</h4>
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className={styles.cta}>
        <h2>Not Sure What You Need?</h2>
        <p>We’ll help you pick the right setup for your home.</p>
        <Link href="/contact" className={styles.ctaBtn}>
          Get Free Setup Advice
        </Link>
      </section>
    </div>
  );
}
