/*
Reverse Words
Write a function reverseWords() that takes a string message and reverses the
order of the words in-place.
Since strings in JavaScript are immutable ↴ , we'll first convert the string
into an array of characters, do the in-place word reversal on that array,
and re-join that array into a string before returning it.
This isn't technically "in-place" and the array of characters will cost O(n)
additional space, but it's a reasonable way to stay within the spirit of
the challenge. If you're comfortable coding in a language with mutable strings,
that'd be even better!

For example:

  var message = 'find you will pain only go you recordings security the into if';

reverseWords(message);
// returns: 'if into the security recordings you go only pain will you find'

When writing your function, assume the message contains only letters and spaces,
and all words are separated by one space.
*/

/* eslint-disable no-param-reassign */

function swap(arr, pos1, pos2) {
  const tmp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = tmp;
  return arr.join('');
}

function reverseWords(message) {
  const arr = message.split(' ');
  const times = Math.floor(arr.length / 2);

  for (let i = 0; i < times; i += 1) {
    swap(arr, i, (arr.length - 1) - i);
  }
  return arr.join(' ');
}

module.exports = reverseWords;
