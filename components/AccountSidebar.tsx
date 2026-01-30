'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Sidebar } from '@/components/Sidebar'
import { api } from '@/lib/api'

export function AccountSidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    let mounted = true
    const checkAuth = async () => {
      try {
        await api.get('/auth/me/')
      } catch {
        if (mounted) router.push('/login')
      }
    }
    checkAuth()
    return () => {
      mounted = false
    }
  }, [router])

  useEffect(() => {
    if (pathname?.startsWith('/account')) {
      setActiveTab('messages')
    } else {
      setActiveTab('home')
    }
  }, [pathname])

  return <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
}
