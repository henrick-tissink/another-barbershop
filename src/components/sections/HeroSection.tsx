'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/siteConfig'

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-bg.mov" type="video/quicktime" />
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

        {/* Burgundy tint */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,_rgba(114,47,55,0.2)_0%,_transparent_60%)]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.5)_100%)]" />
      </div>

      {/* Content - unified group */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 gap-0"
      >
        {/* Logo */}
        <Image
          src="/images/hero-logo.png"
          alt={siteConfig.name}
          width={2088}
          height={622}
          className="w-[80vw] md:w-[65vw] lg:w-[50vw] h-auto drop-shadow-2xl"
          priority
        />

        {/* Tagline - tight to logo */}
        <p className="text-base md:text-lg lg:text-xl text-white/50 font-light tracking-[0.15em] uppercase -mt-1">
          {siteConfig.tagline}
        </p>

        {/* The Steady Line */}
        <div className="w-12 h-[2px] bg-[var(--color-burgundy)] mt-4 shadow-[0_0_15px_rgba(114,47,55,0.5)]" />

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
          <Button
            href={siteConfig.bookingUrl}
            variant="primary"
            size="lg"
            className="text-sm md:text-base px-8 py-3 shadow-xl shadow-[var(--color-burgundy)]/40 hover:shadow-2xl hover:shadow-[var(--color-burgundy)]/50"
          >
            Book Your Cut
          </Button>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 text-sm md:text-base font-medium text-[#25D366] border border-[#25D366] hover:bg-[#25D366] hover:text-white rounded-sm transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-white/40 text-xs tracking-[0.3em] uppercase font-medium">
            Scroll
          </span>
          <div className="w-[2px] h-12 bg-gradient-to-b from-[var(--color-burgundy)] via-white/30 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Decorative corner accents */}
      <div className="absolute top-28 left-8 hidden md:block">
        <div className="w-20 h-[2px] bg-white/20" />
        <div className="w-[2px] h-20 bg-white/20" />
      </div>
      <div className="absolute bottom-12 right-8 hidden md:block">
        <div className="absolute bottom-0 right-0 w-20 h-[2px] bg-white/20" />
        <div className="absolute bottom-0 right-0 w-[2px] h-20 bg-white/20" />
      </div>
    </section>
  )
}
