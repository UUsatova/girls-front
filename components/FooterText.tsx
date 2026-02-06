'use client'

import { motion } from 'framer-motion'

export default function FooterText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="pointer-events-none fixed inset-x-0 bottom-4 flex justify-center px-4 sm:px-0"
    >
      <p className="text-center text-[0.75rem] sm:text-xs text-[#888888]">
        18+ only. We don't store your chats unnecessarily.
      </p>
    </motion.div>
  )
}

