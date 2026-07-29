import { NextRequest, NextResponse } from 'next/server'

import { generateToken, hashPassword } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { ConflictError, ValidationError } from '@/lib/errors'
import { validateEmail, validateName, validatePassword } from '@/lib/validation'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''
    const name = typeof body?.name === 'string' ? body.name.trim() : ''
    const password = typeof body?.password === 'string' ? body.password : ''

    if (!validateEmail(email)) {
      throw new ValidationError('Please enter a valid email address.')
    }

    if (!validateName(name)) {
      throw new ValidationError('Please enter a name between 2 and 50 characters.')
    }

    if (!validatePassword(password)) {
      throw new ValidationError('Password must be at least 8 characters and include uppercase, lowercase, and a number.')
    }

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      throw new ConflictError('An account with this email already exists.')
    }

    const hashedPassword = await hashPassword(password)
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
    })

    const token = generateToken(user.id)
    const response = NextResponse.json({ user })

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
    if (error instanceof ValidationError || error instanceof ConflictError) {
      return NextResponse.json({ message: error.message }, { status: error.statusCode })
    }

    return NextResponse.json({ message: 'Unable to create your account right now.' }, { status: 500 })
  }
}
