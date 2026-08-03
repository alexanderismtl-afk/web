'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'
import { Users, MessageSquare } from 'lucide-react'

interface Community {
  id: string
  name: string
  description: string
  members: number
  posts: number
  icon: string
  joined: boolean
}

export default function CommunitiesPage() {
  const [communities, setCommunities] = useState<Community[]>([])

  useEffect(() => {
    async function loadCommunities() {
      const response = await fetch('/api/communities', { credentials: 'include' })
      if (!response.ok) return
      const data = await response.json()
      setCommunities(data.communities || [])
    }

    loadCommunities()
  }, [])

  async function toggleMembership(communityId: string, action: 'join' | 'leave') {
    const response = await fetch('/api/communities', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ communityId, action }),
    })

    if (!response.ok) return

    const data = await response.json()
    setCommunities((current) => current.map((community) => (community.id === communityId ? { ...community, joined: data.community.joined } : community)))
  }

  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 max-w-4xl mx-auto w-full p-4">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h1 className="text-3xl font-bold mb-2">Communities</h1>
            <p className="text-gray-600">Join communities around topics that matter to you.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 pb-8">
            {communities.map((community) => (
              <div key={community.id} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-2xl">
                      {community.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{community.name}</h3>
                      <p className="text-sm text-gray-600">{community.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleMembership(community.id, community.joined ? 'leave' : 'join')}
                    className={`px-4 py-2 rounded-lg font-bold transition ${
                      community.joined ? 'bg-secondary text-gray-900 hover:bg-secondary-dark' : 'bg-primary text-white hover:bg-primary-dark'
                    }`}
                  >
                    {community.joined ? 'Joined' : 'Join'}
                  </button>
                </div>

                <div className="flex gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>{community.members.toLocaleString()} members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare size={16} />
                    <span>{community.posts} posts this week</span>
                  </div>
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
