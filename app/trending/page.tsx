'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'
import { TrendingUp, MessageSquare, Heart } from 'lucide-react'

interface TrendingTopic {
  id: number
  topic: string
  category: string
  discussions: number
  engagement: number
  growth: number
}

export default function TrendingPage() {
  const trendingTopics: TrendingTopic[] = [
    {
      id: 1,
      topic: 'Anxiety Management Strategies',
      category: 'Mental Health',
      discussions: 2341,
      engagement: 15234,
      growth: 24,
    },
    {
      id: 2,
      topic: 'Mindfulness & Meditation',
      category: 'Wellness',
      discussions: 1890,
      engagement: 12456,
      growth: 18,
    },
    {
      id: 3,
      topic: 'Sleep & Recovery',
      category: 'Health',
      discussions: 1654,
      engagement: 10234,
      growth: 15,
    },
    {
      id: 4,
      topic: 'Grief & Loss Support',
      category: 'Support',
      discussions: 1203,
      engagement: 8567,
      growth: 12,
    },
    {
      id: 5,
      topic: 'Self-Compassion Practice',
      category: 'Wellness',
      discussions: 987,
      engagement: 7234,
      growth: 28,
    },
    {
      id: 6,
      topic: 'Perfectionism Recovery',
      category: 'Mental Health',
      discussions: 845,
      engagement: 6123,
      growth: 35,
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
            <h1 className="text-3xl font-bold mb-2">Trending Topics</h1>
            <p className="text-gray-600">See what the community is talking about</p>
          </div>

          {/* Trending List */}
          <div className="space-y-4 pb-8">
            {trendingTopics.map((item, index) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg font-bold text-primary">#{index + 1}</span>
                      <span className="text-xs bg-secondary px-2 py-1 rounded-full text-gray-600">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900">{item.topic}</h3>
                  </div>
                  <div className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                    <TrendingUp size={16} />
                    <span>+{item.growth}%</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-8 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MessageSquare size={16} />
                    <span>{item.discussions.toLocaleString()} discussions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart size={16} />
                    <span>{item.engagement.toLocaleString()} interactions</span>
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
