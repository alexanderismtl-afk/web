import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ prompts: [
    'how-are-you-feeling-right-now',
    'what-feels-heavy-today',
    'what-helped-you-recently',
    'what-do-you-need-next',
    'where-do-you-need-gentleness',
    'what-can-be-simplified',
    'what-deserves-patience',
    'what-feels-safe-enough',
    'what-do-you-want-to-remember',
    'what-can-wait',
  ] })
}
