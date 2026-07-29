'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

interface CrisisResource {
  id: string
  name: string
  region: string
  language: string
  phone: string
  category: string
}

export default function CrisisResourcesPage() {
  const [resources, setResources] = useState<CrisisResource[]>([])
  const [region, setRegion] = useState('')
  const [language, setLanguage] = useState('')

  useEffect(() => {
    async function loadResources() {
      const query = new URLSearchParams()
      if (region) query.set('region', region)
      if (language) query.set('language', language)

      const response = await fetch(`/api/crisis-resources?${query.toString()}`)
      if (!response.ok) return
      const data = await response.json()
      setResources(data.resources || [])
    }

    loadResources()
  }, [region, language])

  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Crisis resources</h1>
            <p className="mt-2 text-sm text-gray-600">Find immediate support options that are appropriate for your region and language.</p>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
            <div className="rounded-2xl border border-secondary-dark bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold">Filter resources</h2>
              <div className="mt-4 space-y-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Region</label>
                  <input value={region} onChange={(event) => setRegion(event.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Canada" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Language</label>
                  <select value={language} onChange={(event) => setLanguage(event.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2">
                    <option value="">Any</option>
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {resources.map((resource) => (
                <div key={resource.id} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">{resource.name}</h3>
                      <p className="text-sm text-gray-600">{resource.region} • {resource.language.toUpperCase()}</p>
                    </div>
                    <span className="rounded-full bg-secondary px-2 py-1 text-xs text-gray-700">{resource.category}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">Phone: {resource.phone}</p>
                </div>
              ))}
              {!resources.length && <p className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm text-gray-700">No matching resources were found.</p>}
            </div>
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
