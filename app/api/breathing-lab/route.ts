import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ patterns: [
    'inhale-for-four',
    'exhale-for-six',
    'repeat-three-times',
    'try-a-longer-exhale',
    'count-softly-to-yourself',
    'let-the-breath-be-easy',
    'notice-the-body-relaxing',
    'keep-it-gentle-and-unforced',
    'pause-between-rounds',
    'come-back-to-the-present',
  ] })
}
