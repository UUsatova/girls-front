'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/Sidebar'

export default function CreatePage() {
  const [activeTab, setActiveTab] = useState('create')

  return (
    <div className="min-h-screen bg-deep-900 text-white md:pl-64 p-6 md:p-10">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold">Create Persona</h1>
        <p className="text-lavender-muted font-sans">
          Persona creation tools will live here.
        </p>
      </div>
    </div>
  )
}
