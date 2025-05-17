'use client';

import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
   <section className={styles.testimonials}>
  <h2>What Locals Are Saying</h2>
  <div className={styles.testimonialGrid}>
    <div className={styles.quote}>
      <p>“Really impressed with Ready Smart Homes. They made the whole thing easy from the start, helped me figure out what I actually needed, and explained everything without the usual tech waffle. The install was spot on, really tidy, and they made sure I knew how to use it all before they left. Proper sound team and would definitely recommend.”</p>
      <span>— Craig D, via Facebook</span>
    </div>
    <div className={styles.quote}>
      <p>“Peter sorted our Alexa setup in one visit — it just works now!”</p>
      <span>— Kelly, Morpeth</span>
    </div>
    <div className={styles.quote}>
      <p>“He even set up a routine for me bairn’s bedtime. Absolute life saver.”</p>
      <span>— Claire, Cramlington</span>
    </div>
  </div>
</section>

  );
}
