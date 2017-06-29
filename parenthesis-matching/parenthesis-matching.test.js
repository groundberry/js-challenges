const matchParenthesis = require('./parenthesis-matching');

describe('matchParenthesis', () => {
  it('returns the corresponding closing parenthesis', () => {
    const str = 'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.';
    expect(matchParenthesis(str, 10)).toEqual(79);
  });

  it('returns -1 when there are no parenthesis on the string', () => {
    const str = 'No parenthesis here.';
    expect(matchParenthesis(str, 1)).toEqual(-1);
  });
});
