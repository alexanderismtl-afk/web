import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ steps: [
    'slow-down-after-intensity',
    'drink-water-and-rest',
    'notice-what-was-hard',
    'reconnect-with-your-body',
    'choose-one-grounding-practice',
    'let-yourself-be-unfinished',
    'reach-out-if-needed',
    'keep-tomorrow-simple',
    'protect-your-energy',
    'pause-before-judging-yourself',
  ] })
}
