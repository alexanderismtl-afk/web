'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RightPanel from '@/components/RightPanel'

interface Report {
  id: string
  reason: string
  status: string
  createdAt: string
}

export default function SafetyPage() {
  const [reports, setReports] = useState<Report[]>([])
  const [reason, setReason] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    async function loadReports() {
      const response = await fetch('/api/moderation', { credentials: 'include' })
      if (!response.ok) return
      const data = await response.json()
      setReports(data.reports || [])
    }

    loadReports()
  }, [])

  async function handleSubmit() {
    if (!reason.trim()) return

    const response = await fetch('/api/moderation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ reason }),
    })

    if (!response.ok) return

    const data = await response.json()
    setReports((current) => [data.report, ...current])
    setReason('')
    setMessage('Your report has been submitted for review.')
  }

  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 max-w-4xl mx-auto w-full p-4">
          <div className="rounded-2xl border border-secondary-dark bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Safety & moderation</h1>
            <p className="mt-2 text-sm text-gray-600">Report content, view review status, and access supportive safety resources.</p>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-2xl border border-secondary-dark bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold">Submit a report</h2>
              <textarea
                value={reason}
                onChange={(event) => setReason(event.target.value)}
                rows={5}
                placeholder="Describe the concern..."
                className="mt-4 w-full rounded-lg border border-gray-300 px-3 py-2"
              />
              <button onClick={handleSubmit} className="mt-4 rounded-lg bg-primary px-4 py-2 font-semibold text-white">
                Submit report
              </button>
              {message && <p className="mt-3 text-sm text-green-700">{message}</p>}
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-secondary-dark bg-white p-5 shadow-sm">
                <h2 className="text-xl font-semibold">Support resources</h2>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>• Contact local emergency services if you are in immediate danger.</li>
                  <li>• Reach out to a trusted contact or support line for urgent help.</li>
                  <li>• Use the platform’s private journal and calming tools when you need a pause.</li>
                </ul>
              </div>

              {reports.map((report) => (
                <div key={report.id} className="rounded-2xl border border-secondary-dark bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{report.reason}</p>
                    <span className="rounded-full bg-secondary px-2 py-1 text-xs text-gray-700">{report.status}</span>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">{new Date(report.createdAt).toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
