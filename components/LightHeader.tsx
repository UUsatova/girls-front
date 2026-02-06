'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export function LightHeader() {
  const router = useRouter()

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-50 bg-black/20 border-b border-[#ff0066]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff0066] to-[#00ffff] flex items-center justify-center">
            <span className="text-white font-bold text-lg">E</span>
          </div>
          <span className="text-xl font-bold text-white hidden sm:inline">
            EROS
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-[#cccccc] hover:text-white transition-colors">
            Features
          </a>
          <a href="#companions" className="text-sm text-[#cccccc] hover:text-white transition-colors">
            Companions
          </a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push('/login')}
            className="px-4 py-2 rounded-lg bg-[#ff0066]/20 hover:bg-[#ff0066]/30 border border-[#ff0066]/50 text-white text-sm font-medium transition-all"
          >
            Login
          </button>
        </div>
      </div>
    </motion.header>
  )
}
