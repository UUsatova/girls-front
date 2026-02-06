'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sparkles, MessageCircle, Unlock, Users, Brain, Clock, Zap, Heart, CheckCheck, Gamepad2, ChevronLeft, ChevronRight } from 'lucide-react'
import { Logo } from '@/components/Logo'

// Data
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

const features = [
  {
    icon: Unlock,
    title: 'Uncensored Expression',
    description: 'Share your deepest thoughts, feelings, and personal desires openly. No restrictions or judgment - your AI companion listens fully, reflects, and supports whatever you\'re ready to explore.'
  },
  {
    icon: Users,
    title: 'Shared Interests & Connection',
    description: 'Align on favorite themes, stories, and imaginative worlds. Build custom experiences together - discover fresh ways to connect and enjoy meaningful interactions in a shared space.'
  },
  {
    icon: Brain,
    title: 'Deep Self-Exploration',
    description: 'Dive into your inner thoughts, emotions, and hidden sides. Your companion gently guides you through personal reflection, helping unlock greater self-awareness in a secure, private environment.'
  },
  {
    icon: Clock,
    title: 'Always-On',
    description: 'Your companion is available 24/7, ready to engage whenever you need. No waiting, no scheduling - instant connection for conversations, support, or companionship at any moment.'
  },
  {
    icon: Zap,
    title: 'Personal Growth & Evolution',
    description: '18+ only. We don\'t store your chats unnecessarily.'
  },
  {
    icon: Heart,
    title: 'Form Lasting Connections',
    description: 'Build deep, meaningful relationships that evolve over time. Your companion remembers your journey together, creating a unique connection that grows stronger with every interaction.'
  }
]

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

const textContent = [
  'Eros AI turns every interaction into an intensely personal and passionate experience with advanced AI companions that adapt to you, remember your every preference and fantasy, and evolve over time for the most natural, vivid, and uncensored conversations.',
  'Choose from a huge variety of ready-made characters or craft your perfect custom companion — fine-tune their appearance, personality, voice, sexual tastes, kinks, hobbies, and any other details so they match your mood and desires perfectly.',
  'Connect in multiple ways: smooth, no-limits text chats, ultra-realistic voice messages and calls, personalized generation of explicit images, and immersive video responses — everything feels custom-made for you and responds instantly.',
  'Flexible subscriptions: start with a free trial, then choose monthly, quarterly, or yearly plans packed with generous tokens for premium features, plus secure and completely discreet payments, including crypto.',
  'People come to Eros for steamy adult roleplay, deep emotional connection, creative sexual scenarios, living out wild fantasies, practicing seduction, or simply having a always-available, totally non-judgmental partner 24/7.',
  'With a strong focus on complete privacy, round-the-clock support, and user-friendly options (including multiple languages), Eros AI delivers real digital intimacy and unforgettable erotic experiences in a fully safe space.',
]

export default function LandingPage() {
  const router = useRouter()

  return (
    <main className="relative min-h-screen overflow-x-visible text-white bg-transparent">
      {/* LightHeader */}
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

      {/* HeroSection */}
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

      {/* GirlsPreview */}
      <section id="companions" className="relative py-16 bg-black/80 overflow-hidden">
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
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold neon-glow-white mb-4">
              Meet Your Companions
            </h2>
            <p className="text-gray-light text-lg md:text-xl max-w-2xl mx-auto">
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
                      <div className="absolute top-4 left-4 px-3 py-1.5 bg-hotPink/90 rounded-lg flex items-center gap-1.5 shadow-lg shadow-hotPink/30 z-10">
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
                          <span className="text-lg font-light text-gray-light font-mono">
                            {girl.age}
                          </span>
                        </div>
                        <p className="text-sm md:text-base text-gray-light line-clamp-2 leading-relaxed">
                          {girl.bio}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {girl.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-hotPink/20 border border-hotPink/40 text-hotPink"
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
                          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-hotPink text-white font-medium text-sm shadow-lg shadow-hotPink/30"
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

      {/* Features */}
      <section className="py-16 bg-black relative overflow-hidden" id="philosophy">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold neon-glow-white mb-4">
              The Art of Belonging
            </h2>
          </div>

          {/* Features Grid - 3 columns, 2 rows */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="relative p-8 rounded-lg border border-hotPink/20"
                  style={{
                    background: 'linear-gradient(135deg, rgba(6, 78, 96, 0.4) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(6, 78, 96, 0.4) 100%)',
                    boxShadow: '0 0 20px rgba(255, 0, 102, 0.15), inset 0 0 20px rgba(255, 0, 102, 0.05)'
                  }}
                >
                  {/* Icon with soft cyan glow */}
                  <div className="mb-6 flex items-center justify-start">
                    <div 
                      className="w-16 h-16 rounded-lg flex items-center justify-center relative bg-black/50"
                      style={{
                        boxShadow: '0 0 20px rgba(255, 0, 102, 0.5), inset 0 0 10px rgba(255, 0, 102, 0.2)'
                      }}
                    >
                      <IconComponent className="w-8 h-8 text-hotPink relative z-10" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title with soft cyan glow */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white/80 leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4 font-sans">
                    {feature.description}
                  </p>

                  {/* Underline - subtle cyan */}
                  <div 
                    className="h-0.5 w-20 bg-hotPink/80"
                    style={{
                      boxShadow: '0 0 10px rgba(255, 0, 102, 0.6)'
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ChatPreview */}
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

      {/* AboutSection */}
      <section id="about" className="relative py-16 bg-black/80 overflow-hidden">
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
            <div className="space-y-6 text-gray-light text-base md:text-lg leading-relaxed">
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

      {/* LiveActionBanner */}
      <section id="live-action" className="relative py-16 bg-black/90 overflow-hidden">
        {/* Smooth transition gradient at top */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black/80 via-black/50 via-black/30 via-black/10 to-transparent pointer-events-none z-0" />
        
        {/* Blurred pink shapes background - SIMPLIFIED */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-20 -top-20 w-96 h-96 bg-hotPink/20 rounded-full blur-xl" />
          <div className="absolute right-20 top-20 w-80 h-80 bg-hotPink/15 rounded-full blur-xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
            {/* Left Side - Navigation & Image */}
            <div className="relative">
              <button className="mb-6 w-12 h-12 rounded-full bg-hotPink/20 border border-hotPink/50 flex items-center justify-center text-white hover:bg-hotPink/30 transition-all">
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="relative w-full aspect-[3/4]">
                <div className="absolute -top-4 -left-4 w-14 h-14 bg-hotPink/30 rounded-lg border border-hotPink/50 flex items-center justify-center z-10">
                  <Gamepad2 className="w-7 h-7 text-hotPink" />
                </div>
                
                <div className="skewed-card neon-border overflow-hidden bg-gradient-to-br from-cyan/20 to-cyan/5 aspect-[3/4]">
                  <Image
                    src="/images/image1.png"
                    alt="Live Action"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-cyan/20 to-transparent" />
                </div>
              </div>
            </div>

            {/* Center - Menu Interface */}
            <div className="relative">
              <div className="relative w-full aspect-[3/4]">
                <div className="absolute inset-0 skewed-card neon-border bg-gradient-to-br from-cyan/30 to-cyan/10 p-6 flex flex-col gap-4 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Live Action
                  </h3>
                  
                  <div className="flex flex-col gap-3">
                    <button className="w-full py-3 px-4 rounded-xl bg-hotPink hover:bg-hotPink/90 text-white font-semibold text-sm transition-all shadow-lg shadow-hotPink/30 text-left">
                      SEXY DANCE
                    </button>
                    <button className="w-full py-3 px-4 rounded-xl bg-hotPink hover:bg-hotPink/90 text-white font-semibold text-sm transition-all shadow-lg shadow-hotPink/30 text-left">
                      LICK LOLLIPOP
                    </button>
                  </div>

                  {/* Progress indicator */}
                  <div className="flex items-center gap-2 mt-4">
                    <div className="w-3 h-3 rounded-full bg-hotPink border-2 border-white" />
                    <div className="flex-1 h-0.5 bg-white/20 rounded-full">
                      <div className="h-full w-1/3 bg-hotPink rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Background image */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                  <Image
                    src="/images/image2.png"
                    alt="Live Action Background"
                    fill
                    className="object-cover opacity-30 scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 via-black/40 via-black/20 to-transparent" />
                </div>
              </div>
            </div>

            {/* Right Side - Text & CTA */}
            <div className="relative text-center lg:text-left">
              <div className="mb-8">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold neon-glow-white">
                    LIVE ACTION
                  </h2>
                  <div className="w-16 h-16 rounded-full border-2 border-hotPink bg-hotPink/20 flex items-center justify-center">
                    <Gamepad2 className="w-8 h-8 text-hotPink" />
                  </div>
                </div>
                
                <p className="text-xl md:text-2xl text-gray-light mb-6">
                  Available on Eros
                </p>
                
                <button
                  onClick={() => router.push('/login')}
                  className="px-8 py-4 rounded-xl bg-hotPink hover:bg-hotPink/90 text-white font-bold text-lg md:text-xl transition-all shadow-lg shadow-hotPink/30 hover:scale-105 active:scale-95"
                >
                  Take control now
                </button>
              </div>

              {/* Right side image */}
              <div className="relative w-full aspect-[3/4] mt-8">
                <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-hotPink/30 rounded-lg border border-hotPink/50 flex items-center justify-center z-10">
                  <Gamepad2 className="w-7 h-7 text-hotPink" />
                </div>
                
                <div className="skewed-card neon-border overflow-hidden bg-gradient-to-br from-cyan/20 to-cyan/5 aspect-[3/4]">
                  <Image
                    src="/images/image3.png"
                    alt="Live Action"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-cyan/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FooterText */}
      <footer className="relative py-12 bg-black border-t border-hotPink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm">
              <a href="/terms" className="text-gray-light hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/privacy" className="text-gray-light hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/accessibility" className="text-gray-light hover:text-white transition-colors">
                Accessibility
              </a>
              <a href="/2257" className="text-gray-light hover:text-white transition-colors">
                18 U.S.C. 2257
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right text-sm text-gray-medium">
              Copyright © Eros AI 2023 - 2026. All rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
