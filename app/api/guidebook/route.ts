import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ sections: [
    'start-gently',
    'use-one-support-tool-at-a-time',
    'keep-your-space-simple',
    'take-breaks-without-guilt',
    'ask-for-support-when-needed',
    'protect-your-energy',
    'notice-what-helps',
    'go-slow',
    'let-things-be-enough',
    'return-when-you-can',
  ] })
}
