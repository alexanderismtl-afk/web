import { NextResponse } from 'next/server'

import { searchContent } from '@/lib/search'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q') || ''

  return NextResponse.json({ results: searchContent(query) })
}
