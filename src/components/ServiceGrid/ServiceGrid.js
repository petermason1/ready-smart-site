'use client';

import styles from './ServiceGrid.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const services = [
  {
    icon: '/icons/alexa.svg',
    title: 'Alexa Devices',
    text: 'We’ll set up Alexa routines, smart groups, and device control for voice automation.',
  },
  {
    icon: '/icons/apple.svg',
    title: 'Apple HomeKit',
    text: 'We integrate your iPhone with lighting, plugs, sensors — all Siri ready.',
  },
  {
    icon: '/icons/google-home.svg',
    title: 'Google Assistant',
    text: 'We support Google Nest and smart home routines, if that’s your setup.',
  },
  {
    icon: '/icons/home-assistant.svg',
    title: 'Home Assistant',
    text: 'Need advanced control or privacy-focused automations? We’ve got you.',
  },
];

export default function ServiceGrid() {
  return (
    <section className={styles.gridSection}>
      <motion.h2 className={styles.sectionTitle} variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        What We Configure
      </motion.h2>

      <motion.div
        className={styles.grid}
        variants={{ show: { transition: { staggerChildren: 0.2 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {services.map((item, index) => (
          <motion.div key={index} className={styles.card} variants={fadeInUp}>
            <div className={styles.iconWrapper}>
              <Image src={item.icon} alt={`${item.title} icon`} width={40} height={40} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <Link href="/contact" className={styles.ctaSmall}>
              Get Started
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
