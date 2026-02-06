'use client'

import React from 'react';
import { Unlock, Users, Brain, Clock, Zap, Heart } from 'lucide-react';

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
];

export function Features() {
  return (
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
  );
}