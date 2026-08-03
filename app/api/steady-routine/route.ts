import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ steps: [
    'wake-slowly',
    'hydrate',
    'open-the-day-gently',
    'take-one-small-task',
    'pause-for-a-breath',
    'eat-something-grounding',
    'move-a-little',
    'check-in-with-yourself',
    'rest-before-overload',
    'end-the-day-with-care',
  ] })
}
