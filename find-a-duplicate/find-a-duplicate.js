/*
Find a duplicate, Space Edition.
We have an array of integers, where:

The integers are in the range 1..n1..n
The array has a length of n+1n+1

It follows that our array has at least one integer which appears at least twice.
But it may have several duplicates, and each duplicate may appear more than twice.

Write a function which finds an integer that appears more than once in our array.
(If there are multiple duplicates, you only need to find one of them.)
*/

function findDuplicate(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return null;
}

module.exports = findDuplicate;
