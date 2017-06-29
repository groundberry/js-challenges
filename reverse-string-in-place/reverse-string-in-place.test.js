const reverseString = require('./reverse-string-in-place');

describe('reverseString', () => {
  it('returns the string reversed', () => {
    const str = 'Hello world';
    const reversedStr = 'dlrow olleH';
    expect(reverseString(str)).toEqual(reversedStr);
  });
});
