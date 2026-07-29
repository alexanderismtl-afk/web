'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const aftercareSteps = [
  'Slow down after intensity',
  'Drink water and rest',
  'Notice what was hard',
  'Reconnect with your body',
  'Choose one grounding practice',
  'Let yourself be unfinished',
  'Reach out if needed',
  'Keep tomorrow simple',
  'Protect your energy',
  'Pause before judging yourself',
]

export default function AftercarePage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Aftercare</h1>
            <p className="mt-2 text-sm text-gray-600">Support for the moments after something intense, draining, or emotionally demanding.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {aftercareSteps.map((step) => (
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
