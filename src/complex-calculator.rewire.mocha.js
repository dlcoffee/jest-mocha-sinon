const assert = require('assert')
const rewire = require('rewire')
const sinon = require('sinon')

const complexCalculator = rewire('./complex-calculator')

describe('complexCalculator (rewire)', () => {
  it('calculates something complex', () => {
    const sumStub = sinon.stub().returns(42)
    complexCalculator.__set__('sum', sumStub)

    assert.equal(complexCalculator(1, 2), 42)
    assert.equal(sumStub.withArgs(1, 2).callCount, 1)
  })
})
