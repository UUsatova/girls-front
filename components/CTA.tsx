'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
export function CTA() {
  return <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-4xl md:text-6xl font-serif text-white mb-8">
            Your circle awaits.
          </motion.h2>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-xl text-slate-300 mb-12 font-light">
            Membership is limited to maintain the integrity of our community.{' '}
            <br className="hidden md:block" />
            Applications are reviewed weekly by our membership committee.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            <Button size="lg" className="min-w-[200px]" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Begin Application
            </Button>
            <p className="mt-6 text-sm text-slate-500 uppercase tracking-widest">
              By Invitation Only
            </p>
          </motion.div>
        </div>
      </div>
    </section>;
}