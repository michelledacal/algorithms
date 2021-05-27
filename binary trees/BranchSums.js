// time: O(n)
// space: O(n)
// where n is the number of nodes in the tree

function branchSums(root) {
  // add order: root, left, right
  // add root val to sum 
  // if left exists, add left val and continue left
  // repeat with the right side
  // when reaching end of node (left nor right exist), push sum to sums array
  const sums = [];
  branchSumHelper(root, 0);
  return sums;

  function branchSumHelper(node, sum) {
    sum += node.value;
    if (!node.left && !node.right) sums.push(sum);
    if (node.left) branchSumHelper(node.left, sum);
    if (node.right) branchSumHelper(node.right, sum);
  }

}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}