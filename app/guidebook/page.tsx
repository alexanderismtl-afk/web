'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const guideSections = [
  'Start gently',
  'Use one support tool at a time',
  'Keep your space simple',
  'Take breaks without guilt',
  'Ask for support when needed',
  'Protect your energy',
  'Notice what helps',
  'Go slow',
  'Let things be enough',
  'Return when you can',
]

export default function GuidebookPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Guidebook</h1>
            <p className="mt-2 text-sm text-gray-600">A gentle companion for navigating the platform with clarity, care, and less pressure.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {guideSections.map((section) => (
              <div key={section} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                <p className="font-semibold">{section}</p>
              </div>
            ))}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
