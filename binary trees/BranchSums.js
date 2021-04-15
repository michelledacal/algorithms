class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
	let sums = [];
	calculateSum(root);
	return sums;
	
	function calculateSum(root, sum = 0) {
		sum += root.value;
		if (!root.left && !root.right) sums.push(sum);
		if (root.left) calculateSum(root.left, sum);
		if (root.right) calculateSum(root.right, sum);
	}
  
}

// time: O(n)
// space: O(n)
// where n is the number of nodes in the tree