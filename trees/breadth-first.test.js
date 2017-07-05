const breadthFirst = require('./breadth-first');

describe('depthFirstSearch', () => {
  it('returns an array with elements in depth first order', () => {
    const d = { value: 1, left: null, right: null };
    const e = { value: 4, left: null, right: null };
    const f = { value: 5, left: null, right: null };
    const g = { value: 7, left: null, right: null };
    const b = { value: 2, left: d, right: e };
    const c = { value: 6, left: f, right: g };
    const a = { value: 3, left: b, right: c };
    expect(breadthFirst(a)).toEqual([3, 2, 6, 1, 4, 5, 7]);
  });

  it('returns an empty array when given null', () => {
    expect(breadthFirst(null)).toEqual([]);
  });
});
