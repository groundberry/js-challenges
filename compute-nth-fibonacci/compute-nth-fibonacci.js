/*
Compute nth Fibonacci Number
Write a function fib() that a takes an integer nn and returns the nnth fibonacci ↴ number.
Let's say our fibonacci series is 0-indexed and starts with 0. So:

fib(0); // => 0
fib(1); // => 1
fib(2); // => 1
fib(3); // => 2
fib(4); // => 3
...
*/

function fib(num) {
  let prev2 = 0;
  let prev1 = 1;
  let curr;

  for (let i = 1; i < num; i += 1) {
    curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }

  return curr;
}

module.exports = fib;
