function findClosestValueInBst(tree, target) {
  return bstHelper(tree, target)

  function bstHelper(tree, target, closest = Infinity) {
		if (!tree) return closest;
		if (Math.abs(tree.value - target) < Math.abs(closest - target)) {
			closest = tree.value;
			if (Math.abs(tree.value - target) === 0) return closest;
		}
		if (tree.value < target) {
			return bstHelper(tree.right, target, closest);
		}
		else if (tree.value > target) {
			return bstHelper(tree.left, target, closest);
		}
	}

}

// time: best: O(log(n)), worst: O(n)
// space: O(1)
// where n is the number of nodes in the BST