'use client'

import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react'
import { useState } from 'react'

interface Post {
  id: number
  author: string
  role: string
  avatar: string
  content: string
  workbook?: string
  timestamp: string
  likes: number
  comments: number
}

export default function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-4 flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xl">
            {post.avatar}
          </div>
          <div>
            <p className="font-bold text-gray-900">{post.author}</p>
            <p className="text-sm text-gray-500">{post.role}</p>
            <p className="text-xs text-gray-400">{post.timestamp}</p>
          </div>
        </div>
        <button className="hover:bg-secondary p-2 rounded-full transition">
          <MoreHorizontal size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        <p className="text-gray-900 leading-relaxed">{post.content}</p>
        
        {post.workbook && (
          <div className="mt-3 p-3 bg-secondary rounded-lg border-l-4 border-primary">
            <p className="text-sm font-bold text-primary">{post.workbook}</p>
            <p className="text-xs text-gray-600 mt-1">6 sessions • 3-4 weeks</p>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="px-4 py-2 flex gap-4 text-sm text-gray-500 border-t border-secondary-dark">
        <span>{post.likes} Likes</span>
        <span>{post.comments} Comments</span>
      </div>

      {/* Actions */}
      <div className="px-4 py-2 flex gap-2 border-t border-secondary-dark">
        <button
          onClick={() => setLiked(!liked)}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded transition font-medium text-sm ${
            liked
              ? 'text-red-600 bg-red-50'
              : 'text-gray-600 hover:bg-secondary'
          }`}
        >
          <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
          <span className="hidden sm:inline">Like</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded hover:bg-secondary transition font-medium text-sm text-gray-600">
          <MessageCircle size={18} />
          <span className="hidden sm:inline">Comment</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded hover:bg-secondary transition font-medium text-sm text-gray-600">
          <Share size={18} />
          <span className="hidden sm:inline">Share</span>
        </button>
      </div>
    </div>
  )
}
