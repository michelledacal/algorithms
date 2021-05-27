// time: O(h)
// space: O(1)
// where h is the height of the tree

function findSuccessor(tree, node) {
  // if node.right exists, go to node.right and then go as far left
  if (node.right) return goLeft(node.right);
  // else
    // go up to parent and see if coming from left
      // if yes, return parent
      // if no, go up to parent and repeat
  return goUpToParent(node);

  function goLeft(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  function goUpToParent(node) {
    while (node.parent && node.parent.right === node) {
      node = node.parent;
    }
    return node.parent;
  }

}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}