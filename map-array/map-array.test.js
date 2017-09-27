const mapArray = require('./map-array');

describe('mapArray', () => {
  it('returns [2, 4, 6, 8] when the array received is [1, 2, 3, 4]', () => {
    function multiplyByTwo(elem) {
      return elem * 2;
    }
    expect(mapArray([1, 2, 3, 4], multiplyByTwo)).toEqual([2, 4, 6, 8]);
  });

  it('returns ["A", "B", "C"] when the array received is ["a", "b", "c"]', () => {
    function capitalizeAll(elem) {
      return elem.toUpperCase();
    }
    expect(mapArray(['a', 'b', 'c'], capitalizeAll)).toEqual(['A', 'B', 'C']);
  });
});
