'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

interface WellnessCheckin {
  id: string
  title: string
  prompt: string
  mood: string
  createdAt: string
}

export default function WellnessPage() {
  const [checkins, setCheckins] = useState<WellnessCheckin[]>([])

  useEffect(() => {
    async function loadCheckins() {
      const response = await fetch('/api/wellness')
      if (!response.ok) return
      const data = await response.json()
      setCheckins(data.checkins || [])
    }

    loadCheckins()
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Wellness check-ins</h1>
            <p className="mt-2 text-sm text-gray-600">Gentle reflections to help you notice progress, energy, and support needs.</p>
          </div>

          <div className="mt-6 grid gap-4">
            {checkins.map((checkin) => (
              <div key={checkin.id} className="rounded-2xl border border-secondary-dark bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold">{checkin.title}</h2>
                    <p className="mt-2 text-sm text-gray-600">{checkin.prompt}</p>
                  </div>
                  <span className="rounded-full bg-secondary px-2 py-1 text-xs text-gray-700">{checkin.mood}</span>
                </div>
                <p className="mt-4 text-xs text-gray-500">{new Date(checkin.createdAt).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
