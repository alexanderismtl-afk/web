'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const softStartActions = [
  'Open with one slow breath',
  'Choose the easiest task',
  'Set a tiny goal',
  'Dim bright distractions',
  'Start with a small win',
  'Leave space for pauses',
  'Keep the environment simple',
  'Avoid unnecessary pressure',
  'Let progress be imperfect',
  'Close with a gentle note',
]

export default function SoftStartPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Soft start</h1>
            <p className="mt-2 text-sm text-gray-600">A gentle way to begin the day when energy is low or the mind feels crowded.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {softStartActions.map((action) => (
              <div key={action} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                <p className="font-semibold">{action}</p>
              </div>
            ))}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
