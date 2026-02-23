'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function GallerySection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  // Placeholder grid items with varying sizes
  const placeholderItems = [
    { gridClass: 'md:col-span-2 md:row-span-2', delay: 0 },
    { gridClass: '', delay: 0.1 },
    { gridClass: '', delay: 0.15 },
    { gridClass: '', delay: 0.2 },
    { gridClass: '', delay: 0.25 },
    { gridClass: 'md:col-span-2', delay: 0.3 },
  ]

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-28 md:py-40"
      style={{ backgroundColor: '#1a1a1a' }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

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
              Gallery
            </span>
            <div className="w-12 h-[2px] bg-white/20" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            Our Work
          </h2>
          <p className="mt-6 text-white/40 text-lg max-w-xl mx-auto">
            A glimpse into the craft.
          </p>
          {/* The Steady Line - centered, with glow */}
          <div className="w-16 h-[3px] bg-[var(--color-burgundy)] mx-auto mt-10 shadow-[0_0_15px_rgba(114,47,55,0.4)]" />
        </motion.div>

        {/* Elegant placeholder grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {placeholderItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: item.delay }}
              className={`
                group relative overflow-hidden rounded-lg aspect-square
                bg-gradient-to-br from-[#222] to-[#151515]
                border border-white/5 hover:border-[var(--color-burgundy)]/30
                transition-all duration-500 cursor-pointer
                ${item.gridClass}
              `}
            >
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                    backgroundSize: '20px 20px',
                  }}
                />
              </div>

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[var(--color-burgundy)]/30 transition-colors duration-500">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-white/20 group-hover:text-[var(--color-burgundy)]/50 transition-colors duration-500"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[var(--color-burgundy)]/0 group-hover:bg-[var(--color-burgundy)]/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Coming soon message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-white/30 text-sm tracking-widest uppercase">
            Professional photos coming soon
          </p>
          <div className="flex items-center justify-center gap-2 mt-5">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="w-2 h-2 rounded-full bg-[var(--color-burgundy)]"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
