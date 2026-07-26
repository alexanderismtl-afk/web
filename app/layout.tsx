import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
