'use client'

import { useEffect, useState } from 'react'
import CreatePost from './CreatePost'
import PostCard from './PostCard'

export default function Feed() {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    async function loadPosts() {
      const response = await fetch('/api/posts', { credentials: 'include' })
      if (!response.ok) return
      const data = await response.json()
      setPosts(data.posts || [])
    }

    loadPosts()
  }, [])

  return (
    <div className="w-full">
      <CreatePost onCreate={(post) => setPosts((current) => [post, ...current])} />
      <div className="space-y-4 mt-4 pb-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
