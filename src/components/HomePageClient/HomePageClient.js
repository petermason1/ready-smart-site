'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import UseCases from '@/components/UseCases';
import ServiceHighlights from '@/components/ServiceHighlights';
import ServiceGrid from '@/components/ServiceGrid';
import HowItWorks from '@/components/HowItWorks';
import BlogCarousel from '@/components/BlogGrid';
import Testimonials from '@/components/Testimonials/TestimonialCarousel';
import FooterCTA from '@/components/FooterCTA';

// Animation config for smooth page entry
const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

/**
 * HomePageClient - main homepage layout
 * Hero sits full-bleed above the contained homepage sections.
 * @param {object} props
 * @param {Array} props.allPosts - All blog posts for the carousel
 */
export default function HomePageClient({ allPosts }) {
  return (
    <>
      {/* Full-width Hero Section */}
      <Hero />

      {/* The rest of the homepage sections are boxed/centered */}
      <div className="mainWrapper">
        <motion.div initial="hidden" animate="show" variants={staggerContainer}>
          <UseCases />
          <ServiceHighlights />
          <ServiceGrid />
          <HowItWorks />
          {Array.isArray(allPosts) && allPosts.length > 0 && (
            <BlogCarousel posts={allPosts} />
          )}
          <Testimonials />
          <FooterCTA />
        </motion.div>
      </div>
    </>
  );
}
