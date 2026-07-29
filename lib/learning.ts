export interface LearningModule {
  id: string
  title: string
  description: string
  duration: string
  tags: string[]
  level: 'Beginner' | 'Intermediate' | 'Advanced'
}

export const learningModules: LearningModule[] = [
  {
    id: 'grounding-basics',
    title: 'Grounding Basics',
    description: 'A calm, guided introduction to body-based grounding exercises for moments of overwhelm.',
    duration: '12 min',
    tags: ['grounding', 'stress', 'self-care'],
    level: 'Beginner',
  },
  {
    id: 'gentle-routine',
    title: 'Gentle Routine Builder',
    description: 'Create a low-pressure routine that supports sleep, energy, and emotional steadiness.',
    duration: '18 min',
    tags: ['routine', 'habits', 'recovery'],
    level: 'Beginner',
  },
  {
    id: 'self-compassion',
    title: 'Self-Compassion Practice',
    description: 'Explore a grounded practice for reducing harsh self-talk and increasing emotional steadiness.',
    duration: '15 min',
    tags: ['compassion', 'reflection', 'healing'],
    level: 'Intermediate',
  },
]

export function getLearningModules() {
  return learningModules
}
