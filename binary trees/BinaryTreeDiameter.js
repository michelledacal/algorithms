class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
	let maxLength = 0;
  let totalLength = binaryTreeHelper(tree,0);
	
  return maxLength > totalLength ? maxLength - 1 : totalLength - 1;
	
	function binaryTreeHelper(tree, length) {
		let leftLength = 0;
		let rightLength = 0;
		if (tree.left) {
			leftLength = binaryTreeHelper(tree.left, length);
		}
		if (tree.right) {
			rightLength = binaryTreeHelper(tree.right, length);
		}
		if (leftLength > rightLength) length = leftLength + 1;
		else length = rightLength + 1;
		if (leftLength + rightLength + 1 > maxLength) maxLength = leftLength + rightLength + 1;
		
		return length;
	}
	
}

// time: O(n)
// space: O(h)
// where n is the number of nodes and h is the height of the tree