const assert = require('assert')
const proxyquire = require('proxyquire')
const sinon = require('sinon')

const sumStub = sinon.stub()
const complexCalculator = proxyquire('./complex-calculator', (
  { './sum': sumStub }
))

describe('complexCalculator (proxyquire)', () => {
  it('calculates something complex', () => {
    sumStub.returns(42)

    assert.equal(complexCalculator(1, 2), 42)
    assert.equal(sumStub.withArgs(1, 2).callCount, 1)
  })
})
