'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function HeroSection() {
  const router = useRouter()

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-start px-4 sm:px-6 lg:px-8 text-center pt-24">
      {/* Vignette overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_black_100%)] opacity-70" />

      {/* 18+ badge - at the top right */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-4 right-4 z-20"
      >
        <div className="flex items-center gap-2 rounded-full bg-[#ff0066]/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide shadow-lg">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white text-[0.7rem]">
            18+
          </span>
          <span className="text-white/90">Adults only</span>
        </div>
      </motion.div>

      {/* Main Image - background full section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <Image
          src="/images/group1.webp"
          alt="AI Companions"
          fill
          className="object-contain scale-100"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text readability - full page */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>

      {/* Main content - on top of image */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center justify-center gap-8 lg:gap-12 mt-8">
        {/* Text content - centered at top */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-balance neon-glow bg-gradient-to-r from-[#ff0066] via-[#00ffff] to-[#ff0066] bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bloom"
          >
            Your private AI companion. No censorship. No judgment.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 text-balance text-[1.15rem] sm:text-xl md:text-[1.5rem] text-[#cccccc]"
          >
            Talk about anything — from deep emotions to wild fantasies. 100% private.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex justify-center"
          >
            <motion.button
              type="button"
              onClick={() => router.push('/login')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="neon-border skewed-card min-w-full sm:min-w-[260px] md:min-w-[280px] px-10 py-4 text-lg sm:text-xl font-semibold text-white neon-glow bloom hover:neon-glow-cyan transition-all relative overflow-hidden"
            >
              <span className="relative z-10">Start for free</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Smooth transition gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-black/10 via-black/30 via-black/50 to-black/80 pointer-events-none z-0" />
    </section>
  )
}

