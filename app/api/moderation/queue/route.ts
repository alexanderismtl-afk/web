import { NextResponse } from 'next/server'

import { getReviewItems } from '@/lib/moderationQueue'

export async function GET() {
  return NextResponse.json({ reviewItems: getReviewItems() })
}
