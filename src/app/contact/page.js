'use client';

import { useState } from 'react';
import styles from './contact.module.css';
import { usePathname } from 'next/navigation';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className={styles.bgWrapper}>
      <section className={styles.contactSection}>
        <h1 className={styles.heading}>Let’s Connect</h1>
        <p className={styles.subheading}>
          Got a question or ready to upgrade your home? Fill out the form and we’ll get back to you within 1 business day.
        </p>

        {submitted ? (
          <div className={styles.confirmation}>✅ Thanks! We&apos;ll be in touch soon.</div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>
              Name
              <input type="text" name="name" value={form.name} onChange={handleChange} required className={styles.input} />
            </label>

            <label className={styles.label}>
              Email
              <input type="email" name="email" value={form.email} onChange={handleChange} required className={styles.input} />
            </label>

            <label className={styles.label}>
              Message
              <textarea name="message" value={form.message} onChange={handleChange} required className={styles.textarea} />
            </label>

            <button type="submit" className={styles.button}>Send Message</button>
          </form>
        )}

        <div className={styles.contactInfo}>
     <p className={styles.contactInfo}>
  Based in Morpeth, serving across the North East.<br />
  <a href="tel:07919467819" className={styles.phoneNumber}>07919 467 819</a>
</p>

        </div>

      </section>
    </div>
  );
}
