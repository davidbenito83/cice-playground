import { PrimeNumbersFactorer } from './primer-numbers'

describe('DecomposePrimeNumbers', () => {
  it('should factor a number into prime numbers', () => {
    const given = 6
    const primeNumbersFactorer = new PrimeNumbersFactorer()

    const actual = primeNumbersFactorer.factor(given)

    expect(actual).toEqual([2, 3])
  })

  it('should factor a number into prime numbers with non sequential values', () => {
    const given = 10
    const primeNumbersFactorer = new PrimeNumbersFactorer()

    const actual = primeNumbersFactorer.factor(given)

    expect(actual).toEqual([2, 5])
  })

  it('should factor a number into prime numbers with more than 2 primes', () => {
    const given = 70
    const primeNumbersFactorer = new PrimeNumbersFactorer()

    const actual = primeNumbersFactorer.factor(given)

    expect(actual).toEqual([2, 5, 7])
  })
})