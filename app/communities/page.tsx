'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'
import { Users, MessageSquare, TrendingUp } from 'lucide-react'

interface Community {
  id: number
  name: string
  description: string
  members: number
  posts: number
  icon: string
  joined: boolean
}

export default function CommunitiesPage() {
  const communities: Community[] = [
    {
      id: 1,
      name: 'Anxiety Warriors',
      description: 'A supportive community for people managing anxiety disorders and panic attacks.',
      members: 2340,
      posts: 584,
      icon: '😰',
      joined: true,
    },
    {
      id: 2,
      name: 'Grief & Healing',
      description: 'Safe space for processing loss and supporting each other through grief.',
      members: 1890,
      posts: 421,
      icon: '💔',
      joined: false,
    },
    {
      id: 3,
      name: 'Mindfulness Daily',
      description: 'Share your meditation practice and mindfulness journey with like-minded people.',
      members: 5230,
      posts: 1203,
      icon: '🧘',
      joined: true,
    },
    {
      id: 4,
      name: 'Sleep Better Community',
      description: 'Tips, support, and encouragement for overcoming sleep challenges.',
      members: 1650,
      posts: 389,
      icon: '😴',
      joined: false,
    },
    {
      id: 5,
      name: 'Self-Compassion Circle',
      description: 'Learning to be kind to ourselves through shared experiences and practice.',
      members: 980,
      posts: 267,
      icon: '💝',
      joined: false,
    },
    {
      id: 6,
      name: 'Therapists & Facilitators',
      description: 'Professional network for sharing best practices and supporting each other.',
      members: 340,
      posts: 156,
      icon: '👨‍⚕️',
      joined: true,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 max-w-4xl mx-auto w-full p-4">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h1 className="text-3xl font-bold mb-2">Communities</h1>
            <p className="text-gray-600">Join communities around topics that matter to you</p>
          </div>

          {/* Communities Grid */}
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
                    className={`px-4 py-2 rounded-lg font-bold transition ${
                      community.joined
                        ? 'bg-secondary text-gray-900 hover:bg-secondary-dark'
                        : 'bg-primary text-white hover:bg-primary-dark'
                    }`}
                  >
                    {community.joined ? 'Joined' : 'Join'}
                  </button>
                </div>

                {/* Stats */}
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
