import type { Metadata } from 'next'
import './globals.css'
import AuthGate from '@/components/AuthGate'
import PreferenceManager from '@/components/PreferenceManager'

export const metadata: Metadata = {
  title: 'TherapyHub - Mental Health & Wellbeing Community',
  description: 'A social platform for structured therapy workbooks, support groups, and personal growth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <PreferenceManager />
        <AuthGate>{children}</AuthGate>
      </body>
    </html>
  )
}
