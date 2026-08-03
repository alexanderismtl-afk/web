'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const bodyGuides = [
  'Relax your jaw',
  'Drop your shoulders',
  'Unclench your hands',
  'Feel your feet on the ground',
  'Take one slow stretch',
  'Notice your breathing',
  'Let the body be supported',
  'Soften your forehead',
  'Breathe into the belly',
  'Return to a steady posture',
]

export default function GroundedBodyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Grounded body</h1>
            <p className="mt-2 text-sm text-gray-600">Gentle body-based cues for reconnecting with support, steadiness, and ease.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {bodyGuides.map((guide) => (
              <div key={guide} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                <p className="font-semibold">{guide}</p>
              </div>
            ))}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
