'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

interface JournalEntry {
  id: string
  title: string
  content: string
  mood: string
  createdAt: string
}

export default function JournalPage() {
  const [entries, setEntries] = useState<JournalEntry[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [mood, setMood] = useState('steady')
  const prompts = [
    'What felt most manageable today?',
    'What helped you feel a little steadier?',
    'Where did you notice a moment of care for yourself?',
  ]
  const [prompt, setPrompt] = useState(prompts[0])

  useEffect(() => {
    async function loadEntries() {
      const response = await fetch('/api/journals', { credentials: 'include' })
      if (!response.ok) return
      const data = await response.json()
      setEntries(data.journals || [])
    }

    loadEntries()
  }, [])

  async function handleSave() {
    if (!title.trim() || !content.trim()) return

    const response = await fetch('/api/journals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ title, content, mood }),
    })

    if (!response.ok) return

    const data = await response.json()
    setEntries((current) => [data.entry, ...current])
    setTitle('')
    setContent('')
    setMood('steady')
  }

  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 max-w-4xl mx-auto w-full p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Private journal</h1>
            <p className="mt-2 text-sm text-gray-600">A calm, private space for reflection and self-check-ins.</p>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-2xl border border-secondary-dark bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold">New entry</h2>
              <div className="mt-4 space-y-3">
                <input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Entry title"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                />
                <div className="rounded-lg border border-secondary-dark bg-secondary/60 p-3 text-sm text-gray-700">
                  <p className="font-medium">Prompt</p>
                  <p className="mt-1">{prompt}</p>
                </div>
                <textarea
                  value={content}
                  onChange={(event) => setContent(event.target.value)}
                  placeholder="Write whatever feels helpful today..."
                  rows={6}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                />
                <select value={mood} onChange={(event) => setMood(event.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2">
                  <option value="steady">Steady</option>
                  <option value="reflective">Reflective</option>
                  <option value="overwhelmed">Overwhelmed</option>
                  <option value="hopeful">Hopeful</option>
                </select>
                <div className="flex flex-wrap items-center gap-3">
                  <button onClick={handleSave} className="rounded-lg bg-primary px-4 py-2 font-semibold text-white">
                    Save entry
                  </button>
                  <button onClick={() => setPrompt(prompts[Math.floor(Math.random() * prompts.length)])} className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700">
                    New prompt
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {entries.map((entry) => (
                <div key={entry.id} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{entry.title}</h3>
                    <span className="rounded-full bg-secondary px-2 py-1 text-xs text-gray-700">{entry.mood}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-700">{entry.content}</p>
                  <p className="mt-3 text-xs text-gray-500">{new Date(entry.createdAt).toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
