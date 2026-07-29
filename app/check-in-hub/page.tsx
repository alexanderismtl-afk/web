'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const checkInItems = [
  'How are you feeling right now?',
  'What feels heavy today?',
  'What helped you recently?',
  'What do you need next?',
  'Where do you need gentleness?',
  'What can be simplified?',
  'What deserves patience?',
  'What feels safe enough?',
  'What do you want to remember?',
  'What can wait?',
]

export default function CheckInHubPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Check-in hub</h1>
            <p className="mt-2 text-sm text-gray-600">A simple place to pause, reflect, and notice what matters today.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {checkInItems.map((item) => (
              <div key={item} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
