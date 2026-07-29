export interface AppPreferences {
  language: string
  reducedMotion: boolean
  highContrast: boolean
}

export const DEFAULT_PREFERENCES: AppPreferences = {
  language: 'en',
  reducedMotion: false,
  highContrast: false,
}

const STORAGE_KEY = 'therapyhub:preferences'

export function readPreferences(): AppPreferences {
  if (typeof window === 'undefined') {
    return DEFAULT_PREFERENCES
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return DEFAULT_PREFERENCES
    }

    return {
      ...DEFAULT_PREFERENCES,
      ...JSON.parse(raw),
    }
  } catch {
    return DEFAULT_PREFERENCES
  }
}

export function persistPreferences(preferences: AppPreferences) {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences))
  applyPreferences(preferences)
}

export function applyPreferences(preferences: AppPreferences) {
  if (typeof document === 'undefined') {
    return
  }

  const root = document.documentElement
  root.lang = preferences.language || 'en'
  root.classList.toggle('motion-reduce', Boolean(preferences.reducedMotion))
  root.classList.toggle('high-contrast', Boolean(preferences.highContrast))
}
