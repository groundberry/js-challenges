const reduceArray = require('./reduce-array');

describe('reduceArray', () => {
  it('returns 10 when called on [1, 2, 3, 4]', () => {
    function addAll(memo, elem) {
      return memo + elem;
    }

    expect(reduceArray([1, 2, 3, 4], addAll, 0)).toEqual(10);
  });

  it('returns 24 when called on [1, 2, 3, 4]', () => {
    function multiplyAll(memo, elem) {
      return memo * elem;
    }

    expect(reduceArray([1, 2, 3, 4], multiplyAll, 1)).toEqual(24);
  });

  it('returns "concat" when called on ["c", "o", "n", "c", "a", "t"]', () => {
    function concatAll(memo, elem) {
      return memo.concat(elem);
    }

    expect(reduceArray(['c', 'o', 'n', 'c', 'a', 't'], concatAll, '')).toEqual('concat');
  });
});
