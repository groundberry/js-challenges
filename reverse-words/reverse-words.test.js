const reverseWords = require('./reverse-words');

describe('reverseWords', () => {
  it('returns the message with the words in reversed order', () => {
    const str = 'find you will pain only go you recordings security the into if';
    const reversedMessage = 'if into the security recordings you go only pain will you find';
    expect(reverseWords(str)).toEqual(reversedMessage);
  });

  it('returns the message with the words in reversed order', () => {
    const str = 'you are working on a secret team solving coded transmissions';
    const reversedMessage = 'transmissions coded solving team secret a on working are you';
    expect(reverseWords(str)).toEqual(reversedMessage);
  });
});
