export interface ConsentItem {
  id: string
  title: string
  description: string
  granted: boolean
}

export const consentItems: ConsentItem[] = [
  {
    id: 'consent-support-messages',
    title: 'Support reminders',
    description: 'Allow optional reminders for wellness tools and gentle check-ins.',
    granted: true,
  },
  {
    id: 'consent-analytics',
    title: 'Usage insights',
    description: 'Help improve the platform with anonymous product insights.',
    granted: false,
  },
]

export function getConsentItems() {
  return consentItems
}
