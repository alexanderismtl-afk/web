'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const energyZones = [
  'High energy',
  'Steady energy',
  'Low energy',
  'Overloaded',
  'Resting',
  'Recovering',
  'Needs comfort',
  'Needs space',
  'Needs support',
  'Needs joy',
]

export default function EnergyMapPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Energy map</h1>
            <p className="mt-2 text-sm text-gray-600">A friendly way to notice where your energy is today and what kind of care it needs.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {energyZones.map((zone) => (
              <div key={zone} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                <p className="font-semibold">{zone}</p>
              </div>
            ))}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
