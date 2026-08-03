import { NextRequest, NextResponse } from 'next/server'

import { verifyToken } from '@/lib/auth'

const communities = [
  {
    id: 'community-anxiety',
    name: 'Anxiety Warriors',
    description: 'A supportive community for people managing anxiety disorders and panic attacks.',
    members: 2340,
    posts: 584,
    icon: '😰',
    joined: true,
  },
  {
    id: 'community-grief',
    name: 'Grief & Healing',
    description: 'Safe space for processing loss and supporting each other through grief.',
    members: 1890,
    posts: 421,
    icon: '💔',
    joined: false,
  },
  {
    id: 'community-mindfulness',
    name: 'Mindfulness Daily',
    description: 'Share your meditation practice and mindfulness journey with like-minded people.',
    members: 5230,
    posts: 1203,
    icon: '🧘',
    joined: true,
  },
  {
    id: 'community-sleep',
    name: 'Sleep Better Community',
    description: 'Tips, support, and encouragement for overcoming sleep challenges.',
    members: 1650,
    posts: 389,
    icon: '😴',
    joined: false,
  },
  {
    id: 'community-compassion',
    name: 'Self-Compassion Circle',
    description: 'Learning to be kind to ourselves through shared experiences and practice.',
    members: 980,
    posts: 267,
    icon: '💝',
    joined: false,
  },
  {
    id: 'community-therapists',
    name: 'Therapists & Facilitators',
    description: 'Professional network for sharing best practices and supporting each other.',
    members: 340,
    posts: 156,
    icon: '👨‍⚕️',
    joined: true,
  },
]

export async function GET(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value
  const decoded = token ? verifyToken(token) : null

  if (!decoded?.userId) {
    return NextResponse.json({ communities })
  }

  return NextResponse.json({ communities })
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
    const communityId = typeof body?.communityId === 'string' ? body.communityId : ''
    const action = typeof body?.action === 'string' ? body.action : 'join'

    if (!communityId) {
      return NextResponse.json({ message: 'Community not found.' }, { status: 400 })
    }

    const community = communities.find((item) => item.id === communityId)
    if (!community) {
      return NextResponse.json({ message: 'Community not found.' }, { status: 404 })
    }

    community.joined = action === 'join'

    return NextResponse.json({ community })
  } catch (error) {
    return NextResponse.json({ message: 'Unable to update membership.' }, { status: 500 })
  }
}
