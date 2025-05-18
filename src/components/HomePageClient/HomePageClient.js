'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import UseCases from '@/components/UseCases';
import ServiceHighlights from '@/components/ServiceHighlights';
import ServiceGrid from '@/components/ServiceGrid';
import HowItWorks from '@/components/HowItWorks';
import BlogCarousel from '@/components/BlogCarousel';
import Testimonials from '@/components/Testimonials/TestimonialCarousel';
import FooterCTA from '@/components/FooterCTA';

// Optional: Animation config for smooth page entry
const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

/**
 * HomePageClient - main homepage layout
 * Shows all homepage sections, but ONLY uses the BlogCarousel for blog content.
 * @param {object} props
 * @param {Array} props.allPosts - All blog posts for the carousel
 */
export default function HomePageClient({ allPosts }) {
  return (
    <motion.div initial="hidden" animate="show" variants={staggerContainer}>
      {/* Hero Section */}
      <Hero />

      {/* Real Use Cases Section */}
      <UseCases />

      {/* Highlights of What You Offer */}
      <ServiceHighlights />

      {/* Service/Package Grid */}
      <ServiceGrid />

      {/* How It Works / Steps */}
      <HowItWorks />

      {/* Blog Carousel: Rotates 4 posts each load */}
      {Array.isArray(allPosts) && allPosts.length > 0 && (
        <BlogCarousel posts={allPosts} />
      )}

      {/* Reviews/Testimonials */}
      <Testimonials />

      {/* Final Call-To-Action Footer */}
      <FooterCTA />
    </motion.div>
  );
}
