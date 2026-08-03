import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ steps: [
    'name-the-current-stressor',
    'reduce-stimulation',
    'move-to-a-safer-space',
    'choose-one-calming-action',
    'keep-the-next-step-small',
    'ask-for-support-if-needed',
    'avoid-making-major-decisions',
    'stay-near-familiar-comforts',
    'take-a-slower-pace',
    'return-to-the-plan-later',
  ] })
}
