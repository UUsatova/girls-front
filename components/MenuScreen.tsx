'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  User,
  Settings,
  Shield,
  CreditCard,
  HelpCircle,
  LogOut,
  ChevronRight,
  Zap,
  Moon,
  Bell,
  LucideIcon,
} from 'lucide-react'
import { api, clearAuthTokens } from '@/lib/api'

interface MenuItem {
  icon: LucideIcon
  label: string
  value?: string
  danger?: boolean
  onClick?: () => void
}

interface MenuScreenProps {
  onBack: () => void
}

interface MeResponse {
  id: number
  username: string
  email: string
}

export function MenuScreen({ onBack }: MenuScreenProps) {
  const router = useRouter()
  const [user, setUser] = useState<MeResponse | null>(null)

  useEffect(() => {
    let isMounted = true
    const loadMe = async () => {
      try {
        const data = await api.get<MeResponse>('/auth/me/')
        if (isMounted) setUser(data)
      } catch (err) {
        if (isMounted) setUser(null)
      }
    }
    loadMe()
    return () => {
      isMounted = false
    }
  }, [])

  const handleSignOut = () => {
    clearAuthTokens()
    setUser(null)
  }

  const menuGroups: Array<{
    title: string
    items: MenuItem[]
  }> = [
    {
      title: 'Account',
      items: [
        {
          icon: User,
          label: 'Profile Settings',
          value: user?.username,
          onClick: () => router.push('/account'),
        },
        {
          icon: CreditCard,
          label: 'Subscription',
        },
        {
          icon: Bell,
          label: 'Notifications',
        },
      ],
    },
    {
      title: 'Preferences',
      items: [
        {
          icon: Shield,
          label: 'Privacy & Security',
        },
        {
          icon: Moon,
          label: 'Appearance',
        },
        {
          icon: Settings,
          label: 'App Settings',
        },
      ],
    },
    {
      title: 'Support',
      items: [
        {
          icon: HelpCircle,
          label: 'Help Center',
        },
        {
          icon: LogOut,
          label: 'Sign Out',
          danger: true,
          onClick: handleSignOut,
        },
      ],
    },
  ]

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: '100%',
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: '100%',
      }}
      className="fixed inset-0 bg-deep-900 z-50 overflow-y-auto"
    >
      <div className="max-w-md mx-auto min-h-screen pb-20">
        {/* Header */}
        <header className="sticky top-0 bg-deep-900/80 backdrop-blur-lg border-b border-lavender-faint px-6 py-4 flex items-center gap-4 z-10">
          <button
            onClick={onBack}
            className="p-2 -ml-2 rounded-full hover:bg-lavender-faint text-lavender transition-colors"
          >
            <ChevronRight className="w-6 h-6 rotate-180" />
          </button>
          <h1 className="text-xl font-display font-bold text-white">Menu</h1>
        </header>

        <div className="p-6 space-y-8">
          {/* User Card */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-purple-deep to-deep-800 border border-lavender-faint">
            <div className="w-16 h-16 rounded-full bg-deep-900 border-2 border-hotPink p-1">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-white">
                {user?.username || 'Guest'}
              </h2>
              <p className="text-sm text-lavender-muted">
                {user?.email || 'Not signed in'}
              </p>
            </div>
            <button
              onClick={() => router.push('/account')}
              className="px-3 py-1.5 rounded-lg bg-lavender-faint text-xs font-medium text-white hover:bg-lavender-faint/20 transition-colors"
            >
              Edit
            </button>
          </div>

          {/* Premium Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-hotPink to-purple-600 p-6 text-white shadow-lg shadow-hotPink/20">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 fill-white" />
                <span className="font-bold tracking-wide text-sm uppercase">
                  eros Elite
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Upgrade to Premium</h3>
              <p className="text-white/80 text-sm mb-4">
                Unlock unlimited messages, exclusive personas, and voice calls.
              </p>
              <button className="w-full py-2.5 bg-white text-hotPink font-bold rounded-xl text-sm hover:bg-white/90 transition-colors shadow-md">
                Get Premium Access
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <div className="space-y-6">
            {menuGroups.map((group, i) => (
              <div key={i}>
                <h3 className="text-xs font-bold uppercase tracking-wider text-lavender-muted mb-3 px-2">
                  {group.title}
                </h3>
                <div className="space-y-1">
                  {group.items.map((item, j) => (
                    <button
                      key={j}
                      onClick={item.onClick}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${
                        item.danger
                          ? 'hover:bg-red-500/10 text-red-400'
                          : 'hover:bg-lavender-faint text-lavender hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon
                          className={`w-5 h-5 ${
                            item.danger ? 'text-red-400' : 'text-lavender-muted'
                          }`}
                        />
                        <span className="font-medium text-sm">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.value && (
                          <span className="text-xs text-lavender-muted">
                            {item.value}
                          </span>
                        )}
                        <ChevronRight className="w-4 h-4 text-lavender-muted/50" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
