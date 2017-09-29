// Given an array of integers, find the largest difference between two elements.
// The element of lesser value must come before the greater element.

function findLargestDifference(arr) {
  let largestDifference = 0;
  let lowerElement = arr[0];

  if (arr.length < 2 || largestDifference <= 0) {
    largestDifference = -1;
  }

  for (let i = 0; i < arr.length; i += 1) {
    if ((lowerElement < arr[i]) && (arr[i] - lowerElement > largestDifference)) {
      largestDifference = arr[i] - lowerElement;
    } else if (lowerElement > arr[i]) {
      lowerElement = arr[i];
    }
  }

  return largestDifference;
}

module.exports = findLargestDifference;
