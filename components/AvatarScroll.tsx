'use client'

import React from 'react'
import { motion } from 'framer-motion'

export interface AvatarItem {
  id: number
  name: string
  imageUrl: string
  isNew?: boolean
}

interface AvatarScrollProps {
  avatars: AvatarItem[]
}

export function AvatarScroll({ avatars }: AvatarScrollProps) {
  return (
    <div className="w-full overflow-x-auto pb-4 pt-2 no-scrollbar">
      <div className="flex items-start gap-4 px-1">
        {avatars.map((avatar, index) => (
          <motion.button
            key={avatar.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="flex flex-col items-center gap-2 group min-w-[72px]"
          >
            <div className="relative w-[72px] h-[72px] rounded-full p-[2px] transition-transform duration-300 group-hover:scale-105 bg-gradient-to-tr from-hotPink to-purple-500">
              <div className="w-full h-full rounded-full overflow-hidden bg-deep-800 flex items-center justify-center border-2 border-deep-900">
                <img
                  src={avatar.imageUrl}
                  alt={avatar.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {avatar.isNew && (
                <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-cyan rounded-full border-2 border-deep-900 shadow-sm" />
              )}
            </div>
            <span className="text-xs font-medium tracking-wide text-lavender group-hover:text-white">
              {avatar.name}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
