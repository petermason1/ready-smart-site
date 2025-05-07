import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ready Smart Homes',
  description: 'Smart home setup made simple – Home Assistant, Alexa, and Apple HomeKit integrations.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pageLayout">
          <Navbar />
          <main className="mainWrapper">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
