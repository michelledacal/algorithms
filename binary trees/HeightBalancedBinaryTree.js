class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function heightBalancedBinaryTree(tree) {
	let [height, balanced] = heightHelper(tree, true);
	return balanced;
	
	function heightHelper(tree, isBalanced) {
		if (!tree || !isBalanced) {
		return isBalanced;
		}
		let leftHeight = 0;
		let leftBalance = true;
		let rightHeight = 0;
		let rightBalance = true;
		if (tree.left) {
			[leftHeight, leftBalance] = heightHelper(tree.left, isBalanced);
		}
		if (tree.right) {
			[rightHeight, rightBalance] = heightHelper(tree.right, isBalanced);
		}
		
		if (Math.abs(leftHeight - rightHeight) > 1 || !(leftBalance && rightBalance)) {
			isBalanced = false;
		}
		
		let height = Math.max(leftHeight, rightHeight) + 1;
		return [height, isBalanced]
		
	}
	
}

// time: O(n)
// space: O(h)
// where n is the number of nodes and h is the height of the tree