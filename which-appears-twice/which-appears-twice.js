/*
I have an array of n + 1n+1 numbers. Every number in the range 1..n1..n appears
once except for one number that appears twice.
Write a function for finding the number that appears twice. Optimize for runtime.
*/

function findRepeatedNumber(arr) {
  const objectOfNumbers = {};

  for (let i = 0; i < arr.length; i += 1) {
    if (objectOfNumbers[arr[i]] === 1) {
      return arr[i];
    }
    objectOfNumbers[arr[i]] = 1;
  }
  return -1;
}

module.exports = findRepeatedNumber;
