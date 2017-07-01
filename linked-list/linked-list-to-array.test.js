const linkedListToArray = require('./linked-list-to-array');

const d = { value: 'D', next: null };
const c = { value: 'C', next: d };
const b = { value: 'B', next: c };
const a = { value: 'A', next: b };

describe('linkedListToArray', () => {
  it('returns an array with the elements of a given linked list', () => {
    expect(linkedListToArray(a)).toEqual(['A', 'B', 'C', 'D']);
  });

  it('returns [] when given null', () => {
    expect(linkedListToArray(null)).toEqual([]);
  });
});
