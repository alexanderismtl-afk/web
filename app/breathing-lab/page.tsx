'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const breathingPatterns = [
  'Inhale for four',
  'Exhale for six',
  'Repeat three times',
  'Try a longer exhale',
  'Count softly to yourself',
  'Let the breath be easy',
  'Notice the body relaxing',
  'Keep it gentle and unforced',
  'Pause between rounds',
  'Come back to the present',
]

export default function BreathingLabPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Breathing lab</h1>
            <p className="mt-2 text-sm text-gray-600">A calm set of breathing patterns for moments when you want to settle your system gently.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {breathingPatterns.map((pattern) => (
              <div key={pattern} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                <p className="font-semibold">{pattern}</p>
              </div>
            ))}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
