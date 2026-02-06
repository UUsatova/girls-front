'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Logo } from '@/components/Logo'

export function LightHeader() {
  const router = useRouter()

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-50 bg-black border-b border-hotPink/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Logo variant="gradient" />

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#companions" className="text-sm text-gray-light hover:text-white transition-colors">
            Companions
          </a>
          <a href="#philosophy" className="text-sm text-gray-light hover:text-white transition-colors">
            Features
          </a>
          <a href="#chat" className="text-sm text-gray-light hover:text-white transition-colors">
            Chat
          </a>
          <a href="#about" className="text-sm text-gray-light hover:text-white transition-colors">
            About
          </a>
          <a href="#live-action" className="text-sm text-gray-light hover:text-white transition-colors">
            Live Action
          </a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push('/login')}
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-hotPink to-hotPink-light hover:from-hotPink-light hover:to-hotPink border border-hotPink text-white text-sm font-semibold transition-all shadow-lg shadow-hotPink/50 hover:shadow-hotPink/70 hover:scale-105 active:scale-95"
          >
            Login
          </button>
        </div>
      </div>
    </motion.header>
  )
}
