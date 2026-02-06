'use client'

import { useEffect, useState } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { DashboardScreen } from '@/components/DashboardScreen'
import { MenuScreen } from '@/components/MenuScreen'
import { Menu } from 'lucide-react'
import { api } from '@/lib/api'
import HeroSection from '@/components/HeroSection'
import FooterText from '@/components/FooterText'
import { Features } from '@/components/Features'
import { GirlsPreview } from '@/components/GirlsPreview'
import { AboutSection } from '@/components/AboutSection'
import { ChatPreview } from '@/components/ChatPreview'
import { LiveActionBanner } from '@/components/LiveActionBanner'
import { LightHeader } from '@/components/LightHeader'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [isAuthed, setIsAuthed] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    const checkAuth = async () => {
      try {
        await api.get('/auth/me/')
        if (mounted) setIsAuthed(true)
      } catch {
        if (mounted) setIsAuthed(false)
      } finally {
        if (mounted) setLoading(false)
      }
    }
    checkAuth()
    return () => {
      mounted = false
    }
  }, [])

  // Show loading state
  if (loading || isAuthed === null) {
    return <div className="min-h-screen bg-deep-900 text-white flex items-center justify-center">Loading...</div>
  }

  // Show landing page if not authenticated
  if (!isAuthed) {
    return (
      <main className="relative min-h-screen overflow-x-visible text-white bg-transparent">
        <LightHeader />
        <HeroSection />
        <GirlsPreview />
        <Features />
        <ChatPreview />
        <AboutSection />
        <LiveActionBanner />
        <FooterText />
      </main>
    )
  }

  // Show dashboard if authenticated
  return (
    <div className="min-h-screen bg-deep-900 text-white font-sans selection:bg-hotPink selection:text-white">
      {/* Desktop Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-deep-900/90 backdrop-blur-xl border-t border-lavender-faint z-50 px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center gap-1 ${
            activeTab === 'home' ? 'text-hotPink' : 'text-lavender-muted'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button
          onClick={() => setActiveTab('explore')}
          className={`flex flex-col items-center gap-1 ${
            activeTab === 'explore' ? 'text-hotPink' : 'text-lavender-muted'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
          </svg>
          <span className="text-[10px] font-medium">Discover</span>
        </button>
        <button
          onClick={() => setActiveTab('create')}
          className="flex flex-col items-center gap-1 -mt-8"
        >
          <div className="w-12 h-12 rounded-full bg-hotPink flex items-center justify-center shadow-lg shadow-hotPink/40 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="16" />
              <line x1="8" x2="16" y1="12" y2="12" />
            </svg>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('messages')}
          className={`flex flex-col items-center gap-1 ${
            activeTab === 'messages' ? 'text-hotPink' : 'text-lavender-muted'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span className="text-[10px] font-medium">Chat</span>
        </button>
        <button
          onClick={() => setShowMobileMenu(true)}
          className={`flex flex-col items-center gap-1 ${
            showMobileMenu ? 'text-hotPink' : 'text-lavender-muted'
          }`}
        >
          <Menu className="w-6 h-6" />
          <span className="text-[10px] font-medium">Menu</span>
        </button>
      </div>

      {/* Main Content Area */}
      <DashboardScreen />

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <MenuScreen onBack={() => setShowMobileMenu(false)} />
      )}
    </div>
  )
}
