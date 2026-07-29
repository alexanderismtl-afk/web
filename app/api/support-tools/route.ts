import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ tools: [
    'quick-exit',
    'quiet-hours',
    'reminders',
    'habit-tracker',
    'mood-trends',
    'emergency-contacts',
    'help-center',
    'ai-reflection',
    'offline-sync',
    'download-center',
    'step-pacing',
    'breathing-cues',
    'sleep-support',
    'boundary-builder',
    'recovery-notes',
    'support-map',
    'crisis-plan',
    'reflection-library',
    'check-in-recap',
  ] })
}
