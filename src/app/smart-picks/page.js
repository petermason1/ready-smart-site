'use client';

import Head from 'next/head';
import styles from './SmartPicks.module.css';
import Image from 'next/image';
import Link from 'next/link';

const picks = [
  {
    category: '🏠 Basic Smart Picks (Matter-Compatible)',
    items: [
      {
        name: 'TP-Link Tapo P110M',
        image: '/products/tapo-p110.jpg',
        desc: 'Matter-enabled smart plug with energy monitoring. Reliable and compact.',
        link: 'https://amzn.to/4jZusXR'
      },
      {
        name: 'Aqara Door/Window Sensor P2',
        image: '/products/aqara-door-p2.jpg',
        desc: 'Battery-powered Matter-compatible contact sensor. Fast and secure.',
        link: 'https://amzn.to/4kbk3b4'
      },
      {
        name: 'Nanoleaf Essentials Bulb (A19)',
        image: '/products/nanoleaf-a19.jpg',
        desc: 'Thread + Matter enabled color bulb. Great with Apple Home and more.',
        link: 'https://amzn.to/4dclJ1K'
      },
      {
        name: 'Meross Smart Plug (Matter)',
        image: '/products/meross-matter.jpg',
        desc: 'Affordable Matter-compatible smart plug that works with Alexa & HomeKit.',
        link: 'https://amzn.to/4iUx5c4'
      },
      {
        name: 'SwitchBot Hub 2',
        image: '/products/switchbot-hub-2.jpg',
        desc: 'Matter bridge and IR blaster. Smarten up older devices easily.',
        link: 'https://amzn.to/44zIg6y'
      },
      {
        name: 'Echo Dot (5th Gen)',
        image: '/products/echo-dot.jpg',
        desc: 'Compact Alexa speaker. Control devices with your voice.',
        link: 'https://amzn.to/4kcBkAT'
      }
    ]
  },
  {
    category: '🔐 Smart Security Picks',
    items: [
      {
        name: 'Tapo C200 Indoor Camera',
        image: '/products/tapo-c200.jpg',
        desc: 'Pan & tilt camera with motion detection, night vision, and mobile alerts.',
        link: 'https://amzn.to/3ZcDEjb'
      },
      {
        name: 'Eufy SoloCam S220',
        image: '/products/eufy-s220.jpg',
        desc: 'Solar-powered outdoor cam with no subscription required.',
        link: 'https://amzn.to/4iZmWeq'
      },
      {
        name: 'Ring Video Doorbell (2nd Gen)',
        image: '/products/ring-doorbell.jpg',
        desc: 'Easy-to-install smart doorbell with Alexa integration.',
        link: 'https://amzn.to/3ZdF2SB'
      },
      {
        name: 'Aqara Vibration Sensor',
        image: '/products/aqara-vibration.jpg',
        desc: 'Detects vibrations and tampering. Great for safes and windows.',
        link: 'https://amzn.to/3ZeUOwy'
      },
      {
        name: 'SwitchBot Motion Sensor',
        image: '/products/switchbot-motion.jpg',
        desc: 'Affordable motion detection that works with Hub 2 and Alexa.',
        link: 'https://amzn.to/42So26L'
      },
      {
        name: 'Blink Outdoor 4 Camera',
        image: '/products/blink-outdoor.jpg',
        desc: 'Wire-free outdoor camera with HD video, two-way audio, and long battery life.',
        link: 'https://amzn.to/4mbjOyB'
      }
    ]
  },
  {
    category: '🚀 High-Tech Smart Picks',
    items: [
      {
        name: 'Aqara FP2 Presence Sensor',
        image: '/products/aqara-fp2.jpg',
        desc: 'Advanced mmWave presence detection for ultra-accurate automations.',
        link: 'https://amzn.to/4mpStsS'
      },
      {
        name: 'Philips Hue Gradient Lightstrip',
        image: '/products/hue-gradient.jpg',
        desc: 'Immersive lightstrip experience with dynamic color sync.',
        link: 'https://amzn.to/3GQgqcn'
      },
      {
        name: 'Govee Glide Wall Lights',
        image: '/products/govee-glide.jpg',
        desc: 'Stylish RGBIC lighting bars with app control and music sync.',
        link: 'https://amzn.to/4jP9Scv'
      },
      {
        name: 'Raspberry Pi 5 (8GB)',
        image: '/products/rpi5.jpg',
        desc: 'Build your own smart server or automation hub with full control.',
        link: 'https://amzn.to/4miuYlt'
      },
      {
        name: 'SwitchBot Curtain 3 + Solar Panel',
        image: '/products/switchbot-curtain.jpg',
        desc: 'Automate your curtains with quiet motors and solar charging.',
        link: 'https://amzn.to/3EWcAxT'
      },
      {
        name: 'Echo Show 8 (3rd Gen)',
        image: '/products/echo-show-8.jpg',
        desc: 'Smart display for home control, video calls, and automation dashboards.',
        link: 'https://amzn.to/4jMxU81'
      }
    ]
  }
];

export default function SmartPicksPage() {
  return (
    <>
      <Head>
        <title>Best Smart Home Devices 2025 | Ready Smart Picks</title>
        <meta
          name="description"
          content="Our top smart home picks for 2025 — curated Matter-compatible, security, and high-tech devices with affiliate links."
        />
        <meta
          name="keywords"
          content="smart home picks, best smart plugs, Home Assistant accessories, Matter devices UK, smart home 2025"
        />
        <meta property="og:title" content="Best Smart Home Devices 2025 | Ready Smart Picks" />
        <meta
          property="og:description"
          content="Explore the best smart home tech in 2025 with our Ready Smart Picks — real installs, affiliate links, and trusted gear."
        />
        <meta property="og:url" content="https://www.readysmarthomes.com/smart-picks" />
        <meta property="og:type" content="website" />
      </Head>

      <div className={styles.wrapper}>
        <h1 className={styles.sectionTitle}>Ready Smart Picks</h1>
        <p className={styles.sectionIntro}>
          These are the devices we trust and use — perfect for beginners or power users.
        </p>

        {picks.map((section, idx) => (
          <section
            key={idx}
            className={styles.category}
            id={section.category.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}
          >
            <h2 className={styles.categoryTitle}>{section.category}</h2>
            <div className={styles.grid}>
              {section.items.map((item, i) => (
                <div key={i} className={styles.card}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className={styles.image}
                  />
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cta}
                  >
                    View on Amazon
                  </a>
                  <p className={styles.disclosure}>
                    As an Amazon Associate, we earn from qualifying purchases.
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
