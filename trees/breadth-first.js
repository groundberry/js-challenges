function breadthFirst(root) {
  const queue = [root];
  const result = [];

  if (root == null) {
    return [];
  }

  while (queue.length !== 0) {
    const current = queue.shift();

    if (current.left != null) {
      queue.push(current.left);
    }

    if (current.right != null) {
      queue.push(current.right);
    }

    result.push(current.value);
  }

  return result;
}

module.exports = breadthFirst;
