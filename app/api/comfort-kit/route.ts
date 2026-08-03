import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ items: [
    'grounding-card',
    'water-reminder',
    'stretch-break',
    'warm-drink-cue',
    'low-light-mode',
    'soft-music-cue',
    'paper-journal-prompt',
    'quiet-playlist',
    'window-break',
    'gentle-reset',
  ] })
}
