import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ steps: [
    'stand-up-and-move',
    'open-a-window-or-door',
    'take-a-sip-of-water',
    'have-a-brief-stretch',
    'lower-the-noise-level',
    'put-one-hand-on-your-chest',
    'take-one-slow-breath',
    'look-at-one-calming-object',
    'choose-one-small-task',
    'allow-yourself-to-pause',
  ] })
}
