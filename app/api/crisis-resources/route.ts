import { NextResponse } from 'next/server'

import { filterResources } from '@/lib/crisisResources'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const region = searchParams.get('region') || undefined
  const language = searchParams.get('language') || undefined

  return NextResponse.json({ resources: filterResources({ region, language }) })
}
