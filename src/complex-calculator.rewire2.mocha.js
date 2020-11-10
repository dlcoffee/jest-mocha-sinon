const assert = require('assert')

const complexCalculator = require('./complex-calculator')

describe('complexCalculator (no mocking)', () => {
  it('calculates something complex', () => {
    assert.equal(complexCalculator(1, 2), 3)
  })

  it('calculates _really_ something complex', () => {
    assert.equal(complexCalculator(5, -2), 3)
  })
})
