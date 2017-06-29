/*
Merge and Sort Arrays
Write a function to merge two arrays into one sorted array.
If there are repeated numbers return an array with unique numbers.

For example:

  const array1 = [10, 4, 4, 1, 23];
  const array2 = [0, 0, 0];

console.log(mergeArrays(array1, array2));
// logs [0, 1, 4, 10, 23]
*/

function sortingComparator(a, b) {
  return a - b;
}

function mergeArrays(arr1, arr2) {
  const newSortedArr = arr1.concat(arr2).sort(sortingComparator);
  const mixedArr = [];

  for (let i = 0; i < newSortedArr.length; i += 1) {
    if (newSortedArr[i] !== mixedArr[mixedArr.length - 1]) {
      mixedArr.push(newSortedArr[i]);
    }
  }
  return mixedArr;
}

module.exports = mergeArrays;
