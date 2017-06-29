const fib = require('./compute-nth-fibonacci-recursive');

describe('fib', () => {
  it('returns the 4th Fibonacci number', () => {
    expect(fib(4)).toEqual(3);
  });

  it('returns the 4th Fibonacci number', () => {
    expect(fib(8)).toEqual(21);
  });

  it('returns the 4th Fibonacci number', () => {
    expect(fib(20)).toEqual(6765);
  });
});
