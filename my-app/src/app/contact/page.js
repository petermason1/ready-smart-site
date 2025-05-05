'use client'
import { useState } from 'react'
import styles from './contact.module.css'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    } else {
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <p className={styles.subheading}>
        Got a question? Want to collaborate? Drop us a message below.
      </p>

      {submitted ? (
        <div className={styles.confirmation}>
          ✅ Thanks! We&apos;ll be in touch soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
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

          <label>
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

          <label>
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
  )
}
