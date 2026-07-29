import { NextRequest, NextResponse } from 'next/server'

import { verifyToken } from '@/lib/auth'
import { prisma } from '@/lib/db'

interface PostAuthor {
  id: string
  name: string
  role: string
  avatar?: string | null
}

interface PostPayload {
  id: string
  content: string
  author: PostAuthor
  timestamp: string
  likes: number
  comments: number
  workbook?: string | null
}

const fallbackPosts: PostPayload[] = [
  {
    id: 'seed-1',
    content: 'I completed a breathing exercise this morning and it helped me feel a little steadier. Small steps still matter.',
    author: {
      id: 'seed-user-1',
      name: 'Alex Jordan',
      role: 'Community Member',
      avatar: '😊',
    },
    timestamp: 'Just now',
    likes: 12,
    comments: 3,
  },
  {
    id: 'seed-2',
    content: 'A new workbook about compassionate routines is available in the library. I would love to hear what helps others stay grounded.',
    author: {
      id: 'seed-user-2',
      name: 'Dr. Sarah Chen',
      role: 'Therapist',
      avatar: '👩‍⚕️',
    },
    timestamp: '20 minutes ago',
    likes: 27,
    comments: 8,
  },
]

function formatTimestamp(date: Date): string {
  const now = Date.now()
  const diffMs = now - date.getTime()
  const diffMinutes = Math.max(1, Math.floor(diffMs / 60000))

  if (diffMinutes < 60) return `${diffMinutes} min ago`

  const diffHours = Math.floor(diffMinutes / 60)
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`

  const diffDays = Math.floor(diffHours / 24)
  return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`
}

function normalizePost(post: any): PostPayload {
  return {
    id: post.id,
    content: post.content,
    author: {
      id: post.author?.id || 'unknown',
      name: post.author?.name || 'Anonymous',
      role: post.author?.role || 'Member',
      avatar: post.author?.avatar || '👤',
    },
    timestamp: formatTimestamp(post.createdAt ? new Date(post.createdAt) : new Date()),
    likes: typeof post.likes === 'number' ? post.likes : 0,
    comments: typeof post.comments === 'number' ? post.comments : 0,
    workbook: post.workbookId ? 'Shared workbook' : null,
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
      take: 20,
      include: {
        author: {
          select: {
            id: true,
            name: true,
            role: true,
            avatar: true,
          },
        },
      },
    })

    return NextResponse.json({ posts: posts.map(normalizePost) })
  } catch (error) {
    return NextResponse.json({ posts: fallbackPosts })
  }
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
    const content = typeof body?.content === 'string' ? body.content.trim() : ''

    if (!content) {
      return NextResponse.json({ message: 'Please add some content to your post.' }, { status: 400 })
    }

    const createdPost = await prisma.post.create({
      data: {
        content,
        authorId: decoded.userId,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            role: true,
            avatar: true,
          },
        },
      },
    })

    return NextResponse.json({ post: normalizePost(createdPost) })
  } catch (error) {
    return NextResponse.json({ post: null, message: 'Unable to create your post right now.' }, { status: 500 })
  }
}
