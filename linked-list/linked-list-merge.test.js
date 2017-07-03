const linkedListToArray = require('./linked-list-to-array');
const linkedListMerge = require('./linked-list-merge');

let g;
let e;
let c;
let a;
let h;
let f;
let d;
let b;

describe('linkedListMerge', () => {
  beforeEach(() => {
    g = { value: 7, next: null };
    e = { value: 5, next: g };
    c = { value: 3, next: e };
    a = { value: 1, next: c };

    h = { value: 8, next: null };
    f = { value: 6, next: h };
    d = { value: 4, next: f };
    b = { value: 2, next: d };
  });

  it('merges two sorted linked lists', () => {
    expect(linkedListToArray(linkedListMerge(a, b))).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('returns null when given null', () => {
    expect(linkedListMerge(null, null)).toBe(null);
  });

  it('returns the other linked list when one of the given list is null', () => {
    expect(linkedListToArray(linkedListMerge(null, b))).toEqual([2, 4, 6, 8]);
  });
});
