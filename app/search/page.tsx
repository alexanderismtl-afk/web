'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

interface SearchResult {
  id: string
  title: string
  type: string
  description: string
}

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])

  useEffect(() => {
    async function loadResults() {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
      if (!response.ok) return
      const data = await response.json()
      setResults(data.results || [])
    }

    loadResults()
  }, [query])

  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Search</h1>
            <p className="mt-2 text-sm text-gray-600">Search for communities, resources, workbooks, and support content across the platform.</p>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try: anxiety, grounding, crisis..."
              className="mt-4 w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>

          <div className="mt-6 space-y-3">
            {results.map((result) => (
              <div key={result.id} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{result.type}</p>
                    <h2 className="mt-1 font-semibold">{result.title}</h2>
                    <p className="mt-2 text-sm text-gray-600">{result.description}</p>
                  </div>
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
