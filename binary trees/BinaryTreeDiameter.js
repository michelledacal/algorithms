// time: O(n)
// space: O(h)
// where n is the number of nodes in the tree and h is the height of the tree

function binaryTreeDiameter(tree) {
  // set maxPath and totalPath
  // helper function to find values
    // set a left path and a right path
      // recursion
    // add larger one for total + 1
    // add both for the max path + 1
  // return whichever is greater - 1
  let maxPath = 0;
  let totalPath = binaryTreeDiameterHelper(tree);
  return maxPath > totalPath ? maxPath - 1 : totalPath - 1;

  function binaryTreeDiameterHelper(node) {
    let leftPath = 0;
    let rightPath = 0;
    let total = 0;
    if (node.left) leftPath = binaryTreeDiameterHelper(node.left);
    if (node.right) rightPath = binaryTreeDiameterHelper(node.right);
    if (leftPath > rightPath) total = leftPath + 1;
    else total = rightPath + 1;
    let sum = leftPath + rightPath + 1;
    if (sum > maxPath) maxPath = sum;
    return total;
  }

}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}