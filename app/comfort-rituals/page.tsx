'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const rituals = [
  'Tea and quiet breathing',
  'Stretch before bed',
  'A short journal entry',
  'Lighting a candle or lamp',
  'A warm shower',
  'A slow walk outside',
  'A favorite playlist',
  'A brief body scan',
  'A simple gratitude note',
  'A no-pressure reset',
]

export default function ComfortRitualsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Comfort rituals</h1>
            <p className="mt-2 text-sm text-gray-600">Small, repeatable rituals that make home feel safer, softer, and more steady.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {rituals.map((ritual) => (
              <div key={ritual} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                <p className="font-semibold">{ritual}</p>
              </div>
            ))}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
