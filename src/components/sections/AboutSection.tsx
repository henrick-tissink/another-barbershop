'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function AboutSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ backgroundColor: '#151515' }}
    >
      {/* Top divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-burgundy)]/50 to-transparent" />

      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-burgundy)]/5 to-transparent" />

      <div className="relative container mx-auto px-6 md:px-8 max-w-6xl">
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
              About Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            More than just<br />
            <span className="text-white/60">a haircut.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-white/60 text-lg leading-relaxed">
              Another Barbershop was born from a simple idea: what if getting a
              haircut felt less like an errand and more like a ritual? A place
              where you walk in, slow down, and walk out feeling like the best
              version of yourself.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              We are a team of barbers who believe in taking our time, having
              real conversations, and never cutting corners. Every detail
              matters, from the first consultation to the final touch.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              Located in the heart of Bucharest, we have created a space where
              craftsmanship meets comfort. No rush, no pretense. Just honest
              work, done right.
            </p>

            {/* Stats - more prominent */}
            <div className="flex gap-16 pt-10 mt-4 border-t border-white/10">
              <div>
                <div className="text-5xl font-light text-[var(--color-burgundy)]">6+</div>
                <div className="text-white/40 text-sm mt-2 tracking-wide">Years Experience</div>
              </div>
              <div>
                <div className="text-5xl font-light text-[var(--color-burgundy)]">1000+</div>
                <div className="text-white/40 text-sm mt-2 tracking-wide">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Pull quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center"
          >
            <blockquote className="relative pl-8">
              {/* The Steady Line - quote accent - thicker with glow */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--color-burgundy)] shadow-[0_0_15px_rgba(114,47,55,0.5)]" />
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80 leading-relaxed">
                &ldquo;We do not just cut hair. We create an experience. A
                moment to pause, refresh, and leave feeling ready for
                anything.&rdquo;
              </p>
              <footer className="mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[2px] bg-[var(--color-burgundy)]/50" />
                  <span className="text-white/40 text-sm tracking-widest uppercase">
                    The Team
                  </span>
                </div>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
