'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'
import { Settings, Bell, Lock, User, Sparkles } from 'lucide-react'

export default function SettingsPage() {
  const [profile, setProfile] = useState<any>(null)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    async function loadProfile() {
      const response = await fetch('/api/profile', { credentials: 'include' })
      if (!response.ok) return
      const data = await response.json()
      setProfile(data.user)
    }

    loadProfile()
  }, [])

  async function handleSave() {
    if (!profile) return
    const response = await fetch('/api/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(profile),
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
        <main className="flex-1 max-w-2xl mx-auto w-full p-4">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="mt-2 text-sm text-gray-600">Personalize your privacy, accessibility, and onboarding preferences.</p>
          </div>

          <div className="space-y-4 pb-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b border-secondary-dark flex items-center gap-3">
                <User size={24} className="text-primary" />
                <h2 className="font-bold text-lg">Profile</h2>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Display name</label>
                  <input
                    value={profile?.name || ''}
                    onChange={(event) => setProfile({ ...profile, name: event.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Preferred name</label>
                  <input
                    value={profile?.preferredName || ''}
                    onChange={(event) => setProfile({ ...profile, preferredName: event.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Pronouns</label>
                  <input
                    value={profile?.pronouns || ''}
                    onChange={(event) => setProfile({ ...profile, pronouns: event.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Bio</label>
                  <textarea
                    value={profile?.bio || ''}
                    onChange={(event) => setProfile({ ...profile, bio: event.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b border-secondary-dark flex items-center gap-3">
                <Sparkles size={24} className="text-primary" />
                <h2 className="font-bold text-lg">Accessibility & Language</h2>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Language</label>
                  <select
                    value={profile?.language || 'en'}
                    onChange={(event) => setProfile({ ...profile, language: event.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  >
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                    <option value="es">Español</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Accessibility preference</label>
                  <select
                    value={profile?.accessibilityPreference || 'standard'}
                    onChange={(event) => setProfile({ ...profile, accessibilityPreference: event.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  >
                    <option value="standard">Standard</option>
                    <option value="reduced-motion">Reduced motion</option>
                    <option value="high-contrast">High contrast</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Notification preference</label>
                  <select
                    value={profile?.notificationPreference || 'gentle'}
                    onChange={(event) => setProfile({ ...profile, notificationPreference: event.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  >
                    <option value="gentle">Gentle, optional updates</option>
                    <option value="daily">Daily summary</option>
                    <option value="off">Paused</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b border-secondary-dark flex items-center gap-3">
                <Bell size={24} className="text-primary" />
                <h2 className="font-bold text-lg">Notifications</h2>
              </div>
              <div className="p-4 space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <span className="text-gray-700">Email notifications for new posts</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <span className="text-gray-700">Digest emails (weekly)</span>
                </label>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b border-secondary-dark flex items-center gap-3">
                <Lock size={24} className="text-primary" />
                <h2 className="font-bold text-lg">Privacy & Security</h2>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Visibility default</label>
                  <select
                    value={profile?.privacyMode || 'private'}
                    onChange={(event) => setProfile({ ...profile, privacyMode: event.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                  >
                    <option value="private">Private by default</option>
                    <option value="friends">Visible to trusted connections</option>
                    <option value="community">Visible to joined communities</option>
                  </select>
                </div>
                <Link href="/onboarding" className="inline-flex text-sm font-semibold text-primary hover:underline">
                  Review onboarding preferences
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={handleSave} className="rounded-lg bg-primary px-4 py-2 font-semibold text-white">Save changes</button>
              {saved && <span className="text-sm text-green-700">Saved successfully.</span>}
            </div>
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
