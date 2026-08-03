'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const careActions = [
  'Morning grounding',
  'Hydration cue',
  'Stretch break',
  'Nutrition check',
  'Screen break',
  'Gratitude note',
  'Boundary check',
  'Sunset pause',
  'Sleep prep',
  'Self-kindness note',
]

export default function DailyCarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Daily care</h1>
            <p className="mt-2 text-sm text-gray-600">A soft, low-pressure guide for tending to your energy, body, and nervous system through the day.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {careActions.map((action) => (
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
