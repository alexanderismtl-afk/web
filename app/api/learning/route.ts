import { NextResponse } from 'next/server'

import { getLearningModules } from '@/lib/learning'

export async function GET() {
  return NextResponse.json({ modules: getLearningModules() })
}
