/*
Binary Search Tree Checker
Write a function to check that a binary tree is a valid binary search tree is a
valid binary search tree.
*/

function isBinarySearchTree(root) {
  if (root == null) {
    return false;
  }

  if (
    (root.left != null && root.value < root.left.value) ||
    (root.right != null && root.value > root.right.value)
  ) {
    return false;
  }

  let result = true;

  if (root.left != null) {
    result = result && isBinarySearchTree(root.left);
  }

  if (root.right != null) {
    result = result && isBinarySearchTree(root.right);
  }

  return result;
}

module.exports = isBinarySearchTree;
