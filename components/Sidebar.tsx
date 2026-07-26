'use client'

import { Home, Users, BookOpen, TrendingUp, Settings } from 'lucide-react'
import Link from 'next/link'

export default function Sidebar() {
  const menuItems = [
    { icon: Home, label: 'Feed', href: '/' },
    { icon: Users, label: 'Communities', href: '/communities' },
    { icon: BookOpen, label: 'Workbooks', href: '/workbooks' },
    { icon: TrendingUp, label: 'Trending', href: '/trending' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ]

  return (
    <aside className="hidden lg:block w-64 bg-white border-r border-secondary-dark sticky top-14 h-[calc(100vh-56px)] overflow-y-auto">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary transition text-gray-700 font-medium"
          >
            <item.icon size={24} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Suggested Communities */}
      <div className="p-4 border-t border-secondary-dark">
        <h3 className="font-bold mb-3">Suggested Communities</h3>
        <div className="space-y-3">
          {['Anxiety Support', 'Grief & Loss', 'Mindfulness'].map((community) => (
            <div key={community} className="text-sm">
              <p className="font-medium text-gray-900">{community}</p>
              <button className="text-primary text-xs font-bold hover:underline">
                Join
              </button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
