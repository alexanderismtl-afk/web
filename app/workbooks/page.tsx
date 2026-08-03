'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'
import { Search, Star, Users, Clock } from 'lucide-react'

interface Workbook {
  id: string
  title: string
  creator: string
  description: string
  sessions: number
  duration: string
  enrollees: number
  rating: number
  image: string
  tags: string[]
  category: string
}

export default function WorkbooksPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [workbooks, setWorkbooks] = useState<Workbook[]>([])

  useEffect(() => {
    async function loadWorkbooks() {
      const response = await fetch(`/api/workbooks?search=${encodeURIComponent(searchTerm)}`)
      if (!response.ok) return
      const data = await response.json()
      setWorkbooks(data.workbooks || [])
    }

    loadWorkbooks()
  }, [searchTerm])

  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 max-w-4xl mx-auto w-full p-4">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h1 className="text-3xl font-bold mb-4">Explore Workbooks</h1>
            <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
              <Search size={20} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search workbooks, topics..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

          <div className="space-y-4 pb-8">
            {workbooks.map((workbook) => (
              <div key={workbook.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="flex gap-4 p-4">
                  <div className="w-24 h-24 bg-secondary rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                    {workbook.image}
                  </div>

                  <div className="flex-1">
                    <h2 className="font-bold text-lg text-gray-900">{workbook.title}</h2>
                    <p className="text-sm text-gray-600 mb-2">by {workbook.creator}</p>
                    <p className="text-sm text-gray-700 mb-3">{workbook.description}</p>

                    <div className="flex gap-2 mb-3 flex-wrap">
                      {workbook.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

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

                  <div className="flex flex-col justify-end">
                    <Link href={`/workbooks/${workbook.id}`} className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-primary-dark transition text-center">
                      Start
                    </Link>
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
