const isPalindrome = require('./palindrome');

describe('isPalindrome', () => {
  it('returns true when the word is a palindrome with odd number of elements', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('returns false when the word is not a palindrome with odd number of elements', () => {
    expect(isPalindrome('cat')).toBe(false);
  });

  it('returns true when the word is a palindrome with even number of elements', () => {
    expect(isPalindrome('anna')).toBe(true);
  });

  it('returns false when the word is not a palindrome with even number of elements', () => {
    expect(isPalindrome('umbrella')).toBe(false);
  });
});
