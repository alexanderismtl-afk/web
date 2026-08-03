'use client'

import { useState } from 'react'
import { MessageCircle, Share2, Image as ImageIcon } from 'lucide-react'

export default function CreatePost({ onCreate }: { onCreate?: (post: any) => void }) {
  const [content, setContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit() {
    if (!content.trim()) return

    setIsSubmitting(true)

    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ content }),
    })

    if (response.ok) {
      const data = await response.json()
      setContent('')
      onCreate?.(data.post)
    }

    setIsSubmitting(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-lg">
          👤
        </div>
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="What's on your mind?"
          className="flex-1 min-h-[44px] bg-secondary rounded-2xl px-4 py-2 outline-none text-sm"
        />
      </div>

      <div className="border-t border-secondary-dark pt-3 flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 text-gray-600 hover:bg-secondary p-2 rounded transition font-medium text-sm">
          <ImageIcon size={18} />
          <span className="hidden sm:inline">Photo</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 text-gray-600 hover:bg-secondary p-2 rounded transition font-medium text-sm">
          <MessageCircle size={18} />
          <span className="hidden sm:inline">Video</span>
        </button>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting || !content.trim()}
          className="flex-1 flex items-center justify-center gap-2 text-gray-600 hover:bg-secondary p-2 rounded transition font-medium text-sm disabled:opacity-60"
        >
          <Share2 size={18} />
          <span className="hidden sm:inline">{isSubmitting ? 'Posting...' : 'Post'}</span>
        </button>
      </div>
    </div>
  )
}
