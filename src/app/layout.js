// src/app/layout.js

import './globals.css';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export const metadata = {
  title: 'Ready Smart Homes | Hassle-Free Smart Home Installation',
  description:
    'We install and configure Home Assistant, Alexa, and Apple HomeKit so you can enjoy automation without the tech stress.',
  keywords:
    'smart home installation, Home Assistant setup, Alexa configuration, Apple HomeKit expert, smart plugs, UK smart home help',
  metadataBase: new URL('https://www.readysmarthomes.com'),
  openGraph: {
    title: 'Ready Smart Homes | Hassle-Free Smart Home Installation',
    description:
      'We install and configure Home Assistant, Alexa, and Apple HomeKit so you can enjoy automation without the tech stress.',
    url: 'https://www.readysmarthomes.com',
    siteName: 'Ready Smart Homes',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Smart Home Setup by Ready Smart Homes',
      },
    ],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VHE1WE56M8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VHE1WE56M8', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body>
        <Navbar />
        <main className="mainWrapper">{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
