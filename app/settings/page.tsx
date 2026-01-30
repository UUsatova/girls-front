'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/Sidebar'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('settings')

  return (
    <div className="min-h-screen bg-deep-900 text-white md:pl-64 p-6 md:p-10">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-3xl font-display font-bold">Preferences</h1>
        <p className="text-lavender-muted">
          App settings will appear here.
        </p>
      </div>
    </div>
  )
}
