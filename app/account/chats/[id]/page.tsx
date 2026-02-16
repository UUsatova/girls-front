'use client'

import { useEffect, useState, useRef } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { api } from '@/lib/api'
import { AccountSidebar } from '@/components/AccountSidebar'
import { Heart, Gift, Video, Mic, Send, Circle } from 'lucide-react'
import { useSidebar } from '@/contexts/SidebarContext'

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
  const [isTyping, setIsTyping] = useState(false)
  const [isOnline, setIsOnline] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { collapsed: sidebarCollapsed } = useSidebar()

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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const handleSend = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!content.trim()) return

    const payload = content
    setContent('')

    // Add user message immediately
    const userMessage: ChatMessage = {
      id: Date.now(),
      sender: 'user',
      content: payload,
      created_at: new Date().toISOString()
    }
    setMessages((prev) => [...prev, userMessage])

    // Show typing indicator
    setIsTyping(true)

    try {
      const result = await api.post<{
        user_message: ChatMessage
        ai_message: ChatMessage
      }>(`/chats/${threadId}/messages/send/`, { content: payload })
      
      // Simulate typing delay for better UX
      setTimeout(() => {
        setIsTyping(false)
        setMessages((prev) => [...prev, result.ai_message])
      }, 1500)
    } catch (err) {
      setIsTyping(false)
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
    <div className="min-h-screen chat-container text-white flex flex-col">
      <AccountSidebar />
      
      <div 
        className="flex flex-col h-screen w-full min-w-0" 
        style={{ 
          marginLeft: sidebarCollapsed ? '80px' : '256px',
          transition: 'margin-left 0.3s',
          width: `calc(100% - ${sidebarCollapsed ? '80px' : '256px'})`
        }}
      >
        {/* Premium Header - Fixed at top */}
        <header className="sticky top-0 z-30 chat-header px-6 py-4 flex items-center justify-between w-full flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="relative group cursor-pointer">
            <div className="relative w-14 h-14 rounded-full overflow-hidden chat-avatar-border">
              <Image
                src={thread.girl.image_url}
                alt={thread.girl.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="56px"
              />
            </div>
            <div className="online-indicator"></div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold chat-name-gradient">
                {thread.girl.name}
              </h1>
              {isTyping && (
                <span className="text-xs text-[#00caeb] font-sans animate-pulse">typing...</span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                <Circle className="w-2 h-2 text-[#00caeb] fill-[#00caeb] animate-pulse" />
                <span className="text-xs text-[#00caeb] font-sans">online</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2.5 rounded-full chat-icon-button group">
            <Heart className="w-5 h-5 text-[#00caeb] group-hover:text-[#00caeb] transition-colors" />
          </button>
          <button className="p-2.5 rounded-full chat-icon-button group">
            <Gift className="w-5 h-5 text-[#00caeb] group-hover:text-[#00caeb] transition-colors" />
          </button>
          <button className="p-2.5 rounded-full chat-icon-button group">
            <Video className="w-5 h-5 text-[#00caeb] group-hover:text-[#00caeb] transition-colors" />
          </button>
          <button className="p-2.5 rounded-full chat-icon-button group">
            <Mic className="w-5 h-5 text-[#00caeb] group-hover:text-[#00caeb] transition-colors" />
          </button>
        </div>
        </header>

        {/* Messages Area - Scrollable, takes remaining space */}
        <main className="chat-messages-area flex-1 overflow-y-auto px-6 py-6 min-h-0">
          <div className="space-y-3">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex gap-3 chat-message-wrapper ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {message.sender === 'ai' && (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden chat-avatar-small flex-shrink-0">
                    <Image
                      src={thread.girl.image_url}
                      alt={thread.girl.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                )}

                <div
                  className={`chat-message ${
                    message.sender === 'user' ? 'chat-message-user' : 'chat-message-ai'
                  }`}
                >
                  <p className="text-sm leading-relaxed font-sans whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>

                {message.sender === 'user' && (
                  <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-[#df3fbf] to-[#ff69b4] flex-shrink-0 flex items-center justify-center border-2 border-[#df3fbf]/30">
                    <span className="text-xs text-white font-bold">U</span>
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 justify-start chat-message-wrapper">
                <div className="relative w-10 h-10 rounded-full overflow-hidden chat-avatar-small flex-shrink-0">
                  <Image
                    src={thread.girl.image_url}
                    alt={thread.girl.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="chat-message chat-message-ai">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#e0ffff] font-sans">{thread.girl.name} is typing</span>
                    <div className="flex gap-1.5">
                      <span className="chat-typing-dot"></span>
                      <span className="chat-typing-dot" style={{ animationDelay: '0.2s' }}></span>
                      <span className="chat-typing-dot" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </main>

        {/* Premium Input Area - Fixed at bottom */}
        <form
          onSubmit={handleSend}
          className="chat-input-area flex-shrink-0"
        >
          <div className="flex items-center gap-3 w-full">
            <input
              value={content}
              onChange={(event) => setContent(event.target.value)}
              className="flex-1 chat-input font-sans"
              placeholder="Say something bold..."
            />
            <button
              type="submit"
              disabled={!content.trim()}
              className="chat-send-button group"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
