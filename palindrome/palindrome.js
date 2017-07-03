function isPalindrome(word) {
  let start = 0;
  let end = word.length - 1;

  for (let i = 0; i < word.length; i += 1) {
    if (start >= end) {
      return true;
    }

    if (word[start] === word[end]) {
      start += 1;
      end -= 1;
    }
  }
  return false;
}

module.exports = isPalindrome;
