export interface ReviewItem {
  id: string
  title: string
  summary: string
  priority: 'high' | 'medium' | 'low'
  status: 'queued' | 'reviewing' | 'resolved'
}

export const reviewItems: ReviewItem[] = [
  {
    id: 'review-1',
    title: 'Potential harassment report',
    summary: 'A user flagged repeated unwanted contact in a community space.',
    priority: 'high',
    status: 'queued',
  },
  {
    id: 'review-2',
    title: 'Sensitive content notice',
    summary: 'A post was marked for review due to content warnings and community safety expectations.',
    priority: 'medium',
    status: 'reviewing',
  },
]

export function getReviewItems() {
  return reviewItems
}
