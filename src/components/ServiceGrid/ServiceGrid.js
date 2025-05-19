'use client';

import styles from './ServiceGrid.module.css';
import utils from '@/styles/Utilities.module.css';
import animations from '@/styles/Animation.module.css';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: '/icons/alexa.svg',
    title: 'Alexa Devices',
    text: 'Setup voice control, groups, and custom Alexa routines.',
  },
  {
    icon: '/icons/apple.svg',
    title: 'Apple HomeKit',
    text: 'Sync HomeKit with sensors, lights, plugs — all Siri-controlled.',
  },
  {
    icon: '/icons/google-home.svg',
    title: 'Google Assistant',
    text: 'Integrate Nest devices, automations, and Google routines.',
  },
  {
    icon: '/icons/home-assistant.svg',
    title: 'Home Assistant',
    text: 'Get full local control with custom dashboards and privacy-first setup.',
  },
  {
    icon: '/icons/tp-link.jpg',
    title: 'TP-Link Tapo',
    text: 'Control smart plugs, bulbs and cameras with affordable, reliable gear.',
  },
  {
    icon: '/icons/smart-things-logo.png',
    title: 'Samsung SmartThings',
    text: 'Connect multiple brands and protocols into one simple app.',
  },
];

export default function ServiceGrid() {
  return (
    <section className={`${styles.serviceGrid} ${utils.maxWidth}`} aria-labelledby="service-heading">
      <h2 id="service-heading" className={styles.title}>
        Supported Systems
      </h2>

      <div className={`${utils.grid} ${utils['grid-cols-1']} ${utils['grid-cols-2']} ${utils['grid-cols-3']}`}>
        {services.map(({ icon, title, text }, i) => (
          <div key={i} className={`${styles.card} ${animations.slideUp} ${animations.hoverShadow}`}>
            <Image src={icon} alt={`${title} icon`} width={40} height={40} />
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>

      <div className={styles.ctaWrapper}>
        <Link href="/contact" className={styles.cta}>
          Ask What Works Best →
        </Link>
      </div>
    </section>
  );
}
