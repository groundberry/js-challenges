/*
Bracket Validator
Write a braces/brackets/parentheses validator.
Let's say:

'(', '{', '[' are called "openers."
')', '}', ']' are called "closers."
Write an efficient function that tells us whether or not an input string's
openers and closers are properly nested.

Examples:

"{ [ ] ( ) }" should return true
"{ [ ( ] ) }" should return false
"{ [ }" should return false
*/

function getBrackets(str) {
  const brackets = ['(', '{', '[', ')', '}', ']'];
  const bracketsFound = [];

  for (let i = 0; i < str.length; i += 1) {
    if (brackets.includes(str[i])) {
      bracketsFound.push(str[i]);
    }
  }
  return bracketsFound;
}

function validateBrackets(str) {
  const arrOfBrackets = getBrackets(str);
  const bracketsMatchers = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  const stack = [arrOfBrackets[0]];
  let i = 0;

  while (i < arrOfBrackets.length) {
    const opositeToLastMatcherInStack = bracketsMatchers[stack[stack.length - 1]];

    if (arrOfBrackets[i + 1] !== opositeToLastMatcherInStack) {
      stack.push(arrOfBrackets[i + 1]);
    } else {
      stack.pop();
    }
    i += 1;
  }
  return stack.length === 0;
}

module.exports = validateBrackets;
