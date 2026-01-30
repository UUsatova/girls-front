'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, MessageCircle, Sparkles } from 'lucide-react'
import { api } from '@/lib/api'

interface ProfileCardProps {
  girlId: number
  onOpen: () => void
  name: string
  age: number
  bio: string
  image: string
  tags: string[]
  isNew?: boolean
  index: number
}

export function ProfileCard({
  girlId,
  onOpen,
  name,
  age,
  bio,
  image,
  tags,
  isNew,
  index,
}: ProfileCardProps) {
  const [startingChat, setStartingChat] = useState(false)

  const handleStartChat = async () => {
    try {
      setStartingChat(true)
      await api.post('/chats/start/', { girl_id: girlId })
    } catch (err) {
      // Silently fail; UI can be wired to a toast system later
    } finally {
      setStartingChat(false)
    }
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
      }}
      whileHover={{
        y: -5,
      }}
      onClick={onOpen}
      className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-900 via-deep-900/40 to-transparent opacity-90" />
      </div>

      {/* Badges */}
      <div className="absolute top-4 left-4 flex gap-2">
        {isNew && (
          <div className="px-2.5 py-1 bg-hotPink/90 backdrop-blur-sm rounded-lg flex items-center gap-1.5 shadow-lg shadow-hotPink/20">
            <Sparkles className="w-3 h-3 text-white" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-white">
              New
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-3">
        <div>
          <div className="flex items-baseline gap-2 mb-1">
            <h3 className="text-2xl font-display font-bold text-white group-hover:text-hotPink transition-colors">
              {name}
            </h3>
            <span className="text-lg font-light text-lavender-muted">
              {age}
            </span>
          </div>
          <p className="text-sm text-lavender line-clamp-2 leading-relaxed opacity-90">
            {bio}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 2).map((tag, i) => (
            <span
              key={i}
              className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-purple-deep/50 border border-lavender-faint text-lavender-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions - Reveal on Hover */}
        <div className="grid grid-cols-2 gap-3 mt-2 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <button
            onClick={(event) => {
              event.stopPropagation()
              handleStartChat()
            }}
            disabled={startingChat}
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-hotPink hover:bg-hotPink-hover text-white font-medium text-sm transition-colors shadow-lg shadow-hotPink/25 disabled:opacity-70"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{startingChat ? 'Starting...' : 'Chat'}</span>
          </button>
          <button
            onClick={(event) => event.stopPropagation()}
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan/10 hover:bg-cyan/20 border border-cyan/30 text-cyan font-medium text-sm transition-colors backdrop-blur-md"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Voice</span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}
