import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ practices: [
    'name-five-things-you-can-see',
    'notice-your-feet-on-the-floor',
    'unclench-your-jaw',
    'take-one-slow-breath',
    'touch-a-steady-object',
    'look-out-a-window',
    'lower-your-shoulders',
    'count-three-calming-sounds',
    'sip-water-slowly',
    'say-one-kind-sentence-to-yourself',
  ] })
}
