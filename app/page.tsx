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
import { useRouter, usePathname } from 'next/navigation'
import { useSidebar } from '@/contexts/SidebarContext'

export default function Home() {
  const router = useRouter()
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState('home')
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [isAuthed, setIsAuthed] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(true)
  const [chats, setChats] = useState<any[]>([])
  const [chatsLoading, setChatsLoading] = useState(false)
  const { collapsed: sidebarCollapsed, toggleCollapse } = useSidebar()

  // Sync activeTab with current pathname
  useEffect(() => {
    if (pathname?.startsWith('/account')) {
      setActiveTab('messages')
    } else if (pathname === '/') {
      setActiveTab('home')
    }
  }, [pathname])

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

  useEffect(() => {
    if (activeTab === 'messages' && isAuthed) {
      let mounted = true
      const loadChats = async () => {
        setChatsLoading(true)
        try {
          const data = await api.get<any[]>('/chats/')
          if (mounted) {
            // If no chats from API, use mock data
            if (data && data.length > 0) {
              setChats(data)
            } else {
              setChats([
                {
                  id: 1,
                  girl: {
                    id: 1,
                    name: 'Eva',
                    image_url: '/images/girlAi1.png'
                  },
                  last_message: {
                    id: 1,
                    sender: 'ai',
                    content: '*blushes softly, feeling a bit shy at Marina Stankevich\'s direct request* Hehe, you\'re so bold!',
                    created_at: new Date().toISOString()
                  }
                },
                {
                  id: 2,
                  girl: {
                    id: 2,
                    name: 'Amber',
                    image_url: '/images/girlAi2.png'
                  },
                  last_message: {
                    id: 2,
                    sender: 'ai',
                    content: 'Your gorgeous stepmom who\'s home alone with you...',
                    created_at: new Date().toISOString()
                  }
                },
                {
                  id: 3,
                  girl: {
                    id: 3,
                    name: 'Irina',
                    image_url: '/images/girlAi1.png'
                  },
                  last_message: {
                    id: 3,
                    sender: 'user',
                    content: 'Wealthy Russian heiress, accustomed to luxury and...',
                    created_at: new Date().toISOString()
                  }
                },
                {
                  id: 4,
                  girl: {
                    id: 4,
                    name: 'Coco',
                    image_url: '/images/girlAi3.webp'
                  },
                  last_message: {
                    id: 4,
                    sender: 'ai',
                    content: 'You posted to Craigslist about the cute blonde in...',
                    created_at: new Date().toISOString()
                  }
                }
              ])
            }
          }
        } catch (err) {
          if (mounted) {
            // Use mock data on error
            setChats([
              {
                id: 1,
                girl: {
                  id: 1,
                  name: 'Eva',
                  image_url: '/images/girlAi1.png'
                },
                last_message: {
                  id: 1,
                  sender: 'ai',
                  content: '*blushes softly, feeling a bit shy at Marina Stankevich\'s direct request* Hehe, you\'re so bold!',
                  created_at: new Date().toISOString()
                }
              },
              {
                id: 2,
                girl: {
                  id: 2,
                  name: 'Amber',
                  image_url: '/images/girlAi2.png'
                },
                last_message: {
                  id: 2,
                  sender: 'ai',
                  content: 'Your gorgeous stepmom who\'s home alone with you...',
                  created_at: new Date().toISOString()
                }
              },
              {
                id: 3,
                girl: {
                  id: 3,
                  name: 'Irina',
                  image_url: '/images/girlAi1.png'
                },
                last_message: {
                  id: 3,
                  sender: 'user',
                  content: 'Wealthy Russian heiress, accustomed to luxury and...',
                  created_at: new Date().toISOString()
                }
              },
              {
                id: 4,
                girl: {
                  id: 4,
                  name: 'Coco',
                  image_url: '/images/girlAi3.webp'
                },
                last_message: {
                  id: 4,
                  sender: 'ai',
                  content: 'You posted to Craigslist about the cute blonde in...',
                  created_at: new Date().toISOString()
                }
              }
            ])
          }
        } finally {
          if (mounted) setChatsLoading(false)
        }
      }
      loadChats()
      return () => {
        mounted = false
      }
    }
  }, [activeTab, isAuthed])

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
      <Sidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        collapsed={sidebarCollapsed}
        onToggleCollapse={toggleCollapse}
      />

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
      {activeTab === 'home' && <DashboardScreen />}
      {activeTab === 'messages' && (
        <div 
          className="min-h-screen bg-deep-900 text-white pb-20 md:pb-0"
          style={{ 
            paddingLeft: sidebarCollapsed ? '80px' : '256px',
            transition: 'padding-left 0.3s'
          }}
        >
          <div className="p-6 md:p-10 max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold neon-glow-white mb-1">Your Chats</h1>
                <p className="text-lavender-muted font-sans">Continue your conversations</p>
              </div>
            </div>

            {chatsLoading ? (
              <div className="text-lavender-muted font-sans">Loading chats...</div>
            ) : chats.length === 0 ? (
              <div className="rounded-2xl border border-lavender-faint bg-deep-800 p-8 text-center">
                <p className="text-lavender-muted mb-4 font-sans">No chats yet.</p>
                <button
                  onClick={() => setActiveTab('home')}
                  className="px-4 py-2 rounded-full gradient-shimmer text-white text-sm font-medium font-sans"
                >
                  Browse Profiles
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {chats.map((chat) => (
                  <div
                    key={chat.id}
                    className="flex items-center justify-between p-4 rounded-xl bg-deep-800 border border-cyan/30 hover:border-cyan hover:neon-border transition-all cursor-pointer"
                    onClick={() => router.push(`/account/chats/${chat.id}`)}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={chat.girl.image_url}
                        alt={chat.girl.name}
                        className="w-14 h-14 rounded-full object-cover bloom"
                      />
                      <div>
                        <h3 className="font-semibold text-white font-sans">{chat.girl.name}</h3>
                        <p className="text-xs text-lavender-muted line-clamp-1 font-sans">
                          {chat.last_message?.content || 'Start the conversation'}
                        </p>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg bg-hotPink text-white text-xs hover:scale-105 transition-transform font-sans">
                      Open
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <MenuScreen onBack={() => setShowMobileMenu(false)} />
      )}
    </div>
  )
}
