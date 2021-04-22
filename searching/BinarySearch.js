function binarySearch(array, target) {
  return helperSearch(array, target, 0, array.length - 1);
	
	function helperSearch(array, target, left, right) {
		while (left <= right) {
			const middle = Math.floor((left + right) / 2);
			const number = array[middle];
			if (number === target) return middle;
			else if (number > target) {
				right = middle - 1;
			} else {
				left = middle + 1;
			}
		}
		return -1
	}
}

// time: O(log(n))
// space: O(1)
// where n is the length of the input array