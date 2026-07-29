import { NextRequest, NextResponse } from 'next/server'

import { comparePassword, generateToken } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { UnauthorizedError, ValidationError } from '@/lib/errors'
import { validateEmail } from '@/lib/validation'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''
    const password = typeof body?.password === 'string' ? body.password : ''

    if (!validateEmail(email)) {
      throw new ValidationError('Please enter a valid email address.')
    }

    if (!password) {
      throw new ValidationError('Please enter your password.')
    }

    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
        role: true,
        createdAt: true,
      },
    })

    if (!user) {
      throw new UnauthorizedError('No account was found for that email address.')
    }

    const isValidPassword = await comparePassword(password, user.password)
    if (!isValidPassword) {
      throw new UnauthorizedError('The password you entered is incorrect.')
    }

    const token = generateToken(user.id)
    const response = NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        createdAt: user.createdAt,
      },
    })

    response.cookies.set({
      name: 'auth-token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })

    return response
  } catch (error) {
    if (error instanceof ValidationError || error instanceof UnauthorizedError) {
      return NextResponse.json({ message: error.message }, { status: error.statusCode })
    }

    return NextResponse.json({ message: 'Unable to sign you in right now.' }, { status: 500 })
  }
}
