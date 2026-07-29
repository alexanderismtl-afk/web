'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const anchors = [
  'A familiar blanket',
  'A favorite mug',
  'A trusted playlist',
  'A warm light',
  'A steady chair',
  'A grounded routine',
  'A simple meal',
  'A calming object',
  'A nearby friend',
  'A quiet corner',
]

export default function SteadyAnchorsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Steady anchors</h1>
            <p className="mt-2 text-sm text-gray-600">A collection of stable, comforting things that help you feel more rooted when life feels shaky.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {anchors.map((anchor) => (
              <div key={anchor} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                <p className="font-semibold">{anchor}</p>
              </div>
            ))}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
