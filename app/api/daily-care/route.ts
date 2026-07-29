import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ actions: [
    'morning-grounding',
    'hydration-cue',
    'stretch-break',
    'nutrition-check',
    'screen-break',
    'gratitude-note',
    'boundary-check',
    'sunset-pause',
    'sleep-prep',
    'self-kindness-note',
  ] })
}
