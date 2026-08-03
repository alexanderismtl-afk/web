import { NextResponse } from 'next/server'

import { logEvent } from '@/lib/logging'

export async function GET() {
  const payload = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    hasDatabaseUrl: Boolean(process.env.DATABASE_URL),
    hasJwtSecret: Boolean(process.env.NEXT_PUBLIC_JWT_SECRET || process.env.JWT_SECRET),
  }

  logEvent('healthcheck', payload)

  return NextResponse.json(payload, { status: 200 })
}
