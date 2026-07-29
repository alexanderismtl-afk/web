import { NextResponse } from 'next/server'

import { getAdminMetrics } from '@/lib/admin'

export async function GET() {
  return NextResponse.json({ metrics: getAdminMetrics() })
}
