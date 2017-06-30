const factorialRecursive = require('./factorial-recursive');

describe('factorial', () => {
  it('returns 24 when the number is 4', () => {
    expect(factorialRecursive(4)).toEqual(24);
  });

  it('returns 1 when the number is 0', () => {
    expect(factorialRecursive(0)).toEqual(1);
  });
});
