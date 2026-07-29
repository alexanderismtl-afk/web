'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const containmentSteps = [
  'Name the current stressor',
  'Reduce stimulation',
  'Move to a safer space',
  'Choose one calming action',
  'Keep the next step small',
  'Ask for support if needed',
  'Avoid making major decisions',
  'Stay near familiar comforts',
  'Take a slower pace',
  'Return to the plan later',
]

export default function ContainmentPlanPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Containment plan</h1>
            <p className="mt-2 text-sm text-gray-600">A grounded plan for moments that feel intense, unsafe, or overwhelming.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {containmentSteps.map((step) => (
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
