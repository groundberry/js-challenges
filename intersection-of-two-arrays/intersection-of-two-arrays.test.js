const findIntersection = require('./intersection-of-two-arrays');

describe('findIntersection', () => {
  it('returns [1, 2] when the function is called on [2, 2, 4, 1] and [1, 2, 0, 2]', () => {
    const array1 = [2, 2, 4, 1];
    const array2 = [1, 2, 0, 2];
    expect(findIntersection(array1, array2)).toEqual([1, 2]);
  });

  it('returns [] when the function is called on [2, 4, 1] and [5, 3, 0]', () => {
    const array1 = [2, 4, 1];
    const array2 = [5, 3, 0];
    expect(findIntersection(array1, array2)).toEqual([]);
  });
});
