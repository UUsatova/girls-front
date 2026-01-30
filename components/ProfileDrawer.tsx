'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'

interface Photo {
  id: number
  image_url: string
  sort_order: number
}

interface GirlProfile {
  id: number
  name: string
  age: number
  bio: string
  story?: string
  image_url: string
  tags: Array<{ id: number; name: string }>
  is_new: boolean
  photos?: Photo[]
}

interface ProfileDrawerProps {
  profile: GirlProfile | null
  onClose: () => void
}

export function ProfileDrawer({ profile, onClose }: ProfileDrawerProps) {
  const router = useRouter()
  const photos = useMemo(() => {
    if (!profile) return []
    const list = profile.photos && profile.photos.length > 0 ? profile.photos : []
    if (list.length > 0) return list
    return [
      {
        id: profile.id,
        image_url: profile.image_url,
        sort_order: 0,
      },
    ]
  }, [profile])

  const [activePhoto, setActivePhoto] = useState<string | null>(null)
  const [startingChat, setStartingChat] = useState(false)

  useEffect(() => {
    if (!profile) return
    setActivePhoto(photos[0]?.image_url || profile.image_url)
  }, [profile, photos])

  const handleStartChat = async () => {
    if (!profile) return
    try {
      setStartingChat(true)
      const thread = await api.post<{ id: number }>('/chats/start/', {
        girl_id: profile.id,
      })
      router.push(`/account/chats/${thread.id}`)
    } catch (err) {
      // ignore for now
    } finally {
      setStartingChat(false)
    }
  }

  return (
    <AnimatePresence>
      {profile && (
        <motion.div
          className="fixed inset-0 z-[100] flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={onClose}
            className="absolute inset-0 bg-black/60"
            aria-label="Close"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative ml-auto h-full w-full max-w-xl bg-deep-900 border-l border-lavender-faint shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-lavender-faint flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-display font-bold text-white">
                  {profile.name}
                </h2>
                <p className="text-sm text-lavender-muted">{profile.age} · AI companion</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleStartChat}
                  disabled={startingChat}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-hotPink text-white text-sm font-medium shadow-lg shadow-hotPink/20 disabled:opacity-70"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{startingChat ? 'Starting...' : 'Start chat'}</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-lavender-faint text-lavender"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="p-6 space-y-6">
                <div className="rounded-2xl overflow-hidden border border-lavender-faint bg-deep-800">
                  <img
                    src={activePhoto || profile.image_url}
                    alt={profile.name}
                    className="w-full h-[360px] object-cover"
                  />
                </div>

                <div className="flex gap-3 overflow-x-auto no-scrollbar">
                  {photos.map((photo) => (
                    <button
                      key={photo.id}
                      onClick={() => setActivePhoto(photo.image_url)}
                      className={`h-20 w-20 rounded-xl overflow-hidden border ${
                        activePhoto === photo.image_url
                          ? 'border-hotPink'
                          : 'border-lavender-faint'
                      }`}
                    >
                      <img
                        src={photo.image_url}
                        alt={`${profile.name} ${photo.sort_order + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-display font-semibold text-white mb-2">
                    About
                  </h3>
                  <p className="text-sm text-lavender leading-relaxed">
                    {profile.bio}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-display font-semibold text-white mb-2">
                    Her story
                  </h3>
                  <p className="text-sm text-lavender leading-relaxed">
                    {profile.story || profile.bio}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-display font-semibold text-white mb-2">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-purple-deep/50 border border-lavender-faint text-lavender-muted"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
