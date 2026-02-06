'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function HeroSection() {
  const router = useRouter()

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-start px-4 sm:px-6 lg:px-8 text-center pt-24 bg-black">
      {/* Vignette overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_black_100%)] opacity-70" />

      {/* 18+ badge - at the top right */}
      <div className="absolute top-4 right-4 z-20">
        <div className="flex items-center gap-2 rounded-full bg-hotPink/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide shadow-lg">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white text-[0.7rem]">
            18+
          </span>
          <span className="text-white/90">Adults only</span>
        </div>
      </div>

      {/* Main Image - background full section */}
      <div className="absolute inset-0 w-full h-full z-0">
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
      </div>

      {/* Main content - on top of image */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center justify-center gap-8 lg:gap-12 mt-8 md:mt-12 lg:mt-16">
        {/* Text content - centered at top */}
        <div className="w-full text-center">
          <h1 className="text-balance neon-glow-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-normal leading-normal">
            Your private AI companion. No censorship. No judgment.
          </h1>

          <p className="mt-6 text-balance text-lg sm:text-xl md:text-2xl text-white font-normal">
            Talk about anything – from deep emotions to wild fantasies. 100% private.
          </p>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => router.push('/login')}
              className="gradient-shimmer skewed-card min-w-[280px] px-10 py-4 text-lg font-semibold text-white transition-all relative overflow-hidden hover:scale-105 active:scale-95 border-none shadow-lg shadow-hotPink/50"
            >
              <span className="relative z-10">Start for free</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Smooth transition gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-black/20 via-black/40 via-black/60 via-black/80 to-black pointer-events-none z-10" />
    </section>
  )
}

