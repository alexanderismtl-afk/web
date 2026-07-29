import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ rituals: [
    'tea-and-quiet-breathing',
    'stretch-before-bed',
    'a-short-journal-entry',
    'lighting-a-candle-or-lamp',
    'a-warm-shower',
    'a-slow-walk-outside',
    'a-favorite-playlist',
    'a-brief-body-scan',
    'a-simple-gratitude-note',
    'a-no-pressure-reset',
  ] })
}
