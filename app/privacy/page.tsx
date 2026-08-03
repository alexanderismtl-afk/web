'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

interface ConsentItem {
  id: string
  title: string
  description: string
  granted: boolean
}

export default function PrivacyPage() {
  const [consents, setConsents] = useState<ConsentItem[]>([])

  useEffect(() => {
    async function loadConsents() {
      const response = await fetch('/api/privacy')
      if (!response.ok) return
      const data = await response.json()
      setConsents(data.consents || [])
    }

    loadConsents()
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Privacy & consent</h1>
            <p className="mt-2 text-sm text-gray-600">Manage your privacy preferences and review the consent choices that shape your experience.</p>
          </div>

          <div className="mt-6 space-y-3">
            {consents.map((consent) => (
              <div key={consent.id} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-semibold">{consent.title}</h2>
                    <p className="mt-2 text-sm text-gray-600">{consent.description}</p>
                  </div>
                  <span className={`rounded-full px-2 py-1 text-xs ${consent.granted ? 'bg-primary/10 text-primary' : 'bg-secondary text-gray-700'}`}>
                    {consent.granted ? 'Granted' : 'Not granted'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
