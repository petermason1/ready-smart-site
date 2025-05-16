'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TestimonialCarousel.module.css';

const testimonials = [
{
  text: "Really impressed with Ready Smart Homes. They made everything simple, helped me figure out what I needed, and explained it without the usual tech waffle. The install was tidy and spot on — proper sound team. Highly recommend.",
  name: "Craig D, Sunniside",
  stars: 5,
},

  {
    text: "Peter sorted our Alexa setup in one visit — it just works now!",
    name: "Kelly, Morpeth",
    stars: 5,
  },
  {
    text: "He even set up a routine for me bairn’s bedtime. Absolute life saver.",
    name: "Claire, Cramlington",
    stars: 5,
  },
  {
    text: "I had no clue where to start — now I control everything from my phone. It’s class.",
    name: "Ryan, Blyth",
    stars: 5,
  },
  {
    text: "Proper tidy job. Even set up lights to come on at sunset. Looks mint.",
    name: "Sarah, Bedlington",
    stars: 5,
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 150 : -150,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 150 : -150,
    opacity: 0,
  }),
};

export default function TestimonialCarousel() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir) => {
    setIndex(([curr]) => [
      (curr + dir + testimonials.length) % testimonials.length,
      dir,
    ]);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, []);

  const { text, name, stars } = testimonials[index];

  return (
    <section className={styles.carouselWrapper}>
      <h2 className={styles.sectionTitle}>What Locals Are Saying</h2>

      <div className={styles.carouselBox}>
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={`${index}-${name}`}
            className={styles.testimonialCard}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(e, { offset }) => {
              if (offset.x > 50) paginate(-1);
              else if (offset.x < -50) paginate(1);
            }}
          >
            <p className={styles.text}>{text}</p>
            <div className={styles.stars}>{'★'.repeat(stars)}</div>
            <span className={styles.name}>— {name}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.controls}>
        <button onClick={() => paginate(-1)} aria-label="Previous">←</button>
        <button onClick={() => paginate(1)} aria-label="Next">→</button>
      </div>
    </section>
  );
}
