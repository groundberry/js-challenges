const linkedListLength = require('./linked-list-length');

const d = { value: 'D', next: null };
const c = { value: 'C', next: d };
const b = { value: 'B', next: c };
const a = { value: 'A', next: b };

describe('linkedListLength', () => {
  it('returns the length of a given linked list', () => {
    expect(linkedListLength(a)).toEqual(4);
  });

  it('returns 0 if given null', () => {
    expect(linkedListLength(null)).toEqual(0);
  });
});
