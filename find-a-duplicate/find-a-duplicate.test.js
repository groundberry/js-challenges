const findDuplicate = require('./find-a-duplicate');

describe('findDuplicate', () => {
  it('returns one of the duplicated numbers in the array', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 2, 9];
    expect(findDuplicate(arr)).toBe(2);
  });

  it('returns null if there are no repeated numbers in the array', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(findDuplicate(arr)).toBe(null);
  });
});
