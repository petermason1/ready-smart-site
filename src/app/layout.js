// app/layout.js
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Ready Smart Homes',
  description: 'Smart Home. Simplified.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <body>
    <div className="pageLayout">
      <Navbar />
      <main className="mainWrapper">{children}</main>
      <Footer />
    </div>
  </body>
</html>

  );
}
