import Link from 'next/link'

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
    overview: 'This workbook combines grounding practices, reflection prompts, and evidence-informed exercises to help users build coping routines at their own pace.',
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
    overview: 'A gentle, structured journey for processing grief and building support networks through reflective exercises and community connection.',
  },
]

export default function WorkbookDetailPage({ params }: { params: { id: string } }) {
  const workbook = workbooks.find((item) => item.id === params.id)

  if (!workbook) {
    return <div className="p-8 text-center">Workbook not found.</div>
  }

  return (
    <main className="min-h-screen bg-secondary p-6">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Learning content</p>
            <h1 className="text-3xl font-bold">{workbook.title}</h1>
          </div>
          <Link href="/workbooks" className="text-sm font-semibold text-primary hover:underline">
            Back to library
          </Link>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {workbook.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-sm text-gray-700">{tag}</span>
          ))}
        </div>

        <p className="mb-6 text-lg text-gray-700">{workbook.overview}</p>

        <div className="grid gap-4 rounded-2xl border border-secondary-dark bg-secondary/40 p-4 md:grid-cols-3">
          <div>
            <p className="text-sm text-gray-600">Creator</p>
            <p className="font-semibold">{workbook.creator}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Format</p>
            <p className="font-semibold">{workbook.category}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Length</p>
            <p className="font-semibold">{workbook.sessions} sessions • {workbook.duration}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
