export interface ResourceItem {
  id: string
  title: string
  category: string
  description: string
  link: string
}

export const resourceHubItems: ResourceItem[] = [
  {
    id: 'grounding-card',
    title: 'Grounding exercise card',
    category: 'Calming tool',
    description: 'A simple 60-second practice to help steady breath and body awareness.',
    link: '/learning',
  },
  {
    id: 'crisis-directory',
    title: 'Crisis support directory',
    category: 'Immediate support',
    description: 'Find region-appropriate support resources quickly and gently.',
    link: '/crisis-resources',
  },
  {
    id: 'journal-prompts',
    title: 'Private journal prompts',
    category: 'Reflection',
    description: 'Low-pressure reflection prompts for noticing support needs and progress.',
    link: '/journal',
  },
]

export function getResourceHubItems() {
  return resourceHubItems
}
