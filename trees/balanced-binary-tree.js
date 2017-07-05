/*
Balanced Binary Tree
Write a function to see if a binary tree is "superbalanced" (a new tree property
we just made up).
A tree is "superbalanced" if the difference between the depths of any two leaf
nodes is no greater than one.
*/
function treeDepth(root, depth = 0) {
  if (root == null) {
    return depth;
  }

  return Math.max(
    treeDepth(root.left, depth + 1),
    treeDepth(root.right, depth + 1),
  );
}

function isSuperbalanced(root) {
  if (root == null) {
    return false;
  }

  const depthLeft = treeDepth(root.left);
  const depthRight = treeDepth(root.right);
  return Math.abs(depthLeft - depthRight) <= 1;
}

module.exports = isSuperbalanced;
