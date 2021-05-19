class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
	if (node.right) return goLeft(node.right);
  
	return goUpParents(node);
	
	function goLeft(node) {
		if (node.left) return goLeft(node.left);
		return node;
	}
	
	function goUpParents(node) {
		if (node.parent && node.parent.right === node) return goUpParents(node.parent);
		return node.parent;
	}
	
}

// time: O(h)
// space: O(1)
// where h is the height of the tree