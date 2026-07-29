'use client'

import { useEffect } from 'react'

import { applyPreferences, DEFAULT_PREFERENCES, readPreferences } from '@/lib/preferences'

export default function PreferenceManager() {
  useEffect(() => {
    async function hydratePreferences() {
      const stored = readPreferences()
      applyPreferences(stored)

      try {
        const response = await fetch('/api/preferences', { credentials: 'include' })
        if (!response.ok) {
          return
        }

        const data = await response.json()
        const nextPreferences = {
          ...DEFAULT_PREFERENCES,
          ...stored,
          ...data.preferences,
        }

        applyPreferences(nextPreferences)
        if (typeof window !== 'undefined') {
          window.localStorage.setItem('therapyhub:preferences', JSON.stringify(nextPreferences))
        }
      } catch {
        // Fail closed and keep the stored preferences.
      }
    }

    hydratePreferences()
  }, [])

  return null
}
