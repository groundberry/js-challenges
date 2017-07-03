const searchNum = require('./binary-search-sorted-array');

describe('searchNum', () => {
  it('finds the element when it is in the second half of the array', () => {
    const arr = [0, 1, 2, 3];
    expect(searchNum(arr, 2)).toEqual(2);
  });

  it('finds the element when it is in the first half of the array', () => {
    const arr = [0, 1, 2, 3];
    expect(searchNum(arr, 1)).toEqual(1);
  });

  it('finds the element when it is in the middle the array', () => {
    const arr = ['A', 'B', 'C', 'D', 'E'];
    expect(searchNum(arr, 'C')).toEqual(2);
  });

  it('finds the element when it is in the second half of the array', () => {
    const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    expect(searchNum(arr, 'I')).toEqual(8);
  });

  it('finds the element when it is the only element in the array', () => {
    const arr = ['A'];
    expect(searchNum(arr, 'A')).toEqual(0);
  });

  it('returns -1 when the element is not in the array', () => {
    const arr = ['A', 'B', 'C', 'D', 'E'];
    expect(searchNum(arr, 'F')).toEqual(-1);
  });

  it('returns -1 when the array is empty', () => {
    const arr = [];
    expect(searchNum(arr, 'F')).toEqual(-1);
  });
});
