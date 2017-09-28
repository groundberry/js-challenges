//  Being told that an unsorted array contains (n - 1) of n consecutive numbers
// (where the bounds are defined), find the missing number in O(n) time.

function sortItems(a, b) {
  return a - b;
}

function findMissingNumber(arr) {
  const sortedArr = arr.sort(sortItems);

  for (let i = 0; i < sortedArr.length; i += 1) {
    if ((sortedArr[i + 1] - sortedArr[i]) !== 1) {
      return sortedArr[i] + 1;
    }
  }

  return null;
}

module.exports = findMissingNumber;
