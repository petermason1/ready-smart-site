// src/app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5rem 1rem',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: '700',
          marginBottom: '1rem',
          color: '#111',
        }}
      >
        404
      </h1>

      <p
        style={{
          fontSize: '1.25rem',
          color: '#555',
          marginBottom: '2rem',
          lineHeight: 1.6,
        }}
      >
        The page you’re looking for doesn’t exist or hasn’t been published yet.
      </p>

      <Link
        href="/"
        style={{
          display: 'inline-block',
          backgroundColor: '#0070f3',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          fontWeight: '600',
          textDecoration: 'none',
          transition: 'background 0.3s ease',
        }}
      >
        ← Back to Homepage
      </Link>
    </section>
  );
}
