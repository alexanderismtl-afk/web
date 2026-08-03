import { NextRequest, NextResponse } from 'next/server'

const workbooks = [
  {
    id: 'workbook-anxiety',
    title: 'Managing Anxiety: 6-Session CBT Program',
    creator: 'Dr. Sarah Chen',
    description: 'Learn evidence-based cognitive behavioral therapy techniques to manage anxiety symptoms and build resilience.',
    sessions: 6,
    duration: '4-6 weeks',
    enrollees: 1240,
    rating: 4.8,
    image: '😰',
    tags: ['Anxiety', 'CBT', 'Mental Health'],
    category: 'Self-guided wellness content',
  },
  {
    id: 'workbook-grief',
    title: 'Grief & Loss Support Group Workbook',
    creator: 'Wellness Collective',
    description: 'Navigate the grieving process with compassionate guidance and reflection exercises designed for emotional healing.',
    sessions: 8,
    duration: '8 weeks',
    enrollees: 890,
    rating: 4.9,
    image: '💔',
    tags: ['Grief', 'Support', 'Healing'],
    category: 'Peer-support material',
  },
  {
    id: 'workbook-mindfulness',
    title: 'Mindfulness & Meditation: Daily Practice',
    creator: 'Calm Mind Institute',
    description: 'Develop a sustainable mindfulness practice with guided sessions and worksheets for daily integration.',
    sessions: 12,
    duration: '12 weeks',
    enrollees: 2100,
    rating: 4.7,
    image: '🧘',
    tags: ['Mindfulness', 'Meditation', 'Wellness'],
    category: 'General education',
  },
  {
    id: 'workbook-perfectionism',
    title: 'Perfectionism Recovery Program',
    creator: 'Dr. Marcus Johnson',
    description: 'Break free from perfectionist patterns and build self-compassion with practical cognitive restructuring tools.',
    sessions: 6,
    duration: '5-7 weeks',
    enrollees: 650,
    rating: 4.6,
    image: '✨',
    tags: ['Perfectionism', 'Self-Compassion', 'CBT'],
    category: 'Self-guided wellness content',
  },
]

export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get('search')?.toLowerCase() || ''

  const filtered = workbooks.filter((workbook) => {
    if (!search) return true
    return (
      workbook.title.toLowerCase().includes(search) ||
      workbook.tags.some((tag) => tag.toLowerCase().includes(search)) ||
      workbook.category.toLowerCase().includes(search)
    )
  })

  return NextResponse.json({ workbooks: filtered })
}
