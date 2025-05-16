'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero/Hero';
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid';
import BlogPreview from '@/components/BlogPreview/BlogPreview';
import RecentPosts from '@/components/RecentPosts/RecentPosts';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Testimonials from '@/components/Testimonials/TestimonialCarousel';
import FooterCTA from '@/components/FooterCTA/FooterCTA';
import styles from '@/components/HomePageClient.module.css'; // 👈 Make sure this file exists and has .useCases etc.

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

export default function HomePageClient({ latestPost, recentPosts }) {
  return (
    <motion.div initial="hidden" animate="show" variants={staggerContainer}>
      <Hero />

      {/* === Use Cases Section === */}
      <section className={styles.useCases}>
        <h3>How Smart Homes Help</h3>
        <div className={styles.useGrid}>
          <div className={styles.useCard}>
            <h4 data-icon="👵">Elderly Support</h4>
            <p>Monitor movement, get alerts if something seems wrong, and help loved ones stay independent.</p>
          </div>
          <div className={styles.useCard}>
            <h4 data-icon="🐶">Pet Monitoring</h4>
            <p>See if your pets are okay while you&aposre out. Automate lights and cameras for peace of mind.</p>
          </div>
          <div className={styles.useCard}>
            <h4 data-icon="💡">Energy Savings</h4>
            <p>Turn off lights and devices automatically to cut costs and save electricity every day.</p>
          </div>
          <div className={styles.useCard}>
            <h4 data-icon="🔒">Security & Access</h4>
            <p>Lock doors, detect motion, and get notified if anything&aposs off — even when you&aposre away.</p>
          </div>
          <div className={styles.useCard}>
            <h4 data-icon="🛏️">Sleep Routines</h4>
            <p>Dim lights and adjust temperature automatically for better sleep and a smoother bedtime.</p>
          </div>
          <div className={styles.useCard}>
            <h4 data-icon="📱">Remote Control</h4>
            <p>Control everything from your phone — lights, plugs, heating, or even routines.</p>
          </div>
          <div className={styles.useCard}>
            <h4 data-icon="🕗">Schedules & Timers</h4>
            <p>Set it and forget it. Devices run when you want, without lifting a finger.</p>
          </div>
          <div className={styles.useCard}>
            <h4 data-icon="🎤">Voice Control</h4>
            <p>Use Alexa or Siri to turn things on, off, or check status hands-free.</p>
          </div>
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
