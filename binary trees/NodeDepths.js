// time: O(n)
// space: O(h)
// where n is the number of nodes in the tree and h is the height of the tree

function nodeDepths(root) {
  // store totalDepth
  // helper function with depth
  // add depth to totalDepth
  // if left exists, repeat with node.left and depth + 1
  // if right exists, repeat with node.right and depth + 1
  // return totalDepth
  let totalDepth = 0;
  nodeDepthsHelper(root, 0);
  return totalDepth;

  function nodeDepthsHelper(node, depth) {
    totalDepth += depth;
    if (node.left) nodeDepthsHelper(node.left, depth + 1);
    if (node.right) nodeDepthsHelper(node.right, depth + 1);
  }

}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}