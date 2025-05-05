'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.brand}>
          <img src="/logo.png" className={styles.logo} alt="Ready Smart Logo" />
          Ready Smart
        </Link>

        {/* ✅ Hamburger button for mobile */}
        <button
          className={`${styles.menuButton} ${isOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {/* ✅ Mobile menu toggle */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/affiliate">Affiliate</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
