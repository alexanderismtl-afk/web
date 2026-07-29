import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ steps: [
    'pause-and-lower-the-pace',
    'choose-one-small-task-only',
    'set-a-gentle-timer',
    'drink-something-warm',
    'move-your-body-a-little',
    'let-yourself-rest',
    'text-or-call-one-safe-person',
    'use-one-calming-tool',
    'take-a-short-break',
    'finish-by-noting-one-win',
  ] })
}
