'use client'

import { useEffect, useState } from 'react'

const options = [
  'Supportive community',
  'Coping tools',
  'Learn about mental health',
  'Private journaling',
  'Resources',
  'Help others',
]

export default function OnboardingWizard() {
  const [selected, setSelected] = useState<string[]>([])
  const [name, setName] = useState('')
  const [privacyMode, setPrivacyMode] = useState('private')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    async function loadProfile() {
      const response = await fetch('/api/profile', { credentials: 'include' })
      if (!response.ok) return
      const data = await response.json()
      if (data?.user) {
        setName(data.user.name || '')
        setPrivacyMode(data.user.privacyMode || 'private')
        setSelected(data.user.onboardingSelections ? data.user.onboardingSelections.split(',') : [])
      }
    }

    loadProfile()
  }, [])

  async function handleSave() {
    const response = await fetch('/api/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        name,
        onboardingComplete: true,
        onboardingSelections: selected.join(','),
        privacyMode,
      }),
    })

    if (response.ok) {
      setSaved(true)
    }
  }

  return (
    <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
      <div className="mb-5 space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Onboarding</p>
        <h2 className="text-2xl font-bold text-slate-900">Set up a calmer, more private experience</h2>
        <p className="text-sm text-gray-600">Choose what matters most and adjust your privacy defaults. You can always change this later.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="name">Preferred name</label>
          <input
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
            placeholder="How would you like to be called?"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">What brings you here?</label>
          <div className="flex flex-wrap gap-2">
            {options.map((option) => {
              const active = selected.includes(option)
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setSelected((prev) => (prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]))
                  }}
                  className={`rounded-full px-3 py-2 text-sm ${active ? 'bg-primary text-white' : 'bg-secondary text-gray-700'}`}
                >
                  {option}
                </button>
              )
            })}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Privacy default</label>
          <select
            value={privacyMode}
            onChange={(event) => setPrivacyMode(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          >
            <option value="private">Private by default</option>
            <option value="friends">Visible to trusted connections</option>
            <option value="community">Visible to joined communities</option>
          </select>
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="rounded-lg bg-primary px-4 py-2 font-semibold text-white"
        >
          Save preferences
        </button>

        {saved && <p className="text-sm text-green-700">Your preferences were saved.</p>}
      </div>
    </div>
  )
}
