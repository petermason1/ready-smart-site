// app/blog/page.js
import styles from './Blog.module.css';
import Head from 'next/head';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Smart Home Tips & Guides | Ready Smart Homes Blog</title>
        <meta name="description" content="Get the latest smart home tips, automation guides, and product insights from the team at Ready Smart Homes." />
        <meta name="keywords" content="smart home blog, home automation tips, ready smart homes, Home Assistant, Alexa, Apple HomeKit" />
        <meta property="og:title" content="Smart Home Tips & Guides | Ready Smart Homes" />
        <meta property="og:description" content="Get the latest smart home tips, automation guides, and product insights from the team at Ready Smart Homes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.readysmarthomes.com/blog" />
      </Head>

      <main className={styles.blogWrapper}>
        <h1 className={styles.title}>Ready Smart Blog</h1>
        <p className={styles.subtitle}>
          Smart tips, automation advice, and DIY guides to upgrade your home.
        </p>

        <div className={styles.grid}>
          {/* Placeholder cards */}
          <div className={styles.card}>
            <h2>Coming Soon &rarr;</h2>
            <p>Our blog posts will go here once we are ready to publish.</p>
          </div>
        </div>
      </main>
    </>
  );
}
