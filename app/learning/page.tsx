'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

interface LearningModule {
  id: string
  title: string
  description: string
  duration: string
  level: string
  tags: string[]
}

export default function LearningPage() {
  const [modules, setModules] = useState<LearningModule[]>([])

  useEffect(() => {
    async function loadModules() {
      const response = await fetch('/api/learning')
      if (!response.ok) return
      const data = await response.json()
      setModules(data.modules || [])
    }

    loadModules()
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Learning & reflection</h1>
            <p className="mt-2 text-sm text-gray-600">Gentle, optional learning paths that support self-awareness and steadier routines.</p>
          </div>

          <div className="mt-6 grid gap-4">
            {modules.map((module) => (
              <div key={module.id} className="rounded-2xl border border-secondary-dark bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold">{module.title}</h2>
                    <p className="mt-2 text-sm text-gray-600">{module.description}</p>
                  </div>
                  <span className="rounded-full bg-secondary px-2 py-1 text-xs text-gray-700">{module.level}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {module.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{tag}</span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-500">Estimated time: {module.duration}</p>
              </div>
            ))}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
