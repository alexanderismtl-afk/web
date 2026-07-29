'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

interface NotificationItem {
  id: string
  title: string
  body: string
  category: string
  time: string
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([])

  useEffect(() => {
    async function loadNotifications() {
      const response = await fetch('/api/notifications')
      if (!response.ok) return
      const data = await response.json()
      setNotifications(data.notifications || [])
    }

    loadNotifications()
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="mx-auto flex-1 max-w-5xl p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Gentle updates</h1>
            <p className="mt-2 text-sm text-gray-600">A calm place to review updates, reminders, and community nudges without pressure.</p>
          </div>

          <div className="mt-6 space-y-3">
            {notifications.map((notification) => (
              <div key={notification.id} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{notification.category}</p>
                    <h2 className="mt-1 font-semibold">{notification.title}</h2>
                    <p className="mt-2 text-sm text-gray-600">{notification.body}</p>
                  </div>
                  <span className="text-xs text-gray-500">{notification.time}</span>
                </div>
              </div>
            ))}
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
