import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ notes: [
    'you-are-allowed-to-rest',
    'you-are-allowed-to-slow-down',
    'you-are-allowed-to-ask-for-help',
    'you-are-allowed-to-skip-the-extra-task',
    'you-are-allowed-to-stop-early',
    'you-are-allowed-to-be-unfinished',
    'you-are-allowed-to-protect-your-peace',
    'you-are-allowed-to-need-space',
    'you-are-allowed-to-take-your-time',
    'you-are-allowed-to-begin-again-later',
  ] })
}
