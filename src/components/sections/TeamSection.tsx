'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { TeamCard } from '@/components/ui/TeamCard'
import { teamMembers } from '@/data/team'

export function TeamSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const t = useTranslations('team')

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-28 md:py-40"
      style={{ backgroundColor: '#111' }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-burgundy)]/30 to-transparent" />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-burgundy)]/3 to-transparent" />

      <div className="relative container mx-auto px-6 md:px-8 max-w-6xl">
        {/* Section header with The Steady Line */}
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
          {/* The Steady Line - centered, with glow */}
          <div className="w-16 h-[3px] bg-[var(--color-burgundy)] mx-auto mt-10 shadow-[0_0_15px_rgba(114,47,55,0.4)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
