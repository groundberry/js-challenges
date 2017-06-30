const findRepeatedNumber = require('./which-appears-twice');

describe('findRepeatedNumber', () => {
  it('returns 6', () => {
    expect(findRepeatedNumber([2, 4, 6, 1, 45, 6, 3, 5])).toEqual(6);
  });

  it('returns 4', () => {
    expect(findRepeatedNumber([0, 1, 2, 3, 4, 4, 5, 6])).toEqual(4);
  });

  it('returns -1 when there are no repeated numbers in the array', () => {
    expect(findRepeatedNumber([10, 20, 30, 40])).toEqual(-1);
  });
});
