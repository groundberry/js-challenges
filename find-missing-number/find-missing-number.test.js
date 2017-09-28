const findMissingNumber = require('./find-missing-number');

describe('findMissingNumber', () => {
  it('returns 8 when the function is called on [2, 5, 1, 4, 9, 6, 3, 7]', () => {
    const unsortedArray = [2, 5, 1, 4, 9, 6, 3, 7];
    expect(findMissingNumber(unsortedArray)).toBe(8);
  });
});
