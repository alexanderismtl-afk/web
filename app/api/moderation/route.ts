import { NextRequest, NextResponse } from 'next/server'

import { verifyToken } from '@/lib/auth'

const reports = [
  {
    id: 'report-1',
    reason: 'Harassment',
    status: 'reviewing',
    createdAt: '2026-07-28T10:00:00.000Z',
  },
  {
    id: 'report-2',
    reason: 'Spam',
    status: 'resolved',
    createdAt: '2026-07-27T16:20:00.000Z',
  },
]

export async function GET(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value
  if (!token) {
    return NextResponse.json({ reports: [] }, { status: 401 })
  }

  const decoded = verifyToken(token)
  if (!decoded?.userId) {
    return NextResponse.json({ reports: [] }, { status: 401 })
  }

  return NextResponse.json({ reports })
}

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value
    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const decoded = verifyToken(token)
    if (!decoded?.userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const reason = typeof body?.reason === 'string' ? body.reason.trim() : ''

    if (!reason) {
      return NextResponse.json({ message: 'Please provide a reason for the report.' }, { status: 400 })
    }

    const report = {
      id: `report-${Date.now()}`,
      reason,
      status: 'reviewing',
      createdAt: new Date().toISOString(),
    }

    reports.unshift(report)

    return NextResponse.json({ report })
  } catch (error) {
    return NextResponse.json({ message: 'Unable to submit your report.' }, { status: 500 })
  }
}
