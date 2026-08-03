'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const permissionNotes = [
  'You are allowed to rest',
  'You are allowed to slow down',
  'You are allowed to ask for help',
  'You are allowed to skip the extra task',
  'You are allowed to stop early',
  'You are allowed to be unfinished',
  'You are allowed to protect your peace',
  'You are allowed to need space',
  'You are allowed to take your time',
  'You are allowed to begin again later',
]

export default function PermissionSlipPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Permission slip</h1>
            <p className="mt-2 text-sm text-gray-600">Gentle reminders that you are not required to be productive, polished, or available all the time.</p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {permissionNotes.map((note) => (
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
