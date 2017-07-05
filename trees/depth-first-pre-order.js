function depthFirstPreOrder(root, data = []) {
  if (root == null) {
    return null;
  }

  data.push(root.value);

  if (root.left != null) {
    depthFirstPreOrder(root.left, data);
  }

  if (root.right != null) {
    depthFirstPreOrder(root.right, data);
  }

  return data;
}

module.exports = depthFirstPreOrder;
