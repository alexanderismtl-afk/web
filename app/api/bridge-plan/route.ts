import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ steps: [
    'take-one-slow-breath',
    'name-one-thing-you-can-handle',
    'choose-one-small-next-step',
    'ask-for-one-form-of-help',
    'use-a-grounding-tool',
    'protect-your-attention',
    'reduce-extra-demands',
    'keep-your-pace-gentle',
    'remember-that-this-is-temporary',
    'return-to-care-when-you-can',
  ] })
}
