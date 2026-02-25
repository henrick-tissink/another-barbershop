'use client'

import { cn } from '@/lib/utils'
import { Service } from '@/types'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { siteConfig } from '@/data/siteConfig'

interface ServiceCardProps {
  service: Service
  className?: string
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const t = useTranslations('services')
  const tCommon = useTranslations('common')

  return (
    <motion.a
      href={siteConfig.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group relative rounded-lg p-6 h-full block cursor-pointer',
        'border border-white/10 hover:border-[var(--color-burgundy)]/50',
        'bg-gradient-to-br from-[#222] to-[#1a1a1a]',
        'transition-all duration-500',
        'hover:shadow-xl hover:shadow-[var(--color-burgundy)]/10',
        className
      )}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-burgundy)]/0 group-hover:via-[var(--color-burgundy)] to-transparent transition-all duration-500" />

      <div className="relative flex flex-col h-full">
        {/* Service name */}
        <div className="flex items-start gap-3 mb-2">
          <div className="w-2 h-2 rounded-full bg-[var(--color-burgundy)] mt-2 shadow-[0_0_8px_rgba(114,47,55,0.5)]" />
          <h3 className="text-xl font-medium text-white group-hover:text-[var(--color-burgundy)] transition-colors duration-300">
            {t(`items.${service.id}.name`)}
          </h3>
        </div>

        {/* Premium indicator line */}
        <div className="w-8 h-[2px] bg-[var(--color-burgundy)]/40 ml-5 mb-4" />

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed flex-1 pl-5">
          {t(`items.${service.id}.description`)}
        </p>

        {/* Price and duration */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[var(--color-burgundy)] font-bold text-xl">
            {service.price} <span className="text-sm font-normal text-white/40">{service.currency}</span>
          </span>
          {service.duration && (
            <span className="text-white/30 text-sm flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              {service.duration} {tCommon('minutes')}
            </span>
          )}
        </div>

        {/* Book button - appears on hover */}
        <div className="mt-4 flex justify-end">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-[var(--color-burgundy)] transition-colors duration-300">
            {t('book')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transform group-hover:translate-x-1 transition-transform duration-300">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </motion.a>
  )
}

export default ServiceCard
