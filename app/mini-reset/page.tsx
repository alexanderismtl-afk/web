'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const resetSteps = [
  'Stand up and move',
  'Open a window or door',
  'Take a sip of water',
  'Have a brief stretch',
  'Lower the noise level',
  'Put one hand on your chest',
  'Take one slow breath',
  'Look at one calming object',
  'Choose one small task',
  'Allow yourself to pause',
]

export default function MiniResetPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Mini reset</h1>
            <p className="mt-2 text-sm text-gray-600">A tiny, low-friction reset routine for when you need a quick shift out of overwhelm.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {resetSteps.map((step) => (
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
