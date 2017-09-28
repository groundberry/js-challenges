const largestProductOfThree = require('./largest-product-of-three');

describe('largestProductOfThree', () => {
  it('returns 21000 when the function is called on [-10, 7, 29, 30, 5, -10, -70]', () => {
    const array = [-10, 7, 29, 30, 5, -10, -70];
    expect(largestProductOfThree(array)).toEqual(21000);
  });
});
