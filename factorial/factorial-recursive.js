/*
Factorial (Recursively)
Write a function that returns the factorial of a given number using recursion.

Example:

factorial(4);

returns 96;
*/

function factorialRecursive(num) {
  if (num < 1) {
    return 1;
  }
  return num * factorialRecursive(num - 1);
}

module.exports = factorialRecursive;
