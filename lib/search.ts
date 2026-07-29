export interface SearchResult {
  id: string
  title: string
  type: 'community' | 'resource' | 'workbook' | 'person'
  description: string
}

export const searchResults: SearchResult[] = [
  {
    id: 'search-community-anxiety',
    title: 'Anxiety Warriors',
    type: 'community',
    description: 'A supportive space for people navigating anxiety and panic.',
  },
  {
    id: 'search-resource-crisis',
    title: 'Crisis support directory',
    type: 'resource',
    description: 'Region-aware support resources and emergency contacts.',
  },
  {
    id: 'search-workbook-grounding',
    title: 'Grounding Basics',
    type: 'workbook',
    description: 'A calm, guided workbook for grounding and emotional steadiness.',
  },
  {
    id: 'search-person-mentor',
    title: 'Support mentor',
    type: 'person',
    description: 'A peer support profile focused on gentle accountability.',
  },
]

export function searchContent(query: string) {
  const normalized = query.trim().toLowerCase()
  if (!normalized) {
    return searchResults
  }

  return searchResults.filter((result) => {
    return [result.title, result.description, result.type].some((value) => value.toLowerCase().includes(normalized))
  })
}
