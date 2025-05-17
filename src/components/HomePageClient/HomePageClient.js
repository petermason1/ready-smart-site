'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ServiceGrid from '@/components/ServiceGrid';
import BlogPreview from '@/components/BlogPreview';
import RecentPosts from '@/components/RecentPosts';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials/TestimonialCarousel';
import FooterCTA from '@/components/FooterCTA';
import styles from './HomePageClient.module.css'; // ✅ relative import if inside the same folder

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const useCases = [
  {
    icon: '👵',
    title: 'Elderly Support',
    desc: 'Monitor movement, get alerts if something seems wrong, and help loved ones stay independent.',
  },
  {
    icon: '🐶',
    title: 'Pet Monitoring',
    desc: 'See if your pets are okay while you’re out. Automate lights and cameras for peace of mind.',
  },
  {
    icon: '💡',
    title: 'Energy Savings',
    desc: 'Turn off lights and devices automatically to cut costs and save electricity every day.',
  },
  {
    icon: '🔒',
    title: 'Security & Access',
    desc: 'Lock doors, detect motion, and get notified if anything’s off — even when you’re away.',
  },
  {
    icon: '🛏️',
    title: 'Sleep Routines',
    desc: 'Dim lights and adjust temperature automatically for better sleep and a smoother bedtime.',
  },
  {
    icon: '📱',
    title: 'Remote Control',
    desc: 'Control everything from your phone — lights, plugs, heating, or even routines.',
  },
  {
    icon: '🕗',
    title: 'Schedules & Timers',
    desc: 'Set it and forget it. Devices run when you want, without lifting a finger.',
  },
  {
    icon: '🎤',
    title: 'Voice Control',
    desc: 'Use Alexa or Siri to turn things on, off, or check status hands-free.',
  },
];

export default function HomePageClient({ latestPost, recentPosts }) {
  return (
    <motion.div initial="hidden" animate="show" variants={staggerContainer}>
      <Hero />

      {/* === Use Cases Section === */}
      <section className={styles.useCases} aria-labelledby="use-cases-heading">
        <h2 id="use-cases-heading">How Smart Homes Help</h2>
        <div className={styles.useGrid}>
          {useCases.map(({ icon, title, desc }, i) => (
            <div key={i} className={styles.useCard}>
              <h3 data-icon={icon}>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ServiceGrid />

      {latestPost && <BlogPreview post={latestPost} />}
      {recentPosts?.length > 0 && <RecentPosts posts={recentPosts} />}

      <HowItWorks />
      <Testimonials />
      <FooterCTA />
    </motion.div>
  );
}
