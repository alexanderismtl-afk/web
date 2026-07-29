import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ zones: [
    'high-energy',
    'steady-energy',
    'low-energy',
    'overloaded',
    'resting',
    'recovering',
    'needs-comfort',
    'needs-space',
    'needs-support',
    'needs-joy',
  ] })
}
