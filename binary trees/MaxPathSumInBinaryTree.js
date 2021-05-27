// time: O(n)
// space: O(log(n))
// where n is the number of nodes in the tree

function maxPathSum(tree) {
  // set a max path sum to tree.value
  // helper function to find total sum
    // go to left first and when reach the end, add to total sum
    // repeat with right
    // compare the two and add greater to total sum
    // add both to get max path but check to make sure none are negative
  let maxSum = tree.value;
  let totalSum = maxPathSumHelper(tree);
  return maxSum > totalSum ? maxSum : totalSum;

  function maxPathSumHelper(node) {
    let leftSum = 0;
    let rightSum = 0;
    let total = 0;
    if (node.left) leftSum = maxPathSumHelper(node.left);
    if (node.right) rightSum = maxPathSumHelper(node.right);
    if (leftSum > rightSum) total = leftSum + node.value;
    else total = rightSum + node.value;
    if (leftSum < 0) leftSum = 0;
    if (rightSum < 0) rightSum = 0;
    let sum = leftSum + rightSum + node.value;
    if (sum > maxSum) maxSum = sum;
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