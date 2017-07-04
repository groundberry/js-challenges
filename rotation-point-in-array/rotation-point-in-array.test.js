const findRotationPoint = require('./rotation-point-in-array');

describe('findRotationPoint', () => {
  it('returns the index where the array rotates', () => {
    const arr = [
      'ptolemaic',
      'retrograde',
      'supplant',
      'undulate',
      'xenoepist',
      'asymptote',
      'babka',
      'banoffee',
      'engender',
      'karpatka',
      'othellolagkage',
    ];
    expect(findRotationPoint(arr)).toEqual(5);
  });

  it('returns -1 if the array is sorted and does not have a rotation point', () => {
    const arr = [
      'asymptote',
      'babka',
      'banoffee',
      'engender',
      'karpatka',
      'othellolagkage',
      'ptolemaic',
      'retrograde',
      'supplant',
      'undulate',
      'xenoepist',
    ];
    expect(findRotationPoint(arr)).toEqual(-1);
  });

  it('returns -1 if the array is empty', () => {
    const arr = [];
    expect(findRotationPoint(arr)).toEqual(-1);
  });
});
