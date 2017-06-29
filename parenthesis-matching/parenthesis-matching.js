/*
Parenthesis Matching
"Sometimes (when I nest them (my parentheticals) too much
(like this (and this))) they get confusing."

Write a function that, given a sentence like the one above,
along with the position of an opening parenthesis, finds the corresponding
closing parenthesis.

Example: if the example string above is input with the number 10
(position of the first parenthesis), the output should be 79
(position of the last parenthesis).
*/

function matchParenthesis(str, position) {
  let counterStart = 0;
  let counterEnd = 0;

  for (let i = 0; i <= position; i += 1) {
    if (str[i] === '(') {
      counterStart += 1;
    }
  }

  for (let j = str.length - 1; j > 0; j -= 1) {
    if (str[j] === ')') {
      counterEnd += 1;
      if (counterEnd === counterStart) {
        return j;
      }
    }
  }

  return -1;
}

module.exports = matchParenthesis;
