import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ steps: [
    'take-a-breath-before-rejoining',
    'choose-one-simple-task',
    'set-a-gentle-expectation',
    'mute-unnecessary-noise',
    're-enter-slowly',
    'keep-your-pace-humane',
    'avoid-overcommitting',
    'notice-what-supports-you',
    'take-one-pause-if-needed',
    'return-to-care-after-the-task',
  ] })
}
