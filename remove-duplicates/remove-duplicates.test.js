const removeDuplicates = require('./remove-duplicates');

describe('removeDuplicates', () => {
  it('returns [1, 2, 3, 5, 9, 8] when called on [1, 2, 3, 5, 1, 5, 9, 1, 2, 8]', () => {
    const arr = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
    expect(removeDuplicates(arr)).toEqual([1, 2, 3, 5, 9, 8]);
  });
});
