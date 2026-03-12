'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function PersonalitySection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const t = useTranslations('personality')
  const tGallery = useTranslations('gallery')

  return (
    <section
      id="personality"
      ref={sectionRef}
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-[#0d0d0d]"
    >
      {/* Top divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 max-w-4xl text-center">
        {/* Intro text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white/60 text-lg mb-8"
        >
          {t('intro')}
        </motion.p>

        {/* Conspiracy board image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video max-w-2xl mx-auto"
        >
          <Image
            src="/images/gallery/originals/conspiracy-board-1.webp"
            alt={tGallery('images.conspiracyBoard1')}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover rounded-lg"
          />
        </motion.div>

        {/* Outro text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/60 text-lg mt-8 italic"
        >
          {t('outro')}
        </motion.p>
      </div>
    </section>
  )
}
