'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const choices = [
  'Choose a quieter room',
  'Put your phone on silent',
  'Step away from the trigger',
  'Call one trusted person',
  'Drink water and breathe',
  'Leave the situation briefly',
  'Choose a slower activity',
  'Avoid making big decisions now',
  'Keep yourself near comfort',
  'Return when you feel steadier',
]

export default function SaferChoicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Safer choices</h1>
            <p className="mt-2 text-sm text-gray-600">Helpful options for making the next decision feel a little safer and more manageable.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {choices.map((choice) => (
              <div key={choice} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                <p className="font-semibold">{choice}</p>
              </div>
            ))}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
