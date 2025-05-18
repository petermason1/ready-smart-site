'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import UseCases from '@/components/UseCases';             // Cleaner import (index.js preferred)
import ServiceHighlights from '@/components/ServiceHighlights';
import ServiceGrid from '@/components/ServiceGrid';
import HowItWorks from '@/components/HowItWorks';
import BlogPreview from '@/components/BlogPreview';
import RecentPosts from '@/components/RecentPosts';
import Testimonials from '@/components/Testimonials/TestimonialCarousel';
import FooterCTA from '@/components/FooterCTA';

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function HomePageClient({ latestPost, recentPosts }) {
  return (
    <motion.div initial="hidden" animate="show" variants={staggerContainer}>
      {/* HERO SECTION */}
      <Hero />

      {/* USE CASES - the benefits/real-world results */}
      <UseCases />

      {/* SERVICE HIGHLIGHTS - teaser/summary, super scannable */}
      <ServiceHighlights />

      {/* MAIN SERVICE GRID - detailed offers/packages */}
      <ServiceGrid />

      {/* HOW IT WORKS - process/steps */}
      <HowItWorks />

      {/* BLOG & RECENT POSTS */}
      {latestPost && <BlogPreview post={latestPost} />}
      {recentPosts?.length > 0 && <RecentPosts posts={recentPosts} />}

      {/* SOCIAL PROOF / REVIEWS */}
      <Testimonials />

      {/* FINAL CTA */}
      <FooterCTA />
    </motion.div>
  );
}
