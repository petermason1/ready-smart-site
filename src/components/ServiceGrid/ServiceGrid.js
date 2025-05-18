'use client';

import styles from './ServiceGrid.module.css';
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
];

export default function ServiceGrid() {
  return (
    <section className={styles.serviceList} aria-labelledby="service-heading">
      <h2 id="service-heading" className={styles.sectionTitle}>
        Systems We Support
      </h2>

      <ul className={styles.list}>
        {services.map(({ icon, title, text }) => (
          <li key={title} className={styles.listItem}>
            <div className={styles.iconTextWrapper}>
              <Image src={icon} alt={`${title} icon`} width={40} height={40} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.ctaWrapper}>
        <Link href="/contact" className={styles.cta}>
          Ask What Works Best →
        </Link>
      </div>
    </section>
  );
}
