import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ options: [
    'soft-lighting',
    'no-notifications',
    'short-breathing-loop',
    'neutral-background',
    'single-task-focus',
    'no-pressure-to-reply',
    'low-stimulation-surroundings',
    'gentle-audio',
    'tiny-reset',
    're-entry-plan',
  ] })
}
