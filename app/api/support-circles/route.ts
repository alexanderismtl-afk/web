import { NextResponse } from 'next/server'

import { getSupportCircles } from '@/lib/supportCircles'

export async function GET() {
  return NextResponse.json({ circles: getSupportCircles() })
}
