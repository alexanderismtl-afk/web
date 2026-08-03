'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const calmIntervals = [
  'Two-minute reset',
  'Five-minute pause',
  'Ten-minute breathing break',
  'Quiet reading interval',
  'Stretch-and-release block',
  'Slow walk window',
  'Tea and recharge break',
  'Screen-free moment',
  'Soft music pause',
  'Nighttime wind-down',
]

export default function CalmTimerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Calm timer</h1>
            <p className="mt-2 text-sm text-gray-600">Short, optional pauses that help you return to yourself in a gentle way.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {calmIntervals.map((interval) => (
              <div key={interval} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                <p className="font-semibold">{interval}</p>
              </div>
            ))}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
