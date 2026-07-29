'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const comfortItems = [
  'Grounding card',
  'Water reminder',
  'Stretch break',
  'Warm drink cue',
  'Low-light mode',
  'Soft music cue',
  'Paper journal prompt',
  'Quiet playlist',
  'Window break',
  'Gentle reset',
]

export default function ComfortKitPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Comfort kit</h1>
            <p className="mt-2 text-sm text-gray-600">A private collection of small comforts for moments that feel too loud, heavy, or rushed.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {comfortItems.map((item) => (
              <div key={item} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
