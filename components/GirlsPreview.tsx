'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Sparkles, MessageCircle } from 'lucide-react'

const girls = [
  {
    id: 1,
    name: 'Amber',
    age: 35,
    bio: "Your gorgeous stepmom who's home alone with you...",
    image: '/images/girlAi2.png',
    isNew: false,
    tags: ['Mature', 'Stepfamily'],
  },
  {
    id: 2,
    name: 'Irina',
    age: 22,
    bio: 'Wealthy Russian heiress, accustomed to luxury and...',
    image: '/images/girlAi1.png',
    isNew: true,
    tags: ['Luxury', 'Russian'],
  },
  {
    id: 3,
    name: 'Coco',
    age: 21,
    bio: 'You posted to Craigslist about the cute blonde in...',
    image: '/images/girlAi3.webp',
    isNew: true,
    tags: ['Blonde', 'Casual'],
  },
  {
    id: 4,
    name: 'Emma',
    age: 23,
    bio: 'Young fitness trainer who loves to motivate and inspire...',
    image: '/images/girlAi4.webp',
    isNew: false,
    tags: ['Fitness', 'Energetic'],
  },
  {
    id: 5,
    name: 'Aisha',
    age: 22,
    bio: 'Modest Muslim woman with a gentle and caring nature...',
    image: '/images/girlAi5.png',
    isNew: true,
    tags: ['Modest', 'Caring'],
  },
  {
    id: 6,
    name: 'Sarah',
    age: 28,
    bio: 'English teacher who loves helping students learn and grow...',
    image: '/images/girlAi6.png',
    isNew: false,
    tags: ['Teacher', 'Educational'],
  },
]

export function GirlsPreview() {
  const router = useRouter()

  return (
    <section className="relative py-32 bg-black/80 overflow-hidden">
      {/* Smooth transition gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black/80 via-black/50 via-black/30 via-black/10 to-transparent pointer-events-none z-0" />
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 0, 102, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 0, 102, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold neon-glow-white mb-4">
            Meet Your Companions
          </h2>
          <p className="text-[#cccccc] text-lg md:text-xl max-w-2xl mx-auto">
            Choose from our curated selection of AI companions
          </p>
        </div>

        {/* Girls Grid - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {girls.map((girl, index) => (
            <div
              key={girl.id}
              className="group relative"
            >
              <div className="overflow-hidden aspect-[3/4] w-full skewed-card-alt glitch-hover">
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={girl.image}
                    alt={girl.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                  
                  {/* New Badge */}
                  {girl.isNew && (
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#ff0066]/90 rounded-lg flex items-center gap-1.5 shadow-lg shadow-[#ff0066]/30 z-10">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                        New
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
                    <div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-white font-heading">
                          {girl.name}
                        </h3>
                        <span className="text-lg font-light text-[#cccccc] font-mono">
                          {girl.age}
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-[#cccccc] line-clamp-2 leading-relaxed">
                        {girl.bio}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {girl.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#ff0066]/20 border border-[#ff0066]/40 text-[#ff0066]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          router.push('/login')
                        }}
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#ff0066] text-white font-medium text-sm shadow-lg shadow-[#ff0066]/30"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Chat</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
