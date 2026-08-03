'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

interface SupportCircle {
  id: string
  name: string
  focus: string
  description: string
  members: number
  privacy: string
  availability: string
}

export default function SupportCirclesPage() {
  const [circles, setCircles] = useState<SupportCircle[]>([])

  useEffect(() => {
    async function loadCircles() {
      const response = await fetch('/api/support-circles')
      if (!response.ok) return
      const data = await response.json()
      setCircles(data.circles || [])
    }

    loadCircles()
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Support circles</h1>
            <p className="mt-2 text-sm text-gray-600">Small, structured spaces for gentle support, reflection, and shared care.</p>
          </div>

          <div className="mt-6 grid gap-4">
            {circles.map((circle) => (
              <div key={circle.id} className="rounded-2xl border border-secondary-dark bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold">{circle.name}</h2>
                    <p className="mt-2 text-sm text-gray-600">{circle.description}</p>
                  </div>
                  <span className="rounded-full bg-secondary px-2 py-1 text-xs text-gray-700">{circle.privacy}</span>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <span>{circle.members} members</span>
                  <span>•</span>
                  <span>{circle.availability}</span>
                  <span>•</span>
                  <span className="font-medium text-primary">{circle.focus}</span>
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
