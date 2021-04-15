class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function nodeDepths(root) {
	let totalDepth = 0;
	calculateDepth(root, 0);
	return totalDepth;

	function calculateDepth(root, depth) {
		totalDepth += depth;
		depth++;
		if (root.left) calculateDepth(root.left, depth);
		if (root.right) calculateDepth(root.right, depth);
	}
	
}

// time: O(n)
// space: O(h)
// where n is the number of nodes in the tree and h is the height of the tree
