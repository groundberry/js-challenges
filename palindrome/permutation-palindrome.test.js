const permutationPalindrome = require('./permutation-palindrome');


describe('permutationPalindrome', () => {
  it('returns true when there are two even letters and one odd', () => {
    expect(permutationPalindrome('civic')).toBe(true);
  });

  it('returns true when there are two even letters and one odd', () => {
    expect(permutationPalindrome('ivicc')).toBe(true);
  });

  it('returns false when there are one even letter and three odd', () => {
    expect(permutationPalindrome('civil')).toBe(false);
  });

  it('returns false when there are one even letter and three odd', () => {
    expect(permutationPalindrome('livci')).toBe(false);
  });

  it('returns false when there are two odd letters', () => {
    expect(permutationPalindrome('oooi')).toBe(false);
  });
});
