'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/siteConfig'

export function ContactSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const t = useTranslations('contact')
  const tCommon = useTranslations('common')
  const tGallery = useTranslations('gallery')

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 md:py-40"
      style={{ backgroundColor: '#111' }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-burgundy)]/30 to-transparent" />

      <div className="relative container mx-auto px-6 md:px-8 max-w-6xl">
        {/* Storefront banner */}
        <div className="relative h-48 md:h-64 mb-12 -mx-6 md:-mx-8 overflow-hidden">
          <Image
            src="/images/gallery/originals/storefront.webp"
            alt={tGallery('images.storefront')}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#111] to-transparent" />
        </div>

        {/* Section header with The Steady Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-[3px] bg-[var(--color-burgundy)] shadow-[0_0_10px_rgba(114,47,55,0.5)]" />
            <span className="text-[var(--color-burgundy)] text-sm tracking-[0.25em] uppercase font-semibold">
              {t('label')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            {t('title')}
          </h2>
          <p className="mt-4 text-white/40 text-lg">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Address */}
            <div className="group">
              <h3 className="text-xs uppercase tracking-[0.25em] text-[var(--color-burgundy)] mb-4 flex items-center gap-3 font-semibold">
                <span className="w-6 h-[2px] bg-[var(--color-burgundy)]" />
                {t('address')}
              </h3>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.country}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[var(--color-burgundy)] transition-colors duration-300"
              >
                <p className="text-white text-xl font-light">
                  {siteConfig.address.street}
                </p>
                <p className="text-white/60 text-lg">
                  {siteConfig.address.city}, {siteConfig.address.postalCode}
                </p>
                <p className="text-white/60 text-lg">
                  {siteConfig.address.country}
                </p>
              </a>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-[var(--color-burgundy)] mb-4 flex items-center gap-3 font-semibold">
                <span className="w-6 h-[2px] bg-[var(--color-burgundy)]" />
                {t('hours')}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between max-w-sm">
                  <span className="text-white text-lg">{t('weekdays')}</span>
                  <span className="text-white/50 text-lg">{siteConfig.hours.weekdays}</span>
                </div>
                <div className="flex justify-between max-w-sm">
                  <span className="text-white text-lg">{t('saturday')}</span>
                  <span className="text-white/50 text-lg">{siteConfig.hours.saturday}</span>
                </div>
                <div className="flex justify-between max-w-sm">
                  <span className="text-white text-lg">{t('sunday')}</span>
                  <span className="text-white/50 text-lg">{t('closed')}</span>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-[var(--color-burgundy)] mb-4 flex items-center gap-3 font-semibold">
                <span className="w-6 h-[2px] bg-[var(--color-burgundy)]" />
                {t('phone')}
              </h3>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="text-white text-2xl font-light hover:text-[var(--color-burgundy)] transition-colors duration-300"
              >
                {siteConfig.phone}
              </a>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <Button
                href={siteConfig.bookingUrl}
                variant="primary"
                size="lg"
                className="shadow-lg shadow-[var(--color-burgundy)]/20 hover:shadow-xl hover:shadow-[var(--color-burgundy)]/30"
              >
                {tCommon('bookAppointment')}
              </Button>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white font-medium rounded-sm border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {tCommon('whatsapp')}
              </a>
            </div>
          </motion.div>

          {/* Right column - Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="w-full h-80 lg:h-full min-h-[450px] rounded-lg overflow-hidden border border-white/10">
              {/* Static map placeholder with styling that works */}
              <div className="relative w-full h-full bg-[#1a1a1a]">
                {/* Google Maps embed */}
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(`${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.country}`)}&z=17&output=embed`}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: 'grayscale(50%) brightness(0.85) contrast(1.1)',
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t('mapTitle')}
                />

                {/* Overlay with location pin */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-burgundy)]/20 flex items-center justify-center animate-pulse">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-burgundy)]/40 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-[var(--color-burgundy)] shadow-lg shadow-[var(--color-burgundy)]/50" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#111]/90 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <p className="text-white font-medium">{siteConfig.address.street}</p>
                  <p className="text-white/50 text-sm">{siteConfig.address.city}</p>
                </div>
              </div>
            </div>

            {/* Map overlay accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 pointer-events-none">
              <div className="w-full h-[2px] bg-[var(--color-burgundy)]" />
              <div className="w-[2px] h-full bg-[var(--color-burgundy)]" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 pointer-events-none">
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-[var(--color-burgundy)]" />
              <div className="absolute bottom-0 right-0 w-[2px] h-full bg-[var(--color-burgundy)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
