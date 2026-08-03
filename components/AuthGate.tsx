'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const publicPaths = ['/auth']

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [checked, setChecked] = useState(false)
  const [user, setUser] = useState<{ id: string; name: string; email: string } | null>(null)

  useEffect(() => {
    async function loadUser() {
      if (publicPaths.includes(pathname)) {
        setChecked(true)
        return
      }

      try {
        const response = await fetch('/api/auth/me', { credentials: 'include' })
        if (!response.ok) {
          router.replace(`/auth?next=${encodeURIComponent(pathname)}`)
          return
        }

        const data = await response.json()
        setUser(data.user)
      } finally {
        setChecked(true)
      }
    }

    loadUser()
  }, [pathname, router])

  if (!checked) return null

  if (!user && !publicPaths.includes(pathname)) {
    return null
  }

  return <>{children}</>
}
