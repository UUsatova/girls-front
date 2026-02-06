'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Gamepad2, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function LiveActionBanner() {
  const router = useRouter()

  return (
    <section className="relative py-32 bg-black/90 backdrop-blur-sm overflow-hidden">
      {/* Smooth transition gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black/80 via-black/50 via-black/30 via-black/10 to-transparent pointer-events-none z-0" />
      
      {/* Blurred pink shapes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-[#ff0066]/20 rounded-full blur-3xl" />
        <div className="absolute right-20 top-20 w-80 h-80 bg-[#ff0066]/15 rounded-full blur-3xl" />
        <div className="absolute left-1/2 bottom-20 w-72 h-72 bg-[#ff4da6]/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          {/* Left Side - Navigation & Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <button className="mb-6 w-12 h-12 rounded-full bg-[#ff0066]/20 border border-[#ff0066]/50 flex items-center justify-center text-white hover:bg-[#ff0066]/30 transition-all neon-glow">
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="relative w-full aspect-[3/4]">
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-[#ff0066]/30 rounded-lg backdrop-blur-sm border border-[#ff0066]/50 flex items-center justify-center z-10">
                <Gamepad2 className="w-7 h-7 text-[#ff0066]" />
              </div>
              
              <div className="skewed-card neon-border overflow-hidden bg-gradient-to-br from-black/80 to-[#1a0033]/80 backdrop-blur-sm aspect-[3/4]">
                <Image
                  src="/images/image1.png"
                  alt="Live Action"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Center - Menu Interface */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-[3/4]">
              <div className="absolute inset-0 skewed-card neon-border bg-gradient-to-br from-black/90 to-[#1a0033]/90 backdrop-blur-md p-6 flex flex-col gap-4 z-20">
                <h3 className="text-2xl font-bold text-white neon-glow mb-2">
                  Live Action
                </h3>
                
                <div className="flex flex-col gap-3">
                  <button className="w-full py-3 px-4 rounded-xl bg-[#ff0066] hover:bg-[#ff0066]/90 text-white font-semibold text-sm transition-all shadow-lg shadow-[#ff0066]/30 neon-glow text-left">
                    SEXY DANCE
                  </button>
                  <button className="w-full py-3 px-4 rounded-xl bg-[#ff0066] hover:bg-[#ff0066]/90 text-white font-semibold text-sm transition-all shadow-lg shadow-[#ff0066]/30 neon-glow text-left">
                    LICK LOLLIPOP
                  </button>
                </div>

                {/* Progress indicator */}
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-3 h-3 rounded-full bg-[#ff0066] border-2 border-white" />
                  <div className="flex-1 h-0.5 bg-white/20 rounded-full">
                    <div className="h-full w-1/3 bg-[#ff0066] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Background image */}
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/images/image2.png"
                  alt="Live Action Background"
                  fill
                  className="object-cover opacity-30"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative text-center lg:text-left"
          >
            <div className="mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white neon-glow">
                  LIVE ACTION
                </h2>
                <div className="w-16 h-16 rounded-full border-2 border-[#ff0066] bg-[#ff0066]/20 flex items-center justify-center neon-glow">
                  <Gamepad2 className="w-8 h-8 text-[#ff0066]" />
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-[#cccccc] mb-6">
                Available on Eros
              </p>
              
              <motion.button
                onClick={() => router.push('/login')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-[#ff0066] hover:bg-[#ff0066]/90 text-white font-bold text-lg md:text-xl transition-all shadow-lg shadow-[#ff0066]/30 neon-glow bloom"
              >
                Take control now
              </motion.button>
            </div>

            {/* Right side image */}
            <div className="relative w-full aspect-[3/4] mt-8">
              <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-[#ff0066]/30 rounded-lg backdrop-blur-sm border border-[#ff0066]/50 flex items-center justify-center z-10">
                <Gamepad2 className="w-7 h-7 text-[#ff0066]" />
              </div>
              
              <div className="skewed-card neon-border overflow-hidden bg-gradient-to-br from-black/80 to-[#1a0033]/80 backdrop-blur-sm aspect-[3/4]">
                <Image
                  src="/images/image3.png"
                  alt="Live Action"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
