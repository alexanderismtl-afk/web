'use client'

import { Heart, MessageCircle, Share2, Image as ImageIcon } from 'lucide-react'

export default function CreatePost() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-lg">
          👤
        </div>
        <input
          type="text"
          placeholder="What's on your mind?"
          className="flex-1 bg-secondary rounded-full px-4 py-2 outline-none text-sm hover:bg-secondary-dark transition"
        />
      </div>

      {/* Divider */}
      <div className="border-t border-secondary-dark pt-3 flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 text-gray-600 hover:bg-secondary p-2 rounded transition font-medium text-sm">
          <ImageIcon size={18} />
          <span className="hidden sm:inline">Photo</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 text-gray-600 hover:bg-secondary p-2 rounded transition font-medium text-sm">
          <MessageCircle size={18} />
          <span className="hidden sm:inline">Video</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 text-gray-600 hover:bg-secondary p-2 rounded transition font-medium text-sm">
          <Share2 size={18} />
          <span className="hidden sm:inline">Workbook</span>
        </button>
      </div>
    </div>
  )
}
