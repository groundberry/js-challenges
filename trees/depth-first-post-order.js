function depthFirstPostOrder(root, data = []) {
  if (root == null) {
    return null;
  }

  if (root.left != null) {
    depthFirstPostOrder(root.left, data);
  }

  if (root.right != null) {
    depthFirstPostOrder(root.right, data);
  }

  data.push(root.value);

  return data;
}

module.exports = depthFirstPostOrder;
