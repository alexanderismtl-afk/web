import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ steps: [
    'take-one-small-action',
    'set-a-five-minute-timer',
    'choose-one-priority',
    'clear-one-small-surface',
    'open-one-window-of-light',
    'write-one-sentence',
    'stand-up-and-stretch',
    'drink-something-warm',
    'text-someone-you-trust',
    'stop-and-notice-what-helps',
  ] })
}
