'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useMemo } from 'react'
import { useTranslations } from 'next-intl'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { ServiceCardCompact } from '@/components/ui/ServiceCardCompact'
import { services } from '@/data/services'

export function ServicesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const t = useTranslations('services')

  // Split services by tier
  const { essentials, experience } = useMemo(() => ({
    essentials: services.filter(s => s.tier === 'essentials'),
    experience: services.filter(s => s.tier === 'experience'),
  }), [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-28 md:py-40"
      style={{ backgroundColor: '#1a1a1a' }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 md:px-8 max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="w-12 h-[2px] bg-white/20" />
            <span className="text-[var(--color-burgundy)] text-sm tracking-[0.25em] uppercase font-semibold">
              {t('label')}
            </span>
            <div className="w-12 h-[2px] bg-white/20" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            {t('title')}
          </h2>
          <p className="mt-6 text-white/40 text-lg max-w-xl mx-auto">
            {t('description')}
          </p>
          <div className="w-16 h-[3px] bg-[var(--color-burgundy)] mx-auto mt-10 shadow-[0_0_15px_rgba(114,47,55,0.4)]" />
        </motion.div>

        {/* THE ESSENTIALS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-12"
        >
          {/* Tier label */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/30 text-xs tracking-[0.2em] uppercase font-medium">
              {t('essentials')}
            </span>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>

          {/* Compact grid - 4 columns on desktop, 2 on mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {essentials.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.25 + 0.05 * index }}
              >
                <ServiceCardCompact service={service} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* THE EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          {/* Tier label */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-white/30 text-xs tracking-[0.2em] uppercase font-medium">
              {t('experience')}
            </span>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>

          {/* Feature cards - 2 columns on desktop, 1 on mobile */}
          <div className="grid md:grid-cols-2 gap-5">
            {experience.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.55 + 0.1 * index }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
