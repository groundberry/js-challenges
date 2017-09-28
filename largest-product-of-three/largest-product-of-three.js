// Given an array of integers, find the largest product yielded from three of the integers.
// We'll have two cases:
// Product1: the result of multiplying the first item, the second item,
// and the last item in a sorted array.
// Product2: the result of multiplying the last three items.

function sortIntegers(a, b) {
  return a - b;
}

function largestProductOfThree(unsortedArr) {
  const sortedArr = unsortedArr.sort(sortIntegers);
  let product1 = 1;
  let product2 = 1;
  const arrayLastItem = sortedArr.length - 1;

  product1 = sortedArr[arrayLastItem] * sortedArr[arrayLastItem - 1] * sortedArr[arrayLastItem - 2];

  product2 = sortedArr[0] * sortedArr[1] * sortedArr[arrayLastItem];

  if (product1 > product2) {
    return product1;
  }

  return product2;
}

module.exports = largestProductOfThree;
