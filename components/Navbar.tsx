'use client'

import { Search, MessageCircle, Bell, User } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-secondary-dark shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-primary text-white px-3 py-1 rounded-lg font-bold text-xl">
            TH
          </div>
          <span className="hidden sm:inline font-bold text-lg">TherapyHub</span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md mx-4">
          <div className="flex items-center bg-secondary rounded-full px-4 py-2">
            <Search size={20} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search workbooks, people..."
              className="bg-transparent ml-2 outline-none w-full text-sm"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button className="hover:bg-secondary p-2 rounded-full transition">
            <MessageCircle size={24} className="text-gray-600" />
          </button>
          <button className="hover:bg-secondary p-2 rounded-full transition">
            <Bell size={24} className="text-gray-600" />
          </button>
          <button className="hover:bg-secondary p-2 rounded-full transition">
            <User size={24} className="text-gray-600" />
          </button>
        </div>
      </div>
    </nav>
  )
}
