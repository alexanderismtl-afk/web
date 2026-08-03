export interface AdminMetric {
  id: string
  label: string
  value: string
  hint: string
}

export const adminMetrics: AdminMetric[] = [
  {
    id: 'staff-queue',
    label: 'Open review queue',
    value: '12',
    hint: 'Human-review items waiting for support staff.',
  },
  {
    id: 'support-circles',
    label: 'Active circles',
    value: '5',
    hint: 'Private and invite-only circles currently open.',
  },
  {
    id: 'resource-updates',
    label: 'Resource checks',
    value: '24',
    hint: 'Crisis and support resources recently reviewed.',
  },
]

export function getAdminMetrics() {
  return adminMetrics
}
