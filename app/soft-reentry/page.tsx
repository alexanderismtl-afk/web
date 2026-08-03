'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const reentrySteps = [
  'Take a breath before rejoining',
  'Choose one simple task',
  'Set a gentle expectation',
  'Mute unnecessary noise',
  'Re-enter slowly',
  'Keep your pace humane',
  'Avoid overcommitting',
  'Notice what supports you',
  'Take one pause if needed',
  'Return to care after the task',
]

export default function SoftReentryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Soft reentry</h1>
            <p className="mt-2 text-sm text-gray-600">A gentle path back into the day after a pause, setback, or period of overwhelm.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {reentrySteps.map((step) => (
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
