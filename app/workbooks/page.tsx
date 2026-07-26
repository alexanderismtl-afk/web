'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'
import { Search, Star, Users, Clock } from 'lucide-react'
import { useState } from 'react'

interface Workbook {
  id: number
  title: string
  creator: string
  description: string
  sessions: number
  duration: string
  enrollees: number
  rating: number
  image: string
  tags: string[]
}

export default function WorkbooksPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const workbooks: Workbook[] = [
    {
      id: 1,
      title: 'Managing Anxiety: 6-Session CBT Program',
      creator: 'Dr. Sarah Chen',
      description: 'Learn evidence-based cognitive behavioral therapy techniques to manage anxiety symptoms and build resilience.',
      sessions: 6,
      duration: '4-6 weeks',
      enrollees: 1240,
      rating: 4.8,
      image: '😰',
      tags: ['Anxiety', 'CBT', 'Mental Health'],
    },
    {
      id: 2,
      title: 'Grief & Loss Support Group Workbook',
      creator: 'Wellness Collective',
      description: 'Navigate the grieving process with compassionate guidance and reflection exercises designed for emotional healing.',
      sessions: 8,
      duration: '8 weeks',
      enrollees: 890,
      rating: 4.9,
      image: '💔',
      tags: ['Grief', 'Support', 'Healing'],
    },
    {
      id: 3,
      title: 'Mindfulness & Meditation: Daily Practice',
      creator: 'Calm Mind Institute',
      description: 'Develop a sustainable mindfulness practice with guided sessions and worksheets for daily integration.',
      sessions: 12,
      duration: '12 weeks',
      enrollees: 2100,
      rating: 4.7,
      image: '🧘',
      tags: ['Mindfulness', 'Meditation', 'Wellness'],
    },
    {
      id: 4,
      title: 'Perfectionism Recovery Program',
      creator: 'Dr. Marcus Johnson',
      description: 'Break free from perfectionist patterns and build self-compassion with practical cognitive restructuring tools.',
      sessions: 6,
      duration: '5-7 weeks',
      enrollees: 650,
      rating: 4.6,
      image: '✨',
      tags: ['Perfectionism', 'Self-Compassion', 'CBT'],
    },
    {
      id: 5,
      title: 'Sleep & Recovery: Restoring Your Rest',
      creator: 'Sleep Science Lab',
      description: 'Address sleep anxiety and insomnia with evidence-based techniques including sleep hygiene and cognitive tools.',
      sessions: 5,
      duration: '4-5 weeks',
      enrollees: 1450,
      rating: 4.8,
      image: '😴',
      tags: ['Sleep', 'Insomnia', 'Recovery'],
    },
    {
      id: 6,
      title: 'Building Emotional Resilience',
      creator: 'Dr. Lisa Rodriguez',
      description: 'Strengthen your emotional capacity to bounce back from challenges with DBT skills and mindfulness practices.',
      sessions: 10,
      duration: '10 weeks',
      enrollees: 980,
      rating: 4.7,
      image: '💪',
      tags: ['Resilience', 'DBT', 'Emotional Health'],
    },
  ]

  const filteredWorkbooks = workbooks.filter(
    (w) =>
      w.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 max-w-4xl mx-auto w-full p-4">
          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h1 className="text-3xl font-bold mb-4">Explore Workbooks</h1>
            <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
              <Search size={20} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search workbooks, topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

          {/* Workbooks Grid */}
          <div className="space-y-4 pb-8">
            {filteredWorkbooks.map((workbook) => (
              <div
                key={workbook.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer"
              >
                <div className="flex gap-4 p-4">
                  {/* Image */}
                  <div className="w-24 h-24 bg-secondary rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                    {workbook.image}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="font-bold text-lg text-gray-900">{workbook.title}</h2>
                    <p className="text-sm text-gray-600 mb-2">by {workbook.creator}</p>
                    <p className="text-sm text-gray-700 mb-3">{workbook.description}</p>

                    {/* Tags */}
                    <div className="flex gap-2 mb-3 flex-wrap">
                      {workbook.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex gap-6 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{workbook.sessions} sessions • {workbook.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        <span>{workbook.enrollees.toLocaleString()} enrolled</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={16} className="text-yellow-500" />
                        <span>{workbook.rating} rating</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col justify-end">
                    <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-primary-dark transition">
                      Start
                    </button>
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
