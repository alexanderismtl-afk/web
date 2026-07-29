import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ guides: [
    'relax-your-jaw',
    'drop-your-shoulders',
    'unclench-your-hands',
    'feel-your-feet-on-the-ground',
    'take-one-slow-stretch',
    'notice-your-breathing',
    'let-the-body-be-supported',
    'soften-your-forehead',
    'breathe-into-the-belly',
    'return-to-a-steady-posture',
  ] })
}
