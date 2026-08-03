import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ choices: [
    'choose-a-quieter-room',
    'put-your-phone-on-silent',
    'step-away-from-the-trigger',
    'call-one-trusted-person',
    'drink-water-and-breathe',
    'leave-the-situation-briefly',
    'choose-a-slower-activity',
    'avoid-making-big-decisions-now',
    'keep-yourself-near-comfort',
    'return-when-you-feel-steadier',
  ] })
}
