'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { siteConfig, navItems } from '@/data/siteConfig'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const tCommon = useTranslations('common')

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Main footer content */}
      <div className="container mx-auto px-6 md:px-8 max-w-6xl py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="relative h-12 w-48 mb-6">
              <Image
                src="/images/hero-logo.png"
                alt={siteConfig.name}
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              {t('tagline')}<br />
              {t('description')}
            </p>

            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[var(--color-burgundy)] hover:border-[var(--color-burgundy)]/50 transition-all duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              )}
              {siteConfig.social.tiktok && (
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[var(--color-burgundy)] hover:border-[var(--color-burgundy)]/50 transition-all duration-300"
                  aria-label="Follow us on TikTok"
                >
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor">
                    <path d="M8.02 0h2.906c.128 1.296.63 2.41 1.51 3.342.878.933 2.023 1.487 3.432 1.663v2.898c-1.322-.066-2.52-.437-3.596-1.113v5.077c0 1.213-.31 2.33-.93 3.35a6.107 6.107 0 01-2.52 2.323c-1.06.56-2.218.84-3.475.84-1.737 0-3.254-.547-4.55-1.64C-.003 15.647.002 14.24.634 12.92c.632-1.32 1.674-2.28 3.125-2.878V13c-.793.373-1.342.886-1.647 1.54-.305.653-.323 1.32-.054 2 .27.68.748 1.2 1.437 1.56.688.36 1.413.467 2.175.32.762-.147 1.402-.507 1.92-1.08.517-.573.793-1.263.828-2.07l.01-9.16V0h-.408z"/>
                  </svg>
                </a>
              )}
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#25D366] hover:border-[#25D366]/50 transition-all duration-300"
                aria-label="Contact us on WhatsApp"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[var(--color-burgundy)] mb-6 font-semibold flex items-center gap-3">
              <span className="w-4 h-[2px] bg-[var(--color-burgundy)]" />
              {t('navigate')}
            </h4>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-white/50 hover:text-white transition-colors duration-300 text-sm"
                >
                  {tNav(item.key)}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[var(--color-burgundy)] mb-6 font-semibold flex items-center gap-3">
              <span className="w-4 h-[2px] bg-[var(--color-burgundy)]" />
              {t('contact')}
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white/50">{siteConfig.address.street}</p>
                <p className="text-white/50">{siteConfig.address.city}</p>
              </div>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="block text-white/50 hover:text-white transition-colors duration-300"
              >
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--color-burgundy)] hover:text-[var(--color-burgundy-light)] transition-colors duration-300 font-medium"
              >
                {tCommon('bookNow')}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/20 text-xs">
              &copy; {currentYear} {siteConfig.name}. {t('rights')}
            </p>

            {/* The Steady Line signature */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-[2px] bg-[var(--color-burgundy)] shadow-[0_0_8px_rgba(114,47,55,0.4)]" />
              <span className="text-white/30 text-xs tracking-widest uppercase">
                {t('signature')}
              </span>
              <div className="w-8 h-[2px] bg-[var(--color-burgundy)] shadow-[0_0_8px_rgba(114,47,55,0.4)]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
