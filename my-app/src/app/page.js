'use client'

import styles from './Home.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Head from 'next/head'

const testimonials = [
  { quote: 'Game-changer for my home setup.', author: 'Alex' },
  { quote: 'Setup was so easy thanks to Ready Smart.', author: 'Jenna' },
  { quote: 'Highly recommend their smart plug guides.', author: 'Jamie' }
]

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Handle auto-rotating testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Update data-theme on the HTML element based on darkMode
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <>
      <Head>
        <title>Smart Home Essentials | Ready Smart</title>
        <meta
          name="description"
          content="Top recommended smart home gear for Home Assistant, Alexa & Apple Home."
        />
      </Head>

      <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
        {/* Theme Toggle Button */}
        <div className={styles.toggleWrapper}>
          <button onClick={() => setDarkMode(!darkMode)} className={styles.toggleBtn}>
            {darkMode ? '🌙 Dark' : '☀️ Light'} Mode
          </button>
        </div>

        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title}>Smarter Living Starts Here</h1>
          <p className={styles.subtitle}>
            Curated smart devices for Home Assistant, Alexa & Apple Home.
          </p>
          <Link href="/contact" className={styles.cta}>
            Get in Touch
          </Link>
        </section>

        {/* Product Grid */}
        <section className={styles.grid}>
          <div className={styles.card}>
            <h2>🔌 Smart Plugs</h2>
            <p>Remotely control your appliances and automate routines.</p>
            <a
              href="https://amzn.to/YOUR_SMART_PLUG_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              View Smart Plugs
            </a>
          </div>

          <div className={styles.card}>
            <h2>🧠 Presence Sensors</h2>
            <p>Detect real presence, not just motion – using mmWave tech.</p>
            <a
              href="https://amzn.to/YOUR_PRESENCE_SENSOR_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Shop Presence Sensors
            </a>
          </div>

          <div className={styles.card}>
            <h2>💡 Smart Lighting</h2>
            <p>Create the perfect mood and schedule lighting scenes easily.</p>
            <a
              href="https://amzn.to/YOUR_SMART_LIGHT_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Browse Smart Lights
            </a>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className={styles.testimonials}>
          <h3>What our users say</h3>
          <blockquote>
            “{testimonials[currentTestimonial].quote}” – {testimonials[currentTestimonial].author}
          </blockquote>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>
            © {new Date().getFullYear()} Ready Smart | Affiliate Disclosure: As an
            Amazon Associate, we earn from qualifying purchases.
          </p>
          <nav className={styles.footerNav}>
            <Link href="/">Home</Link>
            <Link href="/affiliate">Affiliate</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </footer>
      </div>
    </>
  )
}
