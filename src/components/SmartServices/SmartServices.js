'use client';

import styles from './SmartServices.module.css';
import Link from 'next/link';

export default function SmartServices() {
  const services = [
    {
      title: 'In-Person Setup Help',
      price: 'from £50 / hour',
      description: [
        'I’ll come to your home and set up the smart devices you already have — Alexa, HomeKit, Home Assistant, smart plugs, lighting and more.',
        'Includes device linking, automations, mobile dashboards and privacy-first setup.'
      ]
    },
    {
      title: 'Remote Walkthrough (Video Call)',
      price: 'from £25 / 30 mins',
      description: [
        'We jump on a video call, and I guide you step-by-step through setup, automation, or fixing issues.',
        'Ideal for DIY setups or troubleshooting from anywhere in the UK.'
      ]
    },
    {
      title: 'Custom User Guides',
      price: 'from £20',
      description: [
        'Get a plain-English, step-by-step guide tailored to your home and devices.',
        'Includes screenshots or photos. Great for families or anyone new to smart tech.'
      ]
    },
    {
      title: 'Automation Fixes & Upgrades',
      price: 'from £40',
      description: [
        'I’ll fix broken automations, create better routines, and improve how your system runs.',
        'Works with Alexa, Apple, or full Home Assistant setups.'
      ]
    },
    {
      title: 'Automation Scripts Written for You',
      price: '£5 each',
      description: [
        'Tell me what you want to happen — I’ll write the automation config or YAML.',
        'Works for Home Assistant or Alexa. Ready to copy + paste.'
      ]
    },
    {
      title: 'Custom Smart Setups (Home & Security)',
      price: 'Quote based on project',
      description: [
        'Want something built around your routine or home layout?',
        'I offer custom setups for lighting, motion sensors, cameras, and more — built with Home Assistant or Apple/Alexa integrations.'
      ]
    },
    {
      title: 'Monthly Support Plan',
      price: 'from £10 / month',
      description: [
        'Ongoing help, tweaks, or advice as your setup grows.',
        'Perfect for busy households, elderly relatives, or landlords who want peace of mind.'
      ]
    }
  ];

  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <h1>Smart Home Help – Flexible, Friendly & Affordable</h1>
        <p>
          Whether you’re stuck mid-setup, need advice, or want a full custom system, I offer smart home support that just works.
        </p>
      </section>

      <div className={styles.servicesList}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            <h2>{service.title}</h2>
            <p className={styles.price}>{service.price}</p>
            <ul>
              {service.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <h2>Want to book or ask a question?</h2>
        <p>I’ll reply the same day with availability or a quote — no pressure, no upsells.</p>
        <Link href="/contact" className={styles.ctaBtn}>
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
