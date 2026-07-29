import { NextRequest, NextResponse } from 'next/server'

import { verifyToken } from '@/lib/auth'

export async function GET(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value
  if (!token) {
    return NextResponse.json({ preferences: { language: 'en', reducedMotion: false, highContrast: false } }, { status: 401 })
  }

  const decoded = verifyToken(token)
  if (!decoded?.userId) {
    return NextResponse.json({ preferences: { language: 'en', reducedMotion: false, highContrast: false } }, { status: 401 })
  }

  return NextResponse.json({
    preferences: {
      language: 'en',
      reducedMotion: false,
      highContrast: false,
    },
  })
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
    const preferences = {
      language: typeof body?.language === 'string' ? body.language : 'en',
      reducedMotion: Boolean(body?.reducedMotion),
      highContrast: Boolean(body?.highContrast),
    }

    return NextResponse.json({ preferences })
  } catch (error) {
    return NextResponse.json({ message: 'Unable to update preferences.' }, { status: 500 })
  }
}
