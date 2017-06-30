const factorial = require('./factorial');

describe('factorial', () => {
  it('returns 24 when the number is 4', () => {
    expect(factorial(4)).toEqual(24);
  });

  it('returns 1 when the number is 0', () => {
    expect(factorial(0)).toEqual(1);
  });
});
