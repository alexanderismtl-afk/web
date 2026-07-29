import { NextRequest, NextResponse } from 'next/server'

import { verifyToken } from '@/lib/auth'
import { prisma } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value
    if (!token) {
      return NextResponse.json({ user: null }, { status: 401 })
    }

    const decoded = verifyToken(token)
    if (!decoded?.userId) {
      return NextResponse.json({ user: null }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        name: true,
        email: true,
        bio: true,
        preferredName: true,
        pronouns: true,
        language: true,
        accessibilityPreference: true,
        privacyMode: true,
        onboardingComplete: true,
        onboardingSelections: true,
        createdAt: true,
      },
    })

    return NextResponse.json({ user })
  } catch (error) {
    return NextResponse.json({ message: 'Unable to load your profile.' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
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

    const updatedUser = await prisma.user.update({
      where: { id: decoded.userId },
      data: {
        name: body?.name ?? undefined,
        bio: body?.bio ?? undefined,
        preferredName: body?.preferredName ?? undefined,
        pronouns: body?.pronouns ?? undefined,
        language: body?.language ?? undefined,
        accessibilityPreference: body?.accessibilityPreference ?? undefined,
        privacyMode: body?.privacyMode ?? undefined,
        onboardingComplete: body?.onboardingComplete ?? undefined,
        onboardingSelections: body?.onboardingSelections ?? undefined,
      },
      select: {
        id: true,
        name: true,
        email: true,
        bio: true,
        preferredName: true,
        pronouns: true,
        language: true,
        accessibilityPreference: true,
        privacyMode: true,
        onboardingComplete: true,
        onboardingSelections: true,
      },
    })

    return NextResponse.json({ user: updatedUser })
  } catch (error) {
    return NextResponse.json({ message: 'Unable to update your profile.' }, { status: 500 })
  }
}
