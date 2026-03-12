'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useState, useMemo } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import { galleryImages, galleryCategories } from '@/data/gallery'
import type { GalleryCategory } from '@/types'

type CategoryFilter = 'all' | GalleryCategory

export function GallerySection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()
  const t = useTranslations('gallery')

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all')

  // Filter images based on selected category
  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') return galleryImages
    return galleryImages.filter((img) => img.category === activeCategory)
  }, [activeCategory])

  // Split images for priority loading (first 6) vs lazy loading (rest)
  const priorityImages = filteredImages.slice(0, 6)
  const lazyImages = filteredImages.slice(6)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.4,
      },
    },
  }

  return (
    <section
      id="space"
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
        {/* Section header with The Steady Line */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
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
          <p className="mt-6 text-white/50 text-lg max-w-xl mx-auto">
            {t('subtitle')}
          </p>
          {/* The Steady Line - centered, with glow */}
          <div className="w-16 h-[3px] bg-[var(--color-burgundy)] mx-auto mt-10 shadow-[0_0_15px_rgba(114,47,55,0.4)]" />
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: 0.2 }}
          className="mb-12"
        >
          {/* Desktop: horizontal button tabs */}
          <div
            className="hidden md:flex justify-center gap-3"
            role="tablist"
            aria-label={t('categoriesLabel')}
          >
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                role="tab"
                aria-selected={activeCategory === category}
                aria-controls="gallery-grid"
                className={`
                  px-5 py-2.5 rounded-full text-sm font-medium tracking-wide
                  transition-all duration-300 cursor-pointer
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-burgundy)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]
                  ${
                    activeCategory === category
                      ? 'bg-[var(--color-burgundy)] text-white shadow-[0_0_20px_rgba(114,47,55,0.3)]'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90 border border-white/10'
                  }
                `}
              >
                {t(`categories.${category}`)}
              </button>
            ))}
          </div>

          {/* Mobile: dropdown select */}
          <div className="md:hidden flex justify-center">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value as CategoryFilter)}
              aria-label={t('categoriesLabel')}
              className="
                appearance-none bg-white/5 border border-white/10 rounded-lg
                px-5 py-3 text-white text-sm font-medium
                focus:outline-none focus:ring-2 focus:ring-[var(--color-burgundy)] focus:ring-offset-2 focus:ring-offset-[#1a1a1a]
                cursor-pointer min-w-[180px] text-center
              "
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='rgba(255,255,255,0.5)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                paddingRight: '36px',
              }}
            >
              {galleryCategories.map((category) => (
                <option key={category} value={category} className="bg-[#1a1a1a] text-white">
                  {t(`categories.${category}`)}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Photo Gallery with Lightbox */}
        <PhotoProvider
          speed={() => (prefersReducedMotion ? 0 : 300)}
          easing={() => (prefersReducedMotion ? 'linear' : 'cubic-bezier(0.25, 0.1, 0.25, 1)')}
          maskOpacity={0.95}
          toolbarRender={({ index }) => (
            <div className="text-white/60 text-sm">
              {index + 1} / {filteredImages.length}
            </div>
          )}
        >
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            id="gallery-grid"
            role="tabpanel"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            {/* Priority images (first 6) */}
            {priorityImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className="group relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-[#222] to-[#151515] cursor-pointer focus-within:ring-2 focus-within:ring-[var(--color-burgundy)] focus-within:ring-offset-2 focus-within:ring-offset-[#1a1a1a]"
              >
                <PhotoView src={image.src}>
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={t(image.altKey)}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={index < 4}
                      loading={index < 4 ? 'eager' : undefined}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    {/* Expand icon on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="text-white"
                        >
                          <path d="M15 3h6v6M14 10l7-7M9 21H3v-6M10 14l-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </PhotoView>
              </motion.div>
            ))}

            {/* Lazy-loaded images (after first 6) */}
            {lazyImages.map((image) => (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-[#222] to-[#151515] cursor-pointer focus-within:ring-2 focus-within:ring-[var(--color-burgundy)] focus-within:ring-offset-2 focus-within:ring-offset-[#1a1a1a]"
                >
                  <PhotoView src={image.src}>
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={t(image.altKey)}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                      {/* Expand icon on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="text-white"
                          >
                            <path d="M15 3h6v6M14 10l7-7M9 21H3v-6M10 14l-7 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </PhotoView>
                </motion.div>
              ))}
          </motion.div>
        </PhotoProvider>

        {/* Empty state when no images in category */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-white/40 text-lg">{t('noImages')}</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
