const linkedListCycle = require('./linked-list-cycle');

const cycleNodes = {
  a: { value: 'A' },
  b: { value: 'B' },
  c: { value: 'C' },
  d: { value: 'D' },
};

cycleNodes.a.next = cycleNodes.b;
cycleNodes.b.next = cycleNodes.c;
cycleNodes.c.next = cycleNodes.d;
cycleNodes.d.next = cycleNodes.b;

const noCycleNodes = {
  a: { value: 'A' },
  b: { value: 'A' },
  c: { value: 'C' },
  d: { value: 'D' },
};

noCycleNodes.a.next = noCycleNodes.b;
noCycleNodes.b.next = noCycleNodes.c;
noCycleNodes.c.next = noCycleNodes.d;

describe('linkedListCycle', () => {
  it('returns true if it finds a cycle', () => {
    expect(linkedListCycle(cycleNodes.a)).toBe(true);
  });

  it('returns false if it does not find a cycle', () => {
    expect(linkedListCycle(noCycleNodes.a)).toBe(false);
  });

  it('returns false when given null', () => {
    expect(linkedListCycle(null)).toBe(false);
  });
});
