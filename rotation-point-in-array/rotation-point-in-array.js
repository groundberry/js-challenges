/*
Find The Rotation Point In An Array
Given an array of words that are mostly alphabetical, except they start somewhere
in the middle of the alphabet, reach the end, and then start from the beginning
of the alphabet.
Write a function for finding the index of the "rotation point," which is where
I started working from the beginning of the dictionary.
*/

function findRotationPoint(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > arr[i + 1]) {
      return i + 1;
    }
  }

  return -1;
}

module.exports = findRotationPoint;
