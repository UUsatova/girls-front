'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { AvatarScroll } from './AvatarScroll'
import { ProfileCard } from './ProfileCard'
import { ProfileDrawer } from './ProfileDrawer'
import { Search, Filter, Bell } from 'lucide-react'
import { api } from '@/lib/api'

interface GirlProfile {
  id: number
  name: string
  age: number
  bio: string
  story?: string
  image_url: string
  tags: Array<{ id: number; name: string }>
  is_new: boolean
  photos?: Array<{ id: number; image_url: string; sort_order: number }>
}

export function DashboardScreen() {
  const [profiles, setProfiles] = useState<GirlProfile[]>([])
  const [userName, setUserName] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedProfile, setSelectedProfile] = useState<GirlProfile | null>(null)

  useEffect(() => {
    let isMounted = true
    const loadGirls = async () => {
      setLoading(true)
      setError(null)
      try {
        const query = search ? `?search=${encodeURIComponent(search)}` : ''
        const data = await api.get<GirlProfile[]>(`/girls/${query}`)
        if (isMounted) setProfiles(data)
      } catch (err) {
        if (isMounted) setError('Failed to load profiles')
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    const handler = setTimeout(loadGirls, 300)
    return () => {
      isMounted = false
      clearTimeout(handler)
    }
  }, [search])

  useEffect(() => {
    let isMounted = true
    const loadMe = async () => {
      try {
        const data = await api.get<{ username: string }>('/auth/me/')
        if (isMounted) setUserName(data.username)
      } catch (err) {
        if (isMounted) setUserName(null)
      }
    }
    loadMe()
    return () => {
      isMounted = false
    }
  }, [])

  const avatars = useMemo(
    () =>
      profiles.slice(0, 8).map((profile) => ({
        id: profile.id,
        name: profile.name,
        imageUrl: profile.image_url,
        isNew: profile.is_new,
      })),
    [profiles]
  )

  return (
    <div className="min-h-screen bg-deep-900 text-lavender pb-20 md:pb-0 md:pl-64">
      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-40 bg-deep-900/80 backdrop-blur-lg border-b border-lavender-faint px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-hotPink flex items-center justify-center">
            <span className="font-display font-bold text-white">E</span>
          </div>
          <span className="font-display font-bold text-lg text-white">
            EROS
          </span>
        </div>
        <button className="p-2 text-lavender hover:text-white">
          <Bell className="w-5 h-5" />
        </button>
      </header>

      <main className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
        {/* Top Bar (Desktop) */}
        <div className="hidden md:flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-white mb-1">
              Good Evening{userName ? `, ${userName}` : ''}
            </h1>
            <p className="text-lavender-muted">
              Ready to connect with someone new?
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-lavender-muted" />
              <input
                type="text"
                placeholder="Search personas..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="bg-deep-800 border border-lavender-faint rounded-full pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-hotPink/50 focus:ring-1 focus:ring-hotPink/50 w-64 transition-all"
              />
            </div>
            <button className="p-2.5 rounded-full bg-deep-800 border border-lavender-faint text-lavender hover:text-white hover:border-hotPink/50 transition-colors">
              <Filter className="w-4 h-4" />
            </button>
            <button className="p-2.5 rounded-full bg-deep-800 border border-lavender-faint text-lavender hover:text-white hover:border-hotPink/50 transition-colors relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-hotPink rounded-full border border-deep-900" />
            </button>
            <a
              href="/account"
              className="px-4 py-2.5 rounded-full bg-hotPink text-white text-sm font-medium shadow-lg shadow-hotPink/20"
            >
              Account
            </a>
          </div>
        </div>

        {/* Stories/Avatars */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-display font-bold text-white">
              Recent Activity
            </h2>
            <button className="text-xs font-medium text-cyan hover:text-cyan-hover uppercase tracking-wider">
              View All
            </button>
          </div>
          {avatars.length > 0 && <AvatarScroll avatars={avatars} />}
        </section>

        {/* Main Grid */}
        <section>
          <div className="flex items-center gap-4 mb-6 overflow-x-auto no-scrollbar pb-2">
            {['Recommended', 'New Arrivals', 'Trending', 'Nearby'].map(
              (tab, i) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    i === 0
                      ? 'bg-hotPink text-white shadow-lg shadow-hotPink/20'
                      : 'bg-deep-800 text-lavender-muted hover:bg-deep-800/80 hover:text-white border border-lavender-faint'
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {loading && (
            <div className="text-sm text-lavender-muted">Loading profiles...</div>
          )}
          {error && <div className="text-sm text-red-400">{error}</div>}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {profiles.map((profile, index) => (
              <ProfileCard
                key={profile.id}
                index={index}
                name={profile.name}
                age={profile.age}
                bio={profile.bio}
                image={profile.image_url}
                tags={profile.tags.map((tag) => tag.name)}
                isNew={profile.is_new}
                girlId={profile.id}
                onOpen={() => setSelectedProfile(profile)}
              />
            ))}
          </div>
        </section>
      </main>
      <ProfileDrawer
        profile={selectedProfile}
        onClose={() => setSelectedProfile(null)}
      />
    </div>
  )
}
