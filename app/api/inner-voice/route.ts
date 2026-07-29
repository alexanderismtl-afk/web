import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ notes: [
    'i-can-take-this-one-moment-at-a-time',
    'i-do-not-need-to-solve-everything-now',
    'my-pace-is-allowed-to-be-gentle',
    'i-can-ask-for-support',
    'i-can-pause-and-come-back',
    'i-am-learning-not-failing',
    'this-feeling-is-real-and-temporary',
    'i-can-make-space-for-care',
    'i-am-allowed-to-be-human',
    'i-can-begin-again-slowly',
  ] })
}
