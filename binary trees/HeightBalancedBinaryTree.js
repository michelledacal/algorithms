// time: O(n)
// space: O(h)
// where n is the number of nodes in the tree and h is the height of the tree

function heightBalancedBinaryTree(tree) {
  // need to check every node to see if it's balanced
  // helper function that returns [height, balanced]
  // go all the way to the bottom
    // no left or right -> return [0, true]
    // check if left and right branches have difference of at most 1 and they are balanced
      // if not, return [height, false]
      // if so, return [maxheight + 1, true]
  const [height, isBalanced] = heightBalancedHelper(tree);
  return isBalanced;

  function heightBalancedHelper(node, isBalanced) {
    if (!node) return [0, true];
    const [leftHeight, leftBalanced] = heightBalancedHelper(node.left);
    const [rightHeight, rightBalanced] = heightBalancedHelper(node.right);
    if (Math.abs(leftHeight - rightHeight) <= 1 && (leftBalanced && rightBalanced)) {
      isBalanced = true;
    }
    else isBalanced = false;
    return [Math.max(leftHeight, rightHeight) + 1, isBalanced];
  }

}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}