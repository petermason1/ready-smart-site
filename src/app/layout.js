// layout.js - updated layout with reusable Navbar and Footer

import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export const metadata = {
  title: 'Ready Smart Homes',
  description: 'Smart home setup made simple – Home Assistant, Alexa, and Apple HomeKit integrations.',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="mainWrapper">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
