'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.brand}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className={styles.logo}
        />
        <span>Ready Smart</span>
      </Link>

      <button
  className={`${styles.menuButton} ${isOpen ? styles.open : ''}`}
  onClick={toggleMenu}
  aria-label="Toggle menu"
>
  <span></span>
  <span></span>
  <span></span>
</button>


      <ul className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
        <li className={pathname === '/' ? styles.active : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === '/affiliate' ? styles.active : ''}>
          <Link href="/affiliate">Affiliate</Link>
        </li>
        <li className={pathname === '/contact' ? styles.active : ''}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
