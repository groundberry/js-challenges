const findLargestDifference = require('./find-largest-difference');

describe('findLargestDifference', () => {
  it('returns 11 when the function is called on [7, 8, 4, 9, 9, 15, 3, 1, 10]', () => {
    const arr = [7, 8, 4, 9, 9, 15, 3, 1, 10];
    expect(findLargestDifference(arr)).toEqual(11);
  });

  it('returns -1 when the function is called on [7]', () => {
    const arr = [7];
    expect(findLargestDifference(arr)).toEqual(-1);
  });

  it('returns -1 when the function is called on [7]', () => {
    const arr = [5, 4, 3, 2, 1];
    expect(findLargestDifference(arr)).toEqual(-1);
  });
});
