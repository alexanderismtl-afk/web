'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const voiceNotes = [
  'I can take this one moment at a time',
  'I do not need to solve everything now',
  'My pace is allowed to be gentle',
  'I can ask for support',
  'I can pause and come back',
  'I am learning, not failing',
  'This feeling is real and temporary',
  'I can make space for care',
  'I am allowed to be human',
  'I can begin again slowly',
]

export default function InnerVoicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Inner voice</h1>
            <p className="mt-2 text-sm text-gray-600">A compassionate set of reminders for the part of you that needs reassurance and steadiness.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {voiceNotes.map((note) => (
              <div key={note} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                <p className="font-semibold">{note}</p>
              </div>
            ))}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
