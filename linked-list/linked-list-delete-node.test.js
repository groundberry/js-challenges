const linkedListToArray = require('./linked-list-to-array');
const linkedListDelete = require('./linked-list-delete-node');

describe('linkedListDelete', () => {
  let a;
  let b;
  let c;
  let d;

  beforeEach(() => {
    d = { value: 'D', next: null };
    c = { value: 'C', next: d };
    b = { value: 'B', next: c };
    a = { value: 'A', next: b };
  });

  it('deletes the first node of the list', () => {
    expect(linkedListToArray(linkedListDelete(a, a))).toEqual(['B', 'C', 'D']);
  });

  it('deletes a node in the middle of the list', () => {
    expect(linkedListToArray(linkedListDelete(a, b))).toEqual(['A', 'C', 'D']);
  });

  it('deletes the last node of the list', () => {
    expect(linkedListToArray(linkedListDelete(a, d))).toEqual(['A', 'B', 'C']);
  });

  it('returns [] when given null', () => {
    expect(linkedListDelete(null)).toEqual(null);
  });
});
