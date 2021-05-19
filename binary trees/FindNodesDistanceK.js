class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findNodesDistanceK(tree, target, k) {
	const parentNodes = {};
	findParentNodes(tree, parentNodes);
	const targetNodeParent = parentNodes[target];
	const targetNode = getTargetNode(tree, targetNodeParent, target);
	
	return breadthFirstSearch(targetNode, k, parentNodes);
	
	function findParentNodes(node, parentNodes, parent = null) {
		parentNodes[node.value] = parent;
		if (node.left) findParentNodes(node.left, parentNodes, node);
		if (node.right) findParentNodes(node.right, parentNodes, node);
	}
	
	function getTargetNode(tree, parent, target) {
		if (parent === null) return tree;
		if (parent.left && parent.left.value === target) return parent.left;
		return parent.right
	}
	
	function breadthFirstSearch(node, k, parentNodes) {
		let queue = [[node, 0]];
		let visited = {};
		while (queue.length) {
			const [currentNode, distanceFromTarget] = queue.shift();
			if (distanceFromTarget === k) {
				const nodesKDistance = queue.map(arr => arr[0].value);
				nodesKDistance.push(currentNode.value);
				return nodesKDistance;
			}
			visited[currentNode.value] = true;
			if (currentNode.left && !visited[currentNode.left.value]) queue.push([currentNode.left, distanceFromTarget + 1]);
			if (currentNode.right && !visited[currentNode.right.value] ) queue.push([currentNode.right, distanceFromTarget + 1]);
			if (parentNodes[currentNode.value] && !visited[parentNodes[currentNode.value].value] ) queue.push([parentNodes[currentNode.value], distanceFromTarget + 1]);

		}
		return [];
	}
	
}

// time: O(n)
// space: O(n)
// where n is the number of nodes in the tree