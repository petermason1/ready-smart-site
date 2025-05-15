'use client';

import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
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
  );
}
