'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const groundingPractices = [
  'Name five things you can see',
  'Notice your feet on the floor',
  'Unclench your jaw',
  'Take one slow breath',
  'Touch a steady object',
  'Look out a window',
  'Lower your shoulders',
  'Count three calming sounds',
  'Sip water slowly',
  'Say one kind sentence to yourself',
]

export default function GroundingPracticesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Grounding practices</h1>
            <p className="mt-2 text-sm text-gray-600">A calm set of sensory tools for returning to the present without pressure.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {groundingPractices.map((practice) => (
              <div key={practice} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                <p className="font-semibold">{practice}</p>
              </div>
            ))}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
