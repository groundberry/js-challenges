/*
Factorial
Write a function that returns the factorial of a given number.

Example:

factorial(4);

returns 96;
*/

function factorial(num) {
  let total = 1;

  for (let i = num; i > 0; i -= 1) {
    total *= i;
  }
  return total;
}


module.exports = factorial;
