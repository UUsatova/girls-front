'use client'

import React from 'react'

const textContent = [
  'Eros AI turns every interaction into an intensely personal and passionate experience with advanced AI companions that adapt to you, remember your every preference and fantasy, and evolve over time for the most natural, vivid, and uncensored conversations.',
  'Choose from a huge variety of ready-made characters or craft your perfect custom companion — fine-tune their appearance, personality, voice, sexual tastes, kinks, hobbies, and any other details so they match your mood and desires perfectly.',
  'Connect in multiple ways: smooth, no-limits text chats, ultra-realistic voice messages and calls, personalized generation of explicit images, and immersive video responses — everything feels custom-made for you and responds instantly.',
  'Flexible subscriptions: start with a free trial, then choose monthly, quarterly, or yearly plans packed with generous tokens for premium features, plus secure and completely discreet payments, including crypto.',
  'People come to Eros for steamy adult roleplay, deep emotional connection, creative sexual scenarios, living out wild fantasies, practicing seduction, or simply having a always-available, totally non-judgmental partner 24/7.',
  'With a strong focus on complete privacy, round-the-clock support, and user-friendly options (including multiple languages), Eros AI delivers real digital intimacy and unforgettable erotic experiences in a fully safe space.',
]

export function AboutSection() {
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
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-[#cccccc] text-base md:text-lg leading-relaxed">
            {textContent.map((text, index) => (
              <p
                key={index}
                className="text-justify"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
