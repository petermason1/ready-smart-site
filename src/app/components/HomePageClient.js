'use client';

import styles from '@/app/styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

export default function HomePageClient({ latestPost, recentPosts }) {
  const services = [
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
  ];

  return (
    <motion.div className={styles.pageWrapper} initial="hidden" animate="show" variants={staggerContainer}>
      
      {/* ✅ HERO SECTION */}
      <motion.section className={styles.hero} variants={fadeInUp}>
        <div className={styles.heroContent}>
          <h1>Smart Homes. Fully Set Up for You.</h1>
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
            src="/smart-home-preview.png"
            alt="Smart Home Setup"
            width={600}
            height={400}
            className={styles.heroImage}
            priority
          />
        </div>
      </motion.section>

      {/* ✅ SERVICE GRID */}
      <section className={styles.gridSection}>
        <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
          What We Configure
        </motion.h2>
        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((item, i) => (
            <motion.div key={i} className={styles.card} variants={fadeInUp}>
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

      {/* ✅ BLOG PREVIEW */}
      {latestPost && (
        <section className={styles.smartPicksPreview}>
          <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
            Latest Blog Post
          </motion.h2>
          <motion.h3 variants={fadeInUp}>{latestPost.title}</motion.h3>
          <motion.p variants={fadeInUp}>{latestPost.description}</motion.p>
          <Link href={`/blog/${latestPost.slug}`} className={styles.ctaSmall}>
            Read More →
          </Link>
        </section>
      )}

      {/* ✅ RECENT POSTS SECTION */}
      {recentPosts && recentPosts.length > 0 && (
       <section className={styles.recentPosts}>
       <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
         Recent Blog Posts
       </motion.h2>
     
       <div className={styles.postGrid}>
         {recentPosts.map((post) => (
           <motion.div key={post.slug} className={styles.postCard} variants={fadeInUp}>
             <h3>{post.title}</h3>
             <p>{post.description}</p>
             <Link href={`/blog/${post.slug}`} className={styles.ctaSmall}>
               Read More →
             </Link>
           </motion.div>
         ))}
       </div>
     
       <Link href="/blog" className={styles.cta}>
         View All Posts →
       </Link>
     </section>
     
      )}

      {/* ✅ HOW IT WORKS */}
      <section className={styles.howItWorks}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <span>1</span>
            <h3>Free Setup Call</h3>
            <p>We talk through your smart home goals, gear, and what you want to automate — no pressure.</p>
          </div>
          <div className={styles.step}>
            <span>2</span>
            <h3>We Install or Guide</h3>
            <p>We visit in person or work remotely to set up Home Assistant, Alexa, or HomeKit — and keep it simple.</p>
          </div>
          <div className={styles.step}>
            <span>3</span>
            <h3>You’re in Control</h3>
            <p>No subscriptions. No confusion. You get a clean, private smart home system you can trust.</p>
          </div>
        </div>
      </section>

      {/* ✅ TESTIMONIALS */}
      <section className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <p>“Everything just works now — lights, sensors, even the doorbell. And it’s all private!”</p>
            <span>— Sarah J., Newcastle</span>
          </div>
          <div className={styles.testimonialCard}>
            <p>“I finally understand my smart home. Peter set it all up and showed me how to use it.”</p>
            <span>— Dan M., Durham</span>
          </div>
        </div>
      </section>

      {/* ✅ FOOTER CTA */}
      <section className={styles.footerCTA}>
        <h2 className={styles.sectionTitle}>Need Help With Your Smart Home?</h2>
        <p>We’ll help you set up, automate, and simplify your home — no hassle, no confusion.</p>
        <Link href="/contact" className={styles.cta}>Get Free Setup Advice</Link>
      </section>
    </motion.div>
  );
}
