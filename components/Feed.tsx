'use client'

import CreatePost from './CreatePost'
import PostCard from './PostCard'

export default function Feed() {
  const posts = [
    {
      id: 1,
      author: 'Dr. Sarah Chen',
      role: 'Therapist',
      avatar: '👩‍⚕️',
      content: 'Just launched a new workbook on managing perfectionism. Session 1 focuses on recognizing perfectionist patterns. Check it out!',
      workbook: 'Managing Perfectionism: 6-Session Program',
      timestamp: '2 hours ago',
      likes: 234,
      comments: 18,
    },
    {
      id: 2,
      author: 'Alex Jordan',
      role: 'Community Member',
      avatar: '😊',
      content: 'Completed Session 3 of the Anxiety Management workbook today. The breathing exercises really helped during my panic attack this afternoon.',
      timestamp: '4 hours ago',
      likes: 89,
      comments: 12,
    },
    {
      id: 3,
      author: 'Wellness Group',
      role: 'Organization',
      avatar: '🏥',
      content: 'New research shows that structured workbooks combined with community support improve outcomes by 40%. We\'re committed to making these resources accessible to everyone.',
      timestamp: '1 day ago',
      likes: 456,
      comments: 52,
    },
  ]

  return (
    <div className="w-full">
      <CreatePost />
      <div className="space-y-4 mt-4 pb-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
