'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

interface ReviewItem {
  id: string
  title: string
  summary: string
  priority: string
  status: string
}

export default function ModerationPage() {
  const [reviewItems, setReviewItems] = useState<ReviewItem[]>([])

  useEffect(() => {
    async function loadQueue() {
      const response = await fetch('/api/moderation/queue')
      if (!response.ok) return
      const data = await response.json()
      setReviewItems(data.reviewItems || [])
    }

    loadQueue()
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Moderation review queue</h1>
            <p className="mt-2 text-sm text-gray-600">A calm, structured queue for human review of sensitive reports and community concerns.</p>
          </div>

          <div className="mt-6 space-y-3">
            {reviewItems.map((item) => (
              <div key={item.id} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{item.priority}</p>
                    <h2 className="mt-1 font-semibold">{item.title}</h2>
                    <p className="mt-2 text-sm text-gray-600">{item.summary}</p>
                  </div>
                  <span className="rounded-full bg-secondary px-2 py-1 text-xs text-gray-700">{item.status}</span>
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
