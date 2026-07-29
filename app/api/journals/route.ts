import { NextRequest, NextResponse } from 'next/server'

import { verifyToken } from '@/lib/auth'

const journals = [
  {
    id: 'entry-1',
    title: 'Morning check-in',
    content: 'I felt calmer after a short breathing exercise and a quiet cup of tea.',
    mood: 'steady',
    createdAt: '2026-07-28T08:00:00.000Z',
  },
  {
    id: 'entry-2',
    title: 'Evening reflection',
    content: 'I noticed I was carrying a lot of tension today. Writing it down helped me let it soften.',
    mood: 'reflective',
    createdAt: '2026-07-27T21:30:00.000Z',
  },
]

export async function GET(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value
  if (!token) {
    return NextResponse.json({ journals: [] }, { status: 401 })
  }

  const decoded = verifyToken(token)
  if (!decoded?.userId) {
    return NextResponse.json({ journals: [] }, { status: 401 })
  }

  return NextResponse.json({ journals })
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
    const title = typeof body?.title === 'string' ? body.title.trim() : ''
    const content = typeof body?.content === 'string' ? body.content.trim() : ''
    const mood = typeof body?.mood === 'string' ? body.mood : 'neutral'

    if (!title || !content) {
      return NextResponse.json({ message: 'Please include a title and a journal entry.' }, { status: 400 })
    }

    const entry = {
      id: `entry-${Date.now()}`,
      title,
      content,
      mood,
      createdAt: new Date().toISOString(),
    }

    journals.unshift(entry)

    return NextResponse.json({ entry })
  } catch (error) {
    return NextResponse.json({ message: 'Unable to save your journal entry.' }, { status: 500 })
  }
}
