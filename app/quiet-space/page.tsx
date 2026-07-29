'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const quietOptions = [
  'Soft lighting',
  'No notifications',
  'Short breathing loop',
  'Neutral background',
  'Single-task focus',
  'No pressure to reply',
  'Low-stimulation surroundings',
  'Gentle audio',
  'Tiny reset',
  'Re-entry plan',
]

export default function QuietSpacePage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Quiet space</h1>
            <p className="mt-2 text-sm text-gray-600">A calmer place to step back from intensity and recover with intention.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {quietOptions.map((option) => (
              <div key={option} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                <p className="font-semibold">{option}</p>
              </div>
            ))}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
