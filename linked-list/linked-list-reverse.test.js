const linkedListToArray = require('./linked-list-to-array');
const linkedListReverse = require('./linked-list-reverse');

const d = { value: 'D', next: null };
const c = { value: 'C', next: d };
const b = { value: 'B', next: c };
const a = { value: 'A', next: b };

describe('linkedListReverse', () => {
  it('reverses a given linked list', () => {
    expect(linkedListToArray(linkedListReverse(a))).toEqual(['D', 'C', 'B', 'A']);
  });

  it('returns null when given null', () => {
    expect(linkedListReverse(null)).toBe(null);
  });
});
