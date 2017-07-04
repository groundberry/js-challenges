const getProductsOfAllIntsExceptAtIndex = require('./product-of-other-numbers');

describe('getProductsOfAllIntsExceptAtIndex', () => {
  it('when all elements in the array are positive', () => {
    expect(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4])).toEqual([84, 12, 28, 21]);
  });

  it('when there are negative numbers in the array', () => {
    expect(getProductsOfAllIntsExceptAtIndex([1, 7, -3, 4])).toEqual([-84, -12, 28, -21]);
  });

  it('returns null if the array is empty', () => {
    expect(getProductsOfAllIntsExceptAtIndex([])).toEqual(null);
  });
});
