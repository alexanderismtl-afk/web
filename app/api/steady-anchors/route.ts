import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ anchors: [
    'a-familiar-blanket',
    'a-favorite-mug',
    'a-trusted-playlist',
    'a-warm-light',
    'a-steady-chair',
    'a-grounded-routine',
    'a-simple-meal',
    'a-calming-object',
    'a-nearby-friend',
    'a-quiet-corner',
  ] })
}
