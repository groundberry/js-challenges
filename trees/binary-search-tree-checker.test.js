const isBinarySearchTree = require('./binary-search-tree-checker');

describe('isBinarySearchTree', () => {
  it('returns true if a tree with three nodes is a binary search tree', () => {
    const b = { value: 1, left: null, right: null };
    const c = { value: 3, left: null, right: null };
    const a = { value: 2, left: b, right: c };

    expect(isBinarySearchTree(a)).toEqual(true);
  });

  it('returns true if the tree with seven nodes is a binary search tree', () => {
    const d = { value: 1, left: null, right: null };
    const e = { value: 4, left: null, right: null };
    const f = { value: 5, left: null, right: null };
    const g = { value: 7, left: null, right: null };
    const b = { value: 2, left: d, right: e };
    const c = { value: 6, left: f, right: g };
    const a = { value: 3, left: b, right: c };

    expect(isBinarySearchTree(a)).toEqual(true);
  });

  it('returns true if the tree with six nodes is a binary search tree', () => {
    const d = { value: 1, left: null, right: null };
    const e = { value: 4, left: null, right: null };
    const f = { value: 5, left: null, right: null };
    const b = { value: 2, left: d, right: e };
    const c = { value: 6, left: f, right: null };
    const a = { value: 3, left: b, right: c };

    expect(isBinarySearchTree(a)).toEqual(true);
  });

  it('returns false if the tree is not a binary search tree', () => {
    const b = { value: 1, left: null, right: null };
    const c = { value: 3, left: null, right: null };
    const a = { value: 4, left: b, right: c };

    expect(isBinarySearchTree(a)).toEqual(false);
  });

  it('returns false if the tree with seven nodes is not  binary search tree', () => {
    const d = { value: 1, left: null, right: null };
    const e = { value: 4, left: null, right: null };
    const f = { value: 6, left: null, right: null };
    const g = { value: 7, left: null, right: null };
    const b = { value: 2, left: d, right: e };
    const c = { value: 5, left: f, right: g };
    const a = { value: 3, left: b, right: c };

    expect(isBinarySearchTree(a)).toEqual(false);
  });
});
