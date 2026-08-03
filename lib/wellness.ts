export interface WellnessCheckin {
  id: string
  title: string
  prompt: string
  mood: string
  createdAt: string
}

export const wellnessCheckins: WellnessCheckin[] = [
  {
    id: 'checkin-1',
    title: 'Evening reset',
    prompt: 'What helped you feel a little more grounded tonight?',
    mood: 'steady',
    createdAt: '2026-07-28T20:00:00.000Z',
  },
  {
    id: 'checkin-2',
    title: 'Midday pause',
    prompt: 'What felt supportive in the last few hours?',
    mood: 'reflective',
    createdAt: '2026-07-28T13:00:00.000Z',
  },
]

export function getWellnessCheckins() {
  return wellnessCheckins
}
