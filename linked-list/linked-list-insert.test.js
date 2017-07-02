const linkedListToArray = require('./linked-list-to-array');
const linkedListInsert = require('./linked-list-insert');

describe('linkedListInsert', () => {
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

  it('inserts an element at the head', () => {
    expect(linkedListToArray(linkedListInsert(a, 'X', 0))).toEqual(['X', 'A', 'B', 'C', 'D']);
  });

  it('inserts an element in the midle', () => {
    expect(linkedListToArray(linkedListInsert(a, 'X', 2))).toEqual(['A', 'B', 'X', 'C', 'D']);
  });

  it('inserts an element at the end', () => {
    expect(linkedListToArray(linkedListInsert(a, 'X', 4))).toEqual(['A', 'B', 'C', 'D', 'X']);
  });
});
