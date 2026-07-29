import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ intervals: [
    'two-minute-reset',
    'five-minute-pause',
    'ten-minute-breathing-break',
    'quiet-reading-interval',
    'stretch-and-release-block',
    'slow-walk-window',
    'tea-and-recharge-break',
    'screen-free-moment',
    'soft-music-pause',
    'nighttime-wind-down',
  ] })
}
