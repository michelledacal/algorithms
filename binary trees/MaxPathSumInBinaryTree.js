function maxPathSum(tree) {
	let maxTotal = tree.value;
	let sumTotal = findMaxPath(tree, total = 0);
	return maxTotal > sumTotal ? maxTotal : sumTotal;
	
	function findMaxPath(node, total) { 
		let leftTotal = 0;
		let rightTotal = 0;
		if (node.left) {
			leftTotal = findMaxPath(node.left, total);
		}
		if (node.right) {
			rightTotal = findMaxPath(node.right, total);
		}
		if (leftTotal > rightTotal) {
			total = leftTotal + node.value;
		} else {
			total = rightTotal + node.value;
		}
		if (leftTotal < 0) leftTotal = 0;
		if (rightTotal < 0) rightTotal = 0;
		let sum = leftTotal + rightTotal + node.value;
		if (sum > maxTotal) maxTotal = sum;
		return total;
	}
}

// time: O(n)
// space: O(log(n))
// where n is the number of nodes in the tree