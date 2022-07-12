const fizzbuzz  = require('./index')

describe('fizzbuzz()', () => {
    it('retuen fizzbuzz for multiples of 3 and 5', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz');
        expect(fizzbuzz(30)).toBe('fizzbuzz');
    })
    it('returns the given number for multiples of neither 3 nor 5', () => {
        expect(fizzbuzz(1)).toBe('1');
        expect(fizzbuzz(22)).toBe('22');
      });
})