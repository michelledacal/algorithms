function invertBinaryTree(tree) {
	if (tree.left || tree.right) {
		let temp = tree.left;
		tree.left = tree.right;
		tree.right = temp;
	}
	if (tree.left) invertBinaryTree(tree.left);
	if (tree.right) invertBinaryTree(tree.right);
	return tree;
}

// time: O(n)
// space: O(d)
// where n is the number of nodes and d is the depth of the tree