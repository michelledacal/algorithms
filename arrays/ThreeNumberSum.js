function threeNumberSum(array, targetSum) {
	let triplets = [];
	array.sort((a,b) => a-b)
	for (let i = 0; i < array.length - 2; i++) {
		let left = i + 1;
		let right = array.length - 1;
		while (left < right) {
			const sum = array[i] + array[left] + array[right];
			if (sum > targetSum) right--;
			if (sum < targetSum) left++;
			if (sum === targetSum) {
				triplets.push([array[i], array[left], array[right]])
				left++;
				right--;
			}
		}
	}
	return triplets;
}

// time: O(n^2)
// space: O(n)
// where n is the length of the input array