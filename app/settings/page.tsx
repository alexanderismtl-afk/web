'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'
import { Settings, Bell, Lock, User } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 max-w-2xl mx-auto w-full p-4">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h1 className="text-3xl font-bold">Settings</h1>
          </div>

          {/* Settings Sections */}
          <div className="space-y-4 pb-8">
            {/* Account Settings */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b border-secondary-dark flex items-center gap-3">
                <User size={24} className="text-primary" />
                <h2 className="font-bold text-lg">Account Settings</h2>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Email</span>
                  <button className="text-primary hover:underline">Change</button>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Password</span>
                  <button className="text-primary hover:underline">Update</button>
                </div>
              </div>
            </div>

            {/* Notification Settings */}
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
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-gray-700">Notifications for community events</span>
                </label>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b border-secondary-dark flex items-center gap-3">
                <Lock size={24} className="text-primary" />
                <h2 className="font-bold text-lg">Privacy & Security</h2>
              </div>
              <div className="p-4 space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <span className="text-gray-700">Profile is public</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <span className="text-gray-700">Show my workbook progress</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-gray-700">Allow others to message me</span>
                </label>
              </div>
            </div>
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
