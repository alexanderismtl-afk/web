'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

interface ResourceItem {
  id: string
  title: string
  category: string
  description: string
  link: string
}

export default function ResourceHubPage() {
  const [items, setItems] = useState<ResourceItem[]>([])

  useEffect(() => {
    async function loadItems() {
      const response = await fetch('/api/resource-hub')
      if (!response.ok) return
      const data = await response.json()
      setItems(data.items || [])
    }

    loadItems()
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Resource hub</h1>
            <p className="mt-2 text-sm text-gray-600">A calm place to find comfort tools, support resources, and gentle next steps.</p>
          </div>

          <div className="mt-6 grid gap-4">
            {items.map((item) => (
              <div key={item.id} className="rounded-2xl border border-secondary-dark bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{item.category}</p>
                    <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
                    <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
                <Link href={item.link} className="mt-4 inline-flex rounded-lg bg-primary px-4 py-2 font-semibold text-white">
                  Open
                </Link>
              </div>
            ))}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
