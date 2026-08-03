import { NextResponse } from 'next/server'

import { getResourceHubItems } from '@/lib/resourceHub'

export async function GET() {
  return NextResponse.json({ items: getResourceHubItems() })
}
