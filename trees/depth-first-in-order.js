function depthFirstInOrder(root, data = []) {
  if (root == null) {
    return null;
  }

  if (root.left != null) {
    depthFirstInOrder(root.left, data);
  }

  data.push(root.value);

  if (root.right != null) {
    depthFirstInOrder(root.right, data);
  }

  return data;
}

module.exports = depthFirstInOrder;
