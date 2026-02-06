'use client'

import React from 'react'

interface LogoProps {
  variant?: 'gradient' | 'solid'
  showText?: boolean
  textSize?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Logo({ 
  variant = 'gradient', 
  showText = true,
  textSize = 'md',
  className = ''
}: LogoProps) {
  const iconBgClass = variant === 'gradient' 
    ? 'bg-gradient-to-br from-hotPink to-cyan' 
    : 'bg-hotPink'
  
  const textSizeClass = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  }[textSize]

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className={`w-8 h-8 rounded-lg ${iconBgClass} flex items-center justify-center ${variant === 'solid' ? 'shadow-[0_0_15px_rgba(255,32,121,0.5)]' : ''}`}>
        <span className="text-white font-bold text-lg">E</span>
      </div>
      {showText && (
        <span className={`${textSizeClass} font-bold text-white ${textSize === 'md' ? 'hidden sm:inline' : ''}`}>
          ROS
        </span>
      )}
    </div>
  )
}
