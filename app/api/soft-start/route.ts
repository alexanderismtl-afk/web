import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ actions: [
    'open-with-one-slow-breath',
    'choose-the-easiest-task',
    'set-a-tiny-goal',
    'dim-bright-distractions',
    'start-with-a-small-win',
    'leave-space-for-pauses',
    'keep-the-environment-simple',
    'avoid-unnecessary-pressure',
    'let-progress-be-imperfect',
    'close-with-a-gentle-note',
  ] })
}
