'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { api } from '@/lib/api'
import { AccountSidebar } from '@/components/AccountSidebar'

interface ChatThread {
  id: number
  girl: {
    id: number
    name: string
    image_url: string
    bio: string
  }
}

interface ChatMessage {
  id: number
  sender: 'user' | 'ai'
  content: string
  created_at: string
}

export default function ChatDetailPage() {
  const params = useParams()
  const threadId = params?.id as string
  const [thread, setThread] = useState<ChatThread | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    const loadChat = async () => {
      setLoading(true)
      try {
        const threadData = await api.get<ChatThread>(`/chats/${threadId}/`)
        const messageData = await api.get<ChatMessage[]>(
          `/chats/${threadId}/messages/`
        )
        if (mounted) {
          setThread(threadData)
          setMessages(messageData)
        }
      } finally {
        if (mounted) setLoading(false)
      }
    }

    if (threadId) loadChat()
    return () => {
      mounted = false
    }
  }, [threadId])

  const handleSend = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!content.trim()) return

    const payload = content
    setContent('')

    try {
      const result = await api.post<{
        user_message: ChatMessage
        ai_message: ChatMessage
      }>(`/chats/${threadId}/messages/send/`, { content: payload })
      setMessages((prev) => [...prev, result.user_message, result.ai_message])
    } catch (err) {
      // ignore for now
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-deep-900 text-white flex items-center justify-center">
        Loading chat...
      </div>
    )
  }

  if (!thread) {
    return (
      <div className="min-h-screen bg-deep-900 text-white flex items-center justify-center">
        Chat not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-deep-900 text-white flex flex-col md:pl-64">
      <AccountSidebar />
      <header className="sticky top-0 bg-deep-900/80 backdrop-blur-lg border-b border-lavender-faint px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={thread.girl.image_url}
            alt={thread.girl.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h1 className="text-xl font-bold">
              {thread.girl.name}
            </h1>
            <p className="text-xs text-lavender-muted line-clamp-1 font-sans">
              {thread.girl.bio}
            </p>
          </div>
        </div>
        <a href="/account" className="text-sm text-lavender">
          Back to account
        </a>
      </header>

      <main className="flex-1 p-6 space-y-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`max-w-xl rounded-2xl px-4 py-3 text-sm leading-relaxed font-sans ${
              message.sender === 'user'
                ? 'ml-auto bg-hotPink text-white'
                : 'bg-deep-800 border border-lavender-faint text-lavender'
            }`}
          >
            {message.content}
          </div>
        ))}
      </main>

      <form
        onSubmit={handleSend}
        className="border-t border-lavender-faint p-4 bg-deep-900"
      >
        <div className="flex items-center gap-3">
          <input
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className="flex-1 rounded-full bg-deep-800 border border-lavender-faint px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-hotPink"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-full bg-hotPink text-white text-sm font-semibold font-sans"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
