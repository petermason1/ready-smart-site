'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './contact.module.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
    <main className="mainWrapper">
      <div className={styles.pageWrapper}>
        {/* LEFT COLUMN */}
        <div className={styles.infoPanel}>
          <div>
            <h1 className={styles.heading}>Let’s Connect</h1>
            <p className={styles.subheading}>
              Got a question? Want to collaborate? Drop us a message or reach out directly.
            </p>
            <ul className={styles.contactDetails}>
                    <li><strong>Phone:</strong> 07919 467819</li>
              <li><strong>Location:</strong> Newcastle upon Tyne, UK</li>
            </ul>
            <p className={styles.trustNote}>📬 We usually reply within 1 business day.</p>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/contact-illustration.jpg"
              alt="Smart home visual"
              width={500}
              height={400}
              className={styles.illustration}
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className={styles.formPanel}>
          {submitted ? (
            <div className={styles.confirmation}>
              ✅ Thanks! We&apos;ll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.label}>
                Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </label>

              <label className={styles.label}>
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </label>

              <label className={styles.label}>
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className={styles.textarea}
                />
              </label>

              <button type="submit" className={styles.button}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
