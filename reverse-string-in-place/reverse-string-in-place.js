/*
Reverse String in Place
Write a function to reverse a string in-place.

Since strings in JavaScript are immutable ↴ , first convert the string into
an array of characters, do the in-place reversal on that array, and re-join
that array into a string before returning it. This isn't technically "in-place"
and the array of characters will cost O(n)O(n) additional space, but it's a
reasonable way to stay within the spirit of the challenge. If you're comfortable
coding in a language with mutable strings, that'd be even better!
*/

/* eslint-disable no-param-reassign */

function swap(arr, index1, index2) {
  const tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
  return arr;
}

function reverseString(str) {
  const arr = str.split('');
  const times = Math.floor(arr.length / 2);

  for (let i = 0; i < times; i += 1) {
    swap(arr, i, (arr.length - 1) - i);
  }

  return arr.join('');
}

module.exports = reverseString;
