const test = require('node:test')
const assert = require('node:assert/strict')

const { filterResources } = require('../lib/crisisResources.js')

test('filters crisis resources by region and language', () => {
  const results = filterResources({ region: 'Quebec', language: 'fr' })

  assert.equal(results.length, 1)
  assert.equal(results[0].name, 'Tel-Aide')
})

test('returns a fallback list when no filters are provided', () => {
  const results = filterResources({})

  assert.ok(results.length >= 3)
})
