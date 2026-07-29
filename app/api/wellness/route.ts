import { NextResponse } from 'next/server'

import { getWellnessCheckins } from '@/lib/wellness'

export async function GET() {
  return NextResponse.json({ checkins: getWellnessCheckins() })
}
