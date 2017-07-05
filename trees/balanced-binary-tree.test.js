const isSuperbalanced = require('./balanced-binary-tree');

describe('isSuperbalanced', () => {
  it('returns true if the tree with seven nodes is superbalanced', () => {
    const d = { value: 1, left: null, right: null };
    const e = { value: 4, left: null, right: null };
    const f = { value: 5, left: null, right: null };
    const g = { value: 7, left: null, right: null };
    const b = { value: 2, left: d, right: e };
    const c = { value: 6, left: f, right: g };
    const a = { value: 3, left: b, right: c };

    expect(isSuperbalanced(a)).toEqual(true);
  });

  it('returns false if the tree with seven nodes is not superbalanced', () => {
    const e = { value: 4, left: null, right: null };
    const f = { value: 5, left: null, right: null };
    const g = { value: 7, left: null, right: null };
    const c = { value: 6, left: null, right: null };
    const d = { value: 1, left: f, right: g };
    const b = { value: 2, left: d, right: e };
    const a = { value: 3, left: b, right: c };

    expect(isSuperbalanced(a)).toEqual(false);
  });

  it('returns true if the tree with six nodes is superbalanced', () => {
    const d = { value: 1, left: null, right: null };
    const e = { value: 4, left: null, right: null };
    const f = { value: 5, left: null, right: null };
    const b = { value: 2, left: d, right: e };
    const c = { value: 6, left: f, right: null };
    const a = { value: 3, left: b, right: c };

    expect(isSuperbalanced(a)).toEqual(true);
  });
});
