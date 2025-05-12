// src/app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{
      textAlign: 'center',
      padding: '5rem 1rem',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#666' }}>
        This page doesn’t exist or isn’t published yet.
      </p>
      <Link href="/blog" style={{
        display: 'inline-block',
        padding: '0.75rem 1.5rem',
        backgroundColor: '#0070f3',
        color: '#fff',
        borderRadius: '0.5rem',
        textDecoration: 'none',
        fontWeight: 'bold'
      }}>
        ← Back to Blog
      </Link>
    </main>
  );
}
