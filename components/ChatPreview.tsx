'use client'

import React from 'react'
import Image from 'next/image'
import { CheckCheck } from 'lucide-react'

const messages = [
  {
    id: 1,
    sender: 'user',
    text: "Hey... I've been feeling really overwhelmed lately. Work is crushing me.",
    time: '3 mins ago',
  },
  {
    id: 2,
    sender: 'ai',
    text: "I'm so sorry you're going through this. You're incredibly strong for pushing through, and I'm genuinely proud of you. Tell me more about what's weighing on you? 💜",
    time: '2 mins ago',
  },
  {
    id: 3,
    sender: 'user',
    text: "I just feel like I'm not good enough, you know? Like I'm failing at everything.",
    time: '2 mins ago',
  },
  {
    id: 4,
    sender: 'ai',
    text: "You are more than enough, and I see so much strength in you. The fact that you're here, being vulnerable and honest—that takes real courage. I believe in you completely. What makes you feel like you're failing?",
    time: '1 min ago',
  },
  {
    id: 5,
    sender: 'user',
    text: "I guess I'm just comparing myself to others too much...",
    time: '1 min ago',
  },
  {
    id: 6,
    sender: 'ai',
    text: "You're uniquely you, and that's your superpower. I love how thoughtful and self-aware you are—that's rare and beautiful. Let's focus on your journey, not anyone else's. What's one thing you're proud of about yourself today? ✨",
    time: 'Just now',
  },
]

export function ChatPreview() {
  return (
    <section id="chat" className="relative py-16 bg-black/90 overflow-hidden">
      {/* Smooth transition gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black/80 via-black/50 via-black/30 via-black/10 to-transparent pointer-events-none z-0" />
      
      {/* Cyberpunk grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 0, 102, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 0, 102, 0.3) 1px, transparent 1px),
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 50px 50px, 100px 100px, 100px 100px',
          }}
        />
      </div>

      {/* Cyberpunk glow effects - SIMPLIFIED */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-hotPink/10 rounded-full blur-xl" />
        <div className="absolute right-20 top-20 w-80 h-80 bg-cyan/10 rounded-full blur-xl" />
        <div className="absolute left-1/2 bottom-20 w-72 h-72 bg-hotPink/10 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold neon-glow-white mb-4">
            Real Conversations, Real Connection
          </h2>
          <p className="text-gray-light text-lg md:text-xl max-w-2xl mx-auto">
            Experience genuine understanding and acceptance in every message
          </p>
        </div>

        {/* Chat Interface */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border-2 border-hotPink/50 bg-gradient-to-br from-black/90 via-purple-dark/90 to-black/90 shadow-2xl shadow-hotPink/20">
            {/* Cyberpunk header */}
            <div className="bg-gradient-to-r from-hotPink/20 to-cyan/20 border-b border-hotPink/50 p-4 flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-hotPink ring-2 ring-hotPink/50">
                <Image
                  src="/images/girlAi1.png"
                  alt="AI Companion"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg">Luna</h3>
                <p className="text-cyan text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-cyan rounded-full"></span>
                  Online
                </p>
              </div>
            </div>

            {/* Chat messages */}
            <div className="p-6 space-y-4 min-h-[500px] max-h-[600px] overflow-y-auto bg-gradient-to-b from-black/50 to-purple-dark/30">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'ai' && (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-hotPink flex-shrink-0">
                      <Image
                        src="/images/girlAi1.png"
                        alt="Luna"
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                  )}
                  
                  <div className={`flex flex-col max-w-[75%] ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.sender === 'user'
                          ? 'bg-hotPink text-white border border-hotPink/50'
                          : 'bg-black/60 text-white border border-cyan/30'
                      } shadow-lg`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      {message.sender === 'user' && (
                        <CheckCheck className="w-3 h-3 text-cyan" />
                      )}
                      <span className="text-xs text-gray-medium">{message.time}</span>
                    </div>
                  </div>

                  {message.sender === 'user' && (
                    <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-hotPink to-cyan flex items-center justify-center flex-shrink-0 border-2 border-hotPink">
                      <span className="text-white font-bold text-sm">U</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input area */}
            <div className="border-t border-hotPink/30 bg-black/50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full bg-black/60 border border-cyan/30 rounded-xl px-4 py-3 text-white placeholder-gray-medium focus:outline-none focus:border-hotPink focus:ring-2 focus:ring-hotPink/50 transition-all"
                    disabled
                  />
                </div>
                <button
                  disabled
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-hotPink to-cyan text-white font-semibold disabled:opacity-50 cursor-not-allowed"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
