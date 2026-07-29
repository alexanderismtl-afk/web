'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

const tools = [
  {
    title: 'Quick exit',
    description: 'Leave sensitive content quickly and return to a neutral destination.',
    badge: 'Safety',
    action: 'Enable',
  },
  {
    title: 'Quiet hours',
    description: 'Pause optional reminders and reduce stimulation during calmer periods.',
    badge: 'Focus',
    action: 'Schedule',
  },
  {
    title: 'Reminders',
    description: 'Set gentle, optional check-ins for hydration, movement, or rest.',
    badge: 'Wellness',
    action: 'Manage',
  },
  {
    title: 'Habit tracker',
    description: 'Track three simple habits without pressure or streak-based guilt.',
    badge: 'Routine',
    action: 'Start',
  },
  {
    title: 'Mood trends',
    description: 'Notice shifts in energy and mood over time with a simple weekly view.',
    badge: 'Reflection',
    action: 'Review',
  },
  {
    title: 'Emergency contacts',
    description: 'Keep trusted contacts ready with a clear, private support list.',
    badge: 'Support',
    action: 'Add',
  },
  {
    title: 'Help center',
    description: 'Find calm guidance, common questions, and resource links in one place.',
    badge: 'Guidance',
    action: 'Open',
  },
  {
    title: 'AI reflection',
    description: 'Generate gentle prompts that support self-awareness without clinical claims.',
    badge: 'AI',
    action: 'Try',
  },
  {
    title: 'Offline sync',
    description: 'Keep journals, notes, and worksheets available when connectivity is limited.',
    badge: 'Offline',
    action: 'Enable',
  },
  {
    title: 'Download center',
    description: 'Access calm resources, worksheets, and private exports when needed.',
    badge: 'Files',
    action: 'Browse',
  },
  {
    title: 'Step pacing',
    description: 'Break tasks into small, gentle steps that feel easier to begin.',
    badge: 'Plan',
    action: 'Try',
  },
  {
    title: 'Breathing cues',
    description: 'Receive short, optional breathing prompts that never feel demanding.',
    badge: 'Calm',
    action: 'Enable',
  },
  {
    title: 'Sleep support',
    description: 'Set up a quiet evening routine with supportive, low-pressure signals.',
    badge: 'Rest',
    action: 'Plan',
  },
  {
    title: 'Boundary builder',
    description: 'Create simple personal boundaries for community participation and rest.',
    badge: 'Limits',
    action: 'Set',
  },
  {
    title: 'Recovery notes',
    description: 'Record small wins and steady progress without public comparison.',
    badge: 'Progress',
    action: 'Log',
  },
  {
    title: 'Support map',
    description: 'Keep a private view of trusted people, resources, and places that feel helpful.',
    badge: 'Map',
    action: 'View',
  },
  {
    title: 'Crisis plan',
    description: 'Store a calm, simple plan for reaching support when life feels overwhelming.',
    badge: 'Safety',
    action: 'Create',
  },
  {
    title: 'Reflection library',
    description: 'Browse gentle prompts and prompts for processing stress, rest, and growth.',
    badge: 'Reflection',
    action: 'Open',
  },
  {
    title: 'Check-in recap',
    description: 'Review recent check-ins and notice patterns with a compassionate weekly summary.',
    badge: 'Review',
    action: 'View',
  },
]

export default function SupportToolsPage() {
  const [activeTool, setActiveTool] = useState<string | null>(null)

  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-6xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Support tools</h1>
            <p className="mt-2 text-sm text-gray-600">A calm collection of practical features for safety, reflection, routine, and support.</p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {tools.map((tool) => (
              <div key={tool.title} className="rounded-2xl border border-secondary-dark bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">{tool.badge}</span>
                  <button
                    onClick={() => setActiveTool(tool.title)}
                    className="rounded-lg border border-gray-300 px-3 py-1 text-sm text-gray-700"
                  >
                    {tool.action}
                  </button>
                </div>
                <h2 className="mt-4 font-semibold">{tool.title}</h2>
                <p className="mt-2 text-sm text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>

          {activeTool && (
            <div className="mt-6 rounded-2xl border border-secondary-dark bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold">Selected tool</h2>
              <p className="mt-2 text-sm text-gray-600">{activeTool} is ready for use in this build. It will connect to richer flows as the platform grows.</p>
            </div>
          )}
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
