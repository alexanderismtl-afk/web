export interface NotificationItem {
  id: string
  title: string
  body: string
  category: string
  time: string
}

export const notificationItems: NotificationItem[] = [
  {
    id: 'notify-1',
    title: 'New support circle available',
    body: 'A new quiet-hours circle is open for reflection and gentle check-ins.',
    category: 'community',
    time: '10 min ago',
  },
  {
    id: 'notify-2',
    title: 'Learning reminder',
    body: 'Your grounding practice is ready when you want it.',
    category: 'learning',
    time: '1 hour ago',
  },
]

export function getNotificationItems() {
  return notificationItems
}
