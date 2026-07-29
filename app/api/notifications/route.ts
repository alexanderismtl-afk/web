import { NextResponse } from 'next/server'

import { getNotificationItems } from '@/lib/notifications'

export async function GET() {
  return NextResponse.json({ notifications: getNotificationItems() })
}
