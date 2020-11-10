jest.mock('./sum')

const sum = require('./sum')
const complexCalculator = require('./complex-calculator')

describe('complexCalculator', () => {
  it('calculates something complex', () => {
    sum.mockReturnValue(42)

    expect(complexCalculator(1, 2)).toBe(42)
    expect(sum).toHaveBeenCalledWith(1, 2)
  })
})

