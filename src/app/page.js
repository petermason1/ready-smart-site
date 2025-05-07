'use client';

import styles from './styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function HomePage() {
  return (
    <motion.div
      className={styles.pageWrapper}
      initial="hidden"
      animate="show"
      variants={staggerContainer}
    >
      {/* HERO */}
      <motion.section className={styles.hero} variants={fadeInUp}>
        <div className={styles.heroContent}>
          <h1>We Set Up Smart Homes So You Don’t Have To</h1>
          <p>
            We install and configure Home Assistant, Alexa, and Apple HomeKit systems for seamless,
            privacy-friendly control of your home — even if you’re not techy.
          </p>
          <Link href="/contact" className={styles.cta}>
            Book Your Free Setup Call
          </Link>
        </div>

        <div className={styles.heroImageWrapper}>
          <Image
            src="/smart-home-preview.jpg"
            alt="Smart Home Setup"
            width={600}
            height={400}
            className={styles.heroImage}
            priority
          />
        </div>
      </motion.section>

      {/* GRID */}
      <section className={styles.gridSection}>
        <motion.h2 variants={fadeInUp}>What We Configure</motion.h2>
        <motion.div className={styles.grid} variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {[
            {
              icon: '/icons/home-assistant.svg',
              title: 'Home Assistant',
              text: 'Full control, privacy-first automations. All local. All yours.',
            },
            {
              icon: '/icons/apple.svg',
              title: 'Apple HomeKit',
              text: 'Integrate your smart home directly with iOS and Siri.',
            },
            {
              icon: '/icons/alexa.svg',
              title: 'Alexa Devices',
              text: 'Smart speakers, routines, device groups — fully configured.',
            },
            {
              icon: '/icons/google-home.svg',
              title: 'Google Home',
              text: 'We support Google Nest and Assistant setups as needed.',
            },
          ].map((item, i) => (
            <motion.div key={i} className={styles.card} variants={fadeInUp}>
              <Image src={item.icon} alt={`${item.title} icon`} width={40} height={40} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link href="/contact" className={styles.ctaSmall}>
                Get Started
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}
