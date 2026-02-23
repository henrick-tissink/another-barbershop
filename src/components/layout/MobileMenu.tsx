'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { siteConfig } from '@/data/siteConfig'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'

interface MobileMenuProps {
  onClose: () => void
}

const menuVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

const linkVariants = {
  closed: {
    opacity: 0,
    y: 20,
  },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
}

const buttonVariants = {
  closed: {
    opacity: 0,
    y: 20,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const t = useTranslations('nav')
  const tCommon = useTranslations('common')
  const tFooter = useTranslations('footer')

  const navItems = [
    { label: t('about'), href: '#about' },
    { label: t('services'), href: '#services' },
    { label: t('team'), href: '#team' },
    { label: t('gallery'), href: '#gallery' },
    { label: t('contact'), href: '#contact' },
  ]

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    onClose()
    // Small delay to allow menu close animation
    setTimeout(() => {
      const targetId = href.replace('#', '')
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }

  return (
    <motion.div
      initial="closed"
      animate="open"
      exit="closed"
      variants={menuVariants}
      className="fixed inset-0 z-50 flex flex-col"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      {/* Header with logo and close */}
      <div className="flex items-center justify-between p-6">
        <div className="relative h-10 w-40">
          <Image
            src="/images/hero-logo.png"
            alt={siteConfig.name}
            fill
            className="object-contain object-left"
          />
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/20 transition-all duration-300"
            aria-label="Close menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col items-center justify-center gap-8">
        {navItems.map((item, i) => (
          <motion.a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            custom={i}
            variants={linkVariants}
            className="text-white text-3xl font-light tracking-wide hover:text-[var(--color-burgundy)] transition-colors duration-300"
          >
            {item.label}
          </motion.a>
        ))}
      </nav>

      {/* Action Buttons */}
      <motion.div
        variants={buttonVariants}
        className="p-8"
      >
        <div className="flex flex-col gap-3">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full px-8 py-4 text-white font-medium tracking-wide rounded-sm bg-[var(--color-burgundy)] hover:bg-[var(--color-burgundy-light)] transition-all duration-300 shadow-lg shadow-[var(--color-burgundy)]/30"
            onClick={onClose}
          >
            {tCommon('bookNow')}
          </a>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-8 py-4 text-[#25D366] font-medium tracking-wide rounded-sm border border-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
            onClick={onClose}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {tCommon('whatsapp')}
          </a>
        </div>

        {/* The Steady Line */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="w-8 h-[2px] bg-[var(--color-burgundy)] shadow-[0_0_8px_rgba(114,47,55,0.4)]" />
          <span className="text-white/30 text-xs tracking-widest uppercase">
            {tFooter('signature')}
          </span>
          <div className="w-8 h-[2px] bg-[var(--color-burgundy)] shadow-[0_0_8px_rgba(114,47,55,0.4)]" />
        </div>
      </motion.div>
    </motion.div>
  )
}
