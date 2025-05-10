// app/layout.js
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
