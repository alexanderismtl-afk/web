'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const routineSteps = [
  'Wake slowly',
  'Hydrate',
  'Open the day gently',
  'Take one small task',
  'Pause for a breath',
  'Eat something grounding',
  'Move a little',
  'Check in with yourself',
  'Rest before overload',
  'End the day with care',
]

export default function SteadyRoutinePage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Steady routine</h1>
            <p className="mt-2 text-sm text-gray-600">A low-pressure plan for pacing the day without forcing productivity.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {routineSteps.map((step) => (
              <div key={step} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                <p className="font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
