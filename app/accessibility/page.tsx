'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

export default function AccessibilityPage() {
  const [language, setLanguage] = useState('en')
  const [reducedMotion, setReducedMotion] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    async function loadPreferences() {
      const response = await fetch('/api/preferences', { credentials: 'include' })
      if (!response.ok) return
      const data = await response.json()
      setLanguage(data.preferences?.language || 'en')
      setReducedMotion(Boolean(data.preferences?.reducedMotion))
      setHighContrast(Boolean(data.preferences?.highContrast))
    }

    loadPreferences()
  }, [])

  async function handleSave() {
    const response = await fetch('/api/preferences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ language, reducedMotion, highContrast }),
    })

    if (response.ok) {
      setSaved(true)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 max-w-4xl mx-auto w-full p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Accessibility & localization</h1>
            <p className="mt-2 text-sm text-gray-600">Adjust the experience for clearer reading, calmer motion, and broader language support.</p>
          </div>

          <div className="mt-6 rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Language</label>
                <select value={language} onChange={(event) => setLanguage(event.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2">
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="es">Español</option>
                </select>
              </div>

              <label className="flex items-center gap-3">
                <input type="checkbox" checked={reducedMotion} onChange={(event) => setReducedMotion(event.target.checked)} className="h-4 w-4" />
                <span className="text-gray-700">Reduce motion and animation</span>
              </label>

              <label className="flex items-center gap-3">
                <input type="checkbox" checked={highContrast} onChange={(event) => setHighContrast(event.target.checked)} className="h-4 w-4" />
                <span className="text-gray-700">Use high-contrast styling</span>
              </label>

              <button onClick={handleSave} className="rounded-lg bg-primary px-4 py-2 font-semibold text-white">
                Save preferences
              </button>

              {saved && <p className="text-sm text-green-700">Preferences saved.</p>}
            </div>
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
