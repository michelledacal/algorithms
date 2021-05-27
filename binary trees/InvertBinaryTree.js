// time: O(n)
// space: O(d)
// where n is the number of nodes and d is the depth of the tree

function invertBinaryTree(tree) {
  // if left OR right exists, swap them
  // if left exists, repeat 
  // if right exists, repeat
  if (tree.left || tree.right) {
    const temp = tree.left;
    tree.left = tree.right;
    tree.right = temp;
  }
  if (tree.left) invertBinaryTree(tree.left);
  if (tree.right) invertBinaryTree(tree.right);
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}