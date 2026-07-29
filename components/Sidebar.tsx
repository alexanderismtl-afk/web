'use client'

import { Home, Users, BookOpen, TrendingUp, Settings, FileText, Accessibility, ShieldAlert, Sparkles, HeartHandshake, HeartPulse, Compass, BellRing, ShieldCheck, Lock, LayoutDashboard, Search as SearchIcon, Wrench, Clock3 } from 'lucide-react'
import Link from 'next/link'

export default function Sidebar() {
  const menuItems = [
    { icon: Home, label: 'Feed', href: '/' },
    { icon: Users, label: 'Communities', href: '/communities' },
    { icon: BookOpen, label: 'Workbooks', href: '/workbooks' },
    { icon: FileText, label: 'Journal', href: '/journal' },
    { icon: Sparkles, label: 'Learning', href: '/learning' },
    { icon: HeartPulse, label: 'Wellness', href: '/wellness' },
    { icon: Compass, label: 'Resource Hub', href: '/resource-hub' },
    { icon: Wrench, label: 'Support Tools', href: '/support-tools' },
    { icon: HeartPulse, label: 'Comfort Kit', href: '/comfort-kit' },
    { icon: BookOpen, label: 'Guidebook', href: '/guidebook' },
    { icon: HeartHandshake, label: 'Quiet Space', href: '/quiet-space' },
    { icon: Sparkles, label: 'Steady Routine', href: '/steady-routine' },
    { icon: HeartPulse, label: 'Daily Care', href: '/daily-care' },
    { icon: Sparkles, label: 'Grounding Practices', href: '/grounding-practices' },
    { icon: HeartHandshake, label: 'Recovery Planner', href: '/recovery-planner' },
    { icon: Clock3, label: 'Calm Timer', href: '/calm-timer' },
    { icon: FileText, label: 'Check-in Hub', href: '/check-in-hub' },
    { icon: Sparkles, label: 'Soft Start', href: '/soft-start' },
    { icon: HeartPulse, label: 'Energy Map', href: '/energy-map' },
    { icon: HeartHandshake, label: 'Aftercare', href: '/aftercare' },
    { icon: ShieldAlert, label: 'Containment Plan', href: '/containment-plan' },
    { icon: Sparkles, label: 'Comfort Rituals', href: '/comfort-rituals' },
    { icon: HeartPulse, label: 'Bridge Plan', href: '/bridge-plan' },
    { icon: Sparkles, label: 'Steady Anchors', href: '/steady-anchors' },
    { icon: HeartHandshake, label: 'Soft Reentry', href: '/soft-reentry' },
    { icon: ShieldCheck, label: 'Permission Slip', href: '/permission-slip' },
    { icon: Sparkles, label: 'Inner Voice', href: '/inner-voice' },
    { icon: HeartPulse, label: 'Safer Choices', href: '/safer-choices' },
    { icon: Compass, label: 'Next Step', href: '/next-step' },
    { icon: Sparkles, label: 'Breathing Lab', href: '/breathing-lab' },
    { icon: HeartPulse, label: 'Grounded Body', href: '/grounded-body' },
    { icon: Clock3, label: 'Mini Reset', href: '/mini-reset' },
    { icon: SearchIcon, label: 'Search', href: '/search' },
    { icon: BellRing, label: 'Notifications', href: '/notifications' },
    { icon: Lock, label: 'Privacy', href: '/privacy' },
    { icon: ShieldCheck, label: 'Moderation', href: '/moderation' },
    { icon: LayoutDashboard, label: 'Admin', href: '/admin' },
    { icon: HeartHandshake, label: 'Support Circles', href: '/support-circles' },
    { icon: ShieldAlert, label: 'Crisis Resources', href: '/crisis-resources' },
    { icon: Accessibility, label: 'Accessibility', href: '/accessibility' },
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
