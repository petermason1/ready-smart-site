'use client';

import { useState } from 'react';
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
      <div className={styles.bgWrapper}>
        {/* Blob Background */}
        <div className={styles.blobWrapper}>
          <svg
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.blob}
          >
            <g transform="translate(300,300)">
              <path
                d="M156.3,-181.8C198.3,-138.5,223.5,-69.2,211.2,-12.6C198.9,44.1,148.9,88.2,106.9,126.4C64.9,164.6,32.4,197,1.7,195.4C-29.1,193.8,-58.2,158.2,-102.7,126.8C-147.3,95.3,-207.3,68.1,-220.6,25.6C-233.8,-16.9,-200.4,-74.6,-160.7,-120.1C-121.1,-165.6,-75.1,-198.9,-18.1,-210.4C38.9,-221.8,77.9,-211.1,156.3,-181.8Z"
                fill="rgba(0,112,243,0.07)"
              />
            </g>
          </svg>
        </div>

        <section className={styles.contactSection}>
          <h1 className={styles.heading}>Let’s Connect</h1>
          <p className={styles.subheading}>
            Got a question or ready to upgrade your home? Fill out the form and we’ll get back to you within 1 business day.
          </p>

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

          <div className={styles.contactInfo}>
            <p><strong>Phone:</strong> 07919 467819</p>
            <p><strong>Location:</strong> Newcastle upon Tyne, UK</p>
          </div>
        </section>
      </div>
    </main>
  );
}
