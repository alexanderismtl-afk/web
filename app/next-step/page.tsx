'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const nextSteps = [
  'Take one small action',
  'Set a five-minute timer',
  'Choose one priority',
  'Clear one small surface',
  'Open one window of light',
  'Write one sentence',
  'Stand up and stretch',
  'Drink something warm',
  'Text someone you trust',
  'Stop and notice what helps',
]

export default function NextStepPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Next step</h1>
            <p className="mt-2 text-sm text-gray-600">A simple guide for finding the smallest useful step when things feel crowded or unclear.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {nextSteps.map((step) => (
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
