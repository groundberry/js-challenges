const mergeArrays = require('./merge-and-sort-arrays');

describe('mergeArrays', () => {
  it('returns one sorted array', () => {
    const arr1 = [3, 4, 6, 10, 11, 15];
    const arr2 = [1, 5, 8, 12, 14, 19];
    const sortedArr = [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19];
    expect(mergeArrays(arr1, arr2)).toEqual(sortedArr);
  });

  it('returns one sorted array', () => {
    const arr1 = [10, 4, 100, 1, 23];
    const arr2 = [];
    const sortedArr = [1, 4, 10, 23, 100];
    expect(mergeArrays(arr1, arr2)).toEqual(sortedArr);
  });

  it('returns one sorted array', () => {
    const arr1 = [10, 4, 4, 1, 23];
    const arr2 = [0, 0, 0];
    const sortedArr = [0, 1, 4, 10, 23];
    expect(mergeArrays(arr1, arr2)).toEqual(sortedArr);
  });
});
