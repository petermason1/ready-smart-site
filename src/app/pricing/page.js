'use client';

import styles from './Pricing.module.css';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>Simple, Transparent Pricing</h1>
        <p>
          Choose the package that fits your home. No hidden costs. Just smart automation done right.
        </p>
      </section>

      {/* PACKAGES */}
      <section className={styles.packages}>
        <div className={styles.card}>
          <h2>🏠 Starter Setup</h2>
          <p className={styles.price}>£299</p>
          <ul className={styles.features}>
            <li>Up to 3 smart devices installed</li>
            <li>Alexa or Apple HomeKit setup</li>
            <li>Personalised walkthrough</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>⚙️ Home Assistant Premium</h2>
          <p className={styles.price}>£499</p>
          <ul className={styles.features}>
            <li>Up to 5 smart devices</li>
            <li>Home Assistant installed & configured</li>
            <li>Custom dashboard & automations</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>🏡 Whole Home Bundle</h2>
          <p className={styles.price}>from £749</p>
          <ul className={styles.features}>
            <li>8+ devices across the home</li>
            <li>Advanced automations</li>
            <li>Camera setup & integration</li>
          </ul>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className={styles.addons}>
        <h3>Optional Add-Ons</h3>
        <ul className={styles.addonsList}>
          <li>Extra device setup: <strong>£25 each</strong></li>
          <li>Camera integration: <strong>£60</strong></li>
          <li>Remote access config: <strong>£40</strong></li>
          <li>Annual support: <strong>£99/year</strong></li>
        </ul>
      </section>

      {/* OFFERS */}
      <section className={styles.offer}>
        <h3>💥 Limited Time Offer</h3>
        <p>
          Book before <strong>May 31st</strong> and get <strong>£50 OFF</strong> any setup package.
        </p>
        <p>
          Plus: Refer a friend and get a free smart plug install for both of you.
        </p>
      </section>

      {/* CUSTOM PRICING */}
        <section className={styles.custom}>
        <h3>💬 Need Something Custom?</h3>
       <p>
         We offer tailored pricing for large homes, complex setups, or business premises.
       </p>
      <Link href="/contact" className={styles.customBtn}>
        Request a Custom Quote
          </Link>
     </section>



      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready to Get Started?</h2>
        <Link href="/contact" className={styles.ctaBtn}>
          Book Your Free Setup Call
        </Link>
      </section>
    </div>
  );
}
