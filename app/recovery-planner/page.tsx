'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const recoverySteps = [
  'Pause and lower the pace',
  'Choose one small task only',
  'Set a gentle timer',
  'Drink something warm',
  'Move your body a little',
  'Let yourself rest',
  'Text or call one safe person',
  'Use one calming tool',
  'Take a short break',
  'Finish by noting one win',
]

export default function RecoveryPlannerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Recovery planner</h1>
            <p className="mt-2 text-sm text-gray-600">A structured reset plan for hard days that honors your limits.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {recoverySteps.map((step) => (
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
