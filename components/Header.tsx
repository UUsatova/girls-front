'use client'

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    scrollY
  } = useScroll();
  const headerBackground = useTransform(scrollY, [0, 50], ['rgba(15, 23, 42, 0)', 'rgba(15, 23, 42, 0.9)']);
  const headerBorder = useTransform(scrollY, [0, 50], ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.05)']);
  const backdropBlur = useTransform(scrollY, [0, 50], ['blur(0px)', 'blur(12px)']);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <motion.header style={{
    backgroundColor: headerBackground,
    borderBottom: `1px solid`,
    borderColor: headerBorder,
    backdropFilter: backdropBlur
  }} className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-500 rounded-sm flex items-center justify-center">
            <span className="text-slate-900 font-serif font-bold text-xl">
              A
            </span>
          </div>
          <span className="text-xl font-serif font-bold tracking-tight text-white">
            AURA
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Philosophy', 'Membership', 'Stories', 'Events'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm uppercase tracking-widest text-slate-400 hover:text-amber-400 transition-colors">
              {item}
            </a>)}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Log in
          </a>
          <Button variant="primary" size="sm">
            Apply for Access
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-300 hover:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <motion.div initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: -20
    }} className="md:hidden absolute top-20 left-0 right-0 bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-6 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {['Philosophy', 'Membership', 'Stories', 'Events'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-serif text-slate-300 hover:text-amber-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </a>)}
          </nav>
          <div className="flex flex-col gap-4 pt-4 border-t border-slate-800">
            <a href="/login">
              <Button variant="outline" className="w-full justify-center">
                Log in
              </Button>
            </a>
            <Button variant="primary" className="w-full justify-center">
              Apply for Access
            </Button>
          </div>
        </motion.div>}
    </motion.header>;
}
