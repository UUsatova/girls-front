'use client'

import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { AccountSidebar } from '@/components/AccountSidebar'

interface MeResponse {
  id: number
  username: string
  email: string
}

interface ChatThread {
  id: number
  girl: {
    id: number
    name: string
    image_url: string
  }
  last_message: {
    id: number
    sender: string
    content: string
    created_at: string
  } | null
}

export default function AccountPage() {
  const [user, setUser] = useState<MeResponse | null>(null)
  const [chats, setChats] = useState<ChatThread[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    const loadData = async () => {
      setLoading(true)
      try {
        const me = await api.get<MeResponse>('/auth/me/')
        const threads = await api.get<ChatThread[]>('/chats/')
        if (mounted) {
          setUser(me)
          setChats(threads)
        }
      } catch (err) {
        if (mounted) {
          setError('Please sign in to view your account.')
          setUser(null)
        }
      } finally {
        if (mounted) setLoading(false)
      }
    }
    loadData()
    return () => {
      mounted = false
    }
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-deep-900 text-white flex items-center justify-center">
        Loading...
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-deep-900 text-white flex items-center justify-center">
        <div className="rounded-2xl border border-lavender-faint bg-deep-800 p-6 text-center">
          <p className="text-lavender-muted mb-4">{error}</p>
          <a
            href="/login"
            className="px-4 py-2 rounded-full bg-hotPink text-white text-sm"
          >
            Go to Login
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-deep-900 text-white md:pl-64 p-6 md:p-10">
      <AccountSidebar />
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Personal cabinet</h1>
            <p className="text-lavender-muted font-sans">
              {user?.username} · {user?.email || 'no-email'}
            </p>
          </div>
          <a
            href="/"
            className="px-4 py-2 rounded-full bg-deep-800 border border-lavender-faint text-sm text-lavender"
          >
            Back to dashboard
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl border border-lavender-faint bg-deep-800 p-6">
            <h2 className="text-xl font-semibold mb-4">Your chats</h2>
            {chats.length === 0 && (
              <p className="text-sm text-lavender-muted">No chats yet.</p>
            )}
            <div className="space-y-4">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-deep-900 border border-lavender-faint"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={chat.girl.image_url}
                      alt={chat.girl.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold font-sans">{chat.girl.name}</h3>
                      <p className="text-xs text-lavender-muted line-clamp-1 font-sans">
                        {chat.last_message?.content || 'Start the conversation'}
                      </p>
                    </div>
                  </div>
                  <a
                    href={`/account/chats/${chat.id}`}
                    className="px-3 py-1.5 rounded-lg bg-hotPink text-white text-xs"
                  >
                    Open
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-lavender-faint bg-deep-800 p-6">
            <h2 className="text-xl font-semibold mb-4">Stats</h2>
            <div className="space-y-3 text-sm text-lavender-muted font-sans">
              <div className="flex items-center justify-between">
                <span>Total chats</span>
                <span className="text-white font-semibold">{chats.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Active persona</span>
                <span className="text-white font-semibold">
                  {chats[0]?.girl.name || '—'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Membership</span>
                <span className="text-white font-semibold">Free</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
