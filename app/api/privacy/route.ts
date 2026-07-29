import { NextResponse } from 'next/server'

import { getConsentItems } from '@/lib/privacy'

export async function GET() {
  return NextResponse.json({ consents: getConsentItems() })
}
