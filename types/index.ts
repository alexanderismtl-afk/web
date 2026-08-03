export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  bio?: string
  role: string
  createdAt: Date
  updatedAt: Date
}

export interface Post {
  id: string
  content: string
  authorId: string
  author?: User
  workbookId?: string
  createdAt: Date
  updatedAt: Date
  _count?: {
    comments: number
    likes: number
  }
}

export interface Workbook {
  id: string
  title: string
  description: string
  creatorId: string
  image?: string
  category: string
  sessions: number
  duration: string
  rating: number
  tags: string[]
}

export interface Community {
  id: string
  name: string
  description: string
  icon?: string
  category: string
  createdAt: Date
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
