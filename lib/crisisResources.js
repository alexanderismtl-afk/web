const resources = [
  {
    id: 'suicide-prevention-canada',
    name: 'Talk Suicide Canada',
    region: 'Canada',
    language: 'en',
    phone: '1-833-456-4566',
    category: 'crisis',
  },
  {
    id: 'tel-aide',
    name: 'Tel-Aide',
    region: 'Quebec',
    language: 'fr',
    phone: '1-800-263-2654',
    category: 'crisis',
  },
  {
    id: '988-usa',
    name: '988 Lifeline',
    region: 'United States',
    language: 'en',
    phone: '988',
    category: 'crisis',
  },
  {
    id: 'samaritans',
    name: 'Samaritans',
    region: 'United Kingdom',
    language: 'en',
    phone: '116 123',
    category: 'support',
  },
]

function filterResources({ region, language } = {}) {
  return resources.filter((resource) => {
    const matchesRegion = !region || resource.region.toLowerCase() === region.toLowerCase()
    const matchesLanguage = !language || resource.language.toLowerCase() === language.toLowerCase()
    return matchesRegion && matchesLanguage
  })
}

module.exports = { resources, filterResources }
