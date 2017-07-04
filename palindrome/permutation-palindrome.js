/*
Permutation Palindrome
Write an efficient function that checks whether any permutation ↴ of an input
string is a palindrome.
You can assume the input string only contains lowercase letters.
*/

function permutationPalindrome(word) {
  const letters = {};
  let numberOfOddLetters = 0;

  for (let i = 0; i < word.length; i += 1) {
    const letter = word[i];

    if (letters[letter] == null) {
      letters[letter] = 1;
    } else {
      letters[letter] += 1;
    }
  }

  const keys = Object.keys(letters);

  for (let j = 0; j < keys.length; j += 1) {
    const key = keys[j];

    if (letters[key] % 2 !== 0) {
      numberOfOddLetters += 1;
    }

    if (numberOfOddLetters > 1) {
      return false;
    }
  }

  return true;
}

module.exports = permutationPalindrome;
