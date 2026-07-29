'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const bridgeSteps = [
  'Take one slow breath',
  'Name one thing you can handle',
  'Choose one small next step',
  'Ask for one form of help',
  'Use a grounding tool',
  'Protect your attention',
  'Reduce extra demands',
  'Keep your pace gentle',
  'Remember that this is temporary',
  'Return to care when you can',
]

export default function BridgePlanPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Bridge plan</h1>
            <p className="mt-2 text-sm text-gray-600">A simple bridge between overwhelm and steadiness when you need to move through a hard moment.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {bridgeSteps.map((step) => (
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
