'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

interface AdminMetric {
  id: string
  label: string
  value: string
  hint: string
}

export default function AdminPage() {
  const [metrics, setMetrics] = useState<AdminMetric[]>([])

  useEffect(() => {
    async function loadMetrics() {
      const response = await fetch('/api/admin')
      if (!response.ok) return
      const data = await response.json()
      setMetrics(data.metrics || [])
    }

    loadMetrics()
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Operations dashboard</h1>
            <p className="mt-2 text-sm text-gray-600">A calm operational overview for support staff, moderators, and future administrators.</p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.id} className="rounded-2xl border border-secondary-dark bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{metric.label}</p>
                <p className="mt-3 text-3xl font-bold">{metric.value}</p>
                <p className="mt-2 text-sm text-gray-600">{metric.hint}</p>
              </div>
            ))}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
