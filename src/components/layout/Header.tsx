'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { navItems, siteConfig } from '@/data/siteConfig'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <motion.div
          animate={{
            backgroundColor: isScrolled ? 'rgba(26, 26, 26, 0.95)' : 'rgba(0, 0, 0, 0)',
            backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.3 }}
          className="px-6 lg:px-12 border-b border-transparent"
          style={{
            borderColor: isScrolled ? 'rgba(255,255,255,0.05)' : 'transparent',
          }}
        >
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo - BIGGER */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="relative z-10"
            >
              <div className="relative h-10 w-40 md:h-12 md:w-48 lg:h-14 lg:w-56">
                <Image
                  src="/images/hero-logo.png"
                  alt={siteConfig.name}
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm tracking-wide text-white/70 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Book Now Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex px-6 py-3 text-sm font-medium tracking-wide rounded-sm bg-[var(--color-burgundy)] text-white hover:bg-[var(--color-burgundy-light)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-burgundy)]/20"
              >
                Book Now
              </a>

              {/* Hamburger Menu - Mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden relative z-10 p-2"
                aria-label="Open menu"
              >
                <div className="w-7 h-0.5 mb-2 bg-white" />
                <div className="w-7 h-0.5 mb-2 bg-white" />
                <div className="w-5 h-0.5 bg-white" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  )
}
