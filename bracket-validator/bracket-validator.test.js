const validateBrackets = require('./bracket-validator');

describe('validateBrackets', () => {
  it('returns true when the brackets match', () => {
    const str = 'if(x>0) { arr[i] * (i + 1) }';
    expect(validateBrackets(str)).toBe(true);
  });

  it('returns false when the brackets are off', () => {
    const str = 'if(x>0)) { arr[[i] * (i + 1) }}';
    expect(validateBrackets(str)).toBe(false);
  });

  it('returns false when the brackets are off', () => {
    const str = 'if(x[>0)) { arr[[i] * ([i + 1)] }}';
    expect(validateBrackets(str)).toBe(false);
  });
});
