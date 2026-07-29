export interface SupportCircle {
  id: string
  name: string
  focus: string
  description: string
  members: number
  privacy: 'private' | 'invite-only' | 'open'
  availability: string
}

export const supportCircles: SupportCircle[] = [
  {
    id: 'circle-breathing',
    name: 'Breathing & Grounding',
    focus: 'calm',
    description: 'A gentle space for short grounding practices and calming check-ins.',
    members: 142,
    privacy: 'private',
    availability: 'Weekly',
  },
  {
    id: 'circle-early-recovery',
    name: 'Early Recovery Support',
    focus: 'recovery',
    description: 'Low-pressure peer support for people building steadier routines after a difficult season.',
    members: 86,
    privacy: 'invite-only',
    availability: 'Twice weekly',
  },
  {
    id: 'circle-quiet-hours',
    name: 'Quiet Hours Circle',
    focus: 'rest',
    description: 'A slower-paced circle for reflection, rest, and gentle accountability.',
    members: 63,
    privacy: 'open',
    availability: 'Daily',
  },
]

export function getSupportCircles() {
  return supportCircles
}
