'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero/Hero';
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid';
import BlogPreview from '@/components/BlogPreview/BlogPreview';
import RecentPosts from '@/components/RecentPosts/RecentPosts';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Testimonials from '@/components/Testimonials/Testimonials';
import FooterCTA from '@/components/FooterCTA/FooterCTA';


const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

export default function HomePageClient({ latestPost, recentPosts }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer}
    >
      <Hero />

      <ServiceGrid />

      {latestPost && <BlogPreview post={latestPost} />}

      {recentPosts && recentPosts.length > 0 && (
        <RecentPosts posts={recentPosts} />
      )}

      <HowItWorks />

      <Testimonials />

      <FooterCTA />
    </motion.div>
  );
}
