/*
Product of Other Numbers
You have an array of integers, and for each index you want to find the product
of every integer except the integer at that index.
Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of
integers and returns an array of the products.
*/

function multiplyElements(arr) {
  let product = 1;
  for (let j = 0; j < arr.length; j += 1) {
    product *= arr[j];
  }
  return product;
}

function getProductsOfAllIntsExceptAtIndex(arr) {
  const result = [];
  const product = multiplyElements(arr);
  let number;

  if (arr.length === 0) {
    return null;
  }

  for (let i = 0; i < arr.length; i += 1) {
    number = product / arr[i];
    result.push(number);
  }

  return result;
}

module.exports = getProductsOfAllIntsExceptAtIndex;
