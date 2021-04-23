function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] > array[j]) {
				swapFunc(i, j, array);
			}
		}
	}
	return array;
	
	function swapFunc(i, j, array) {
		const temp = array[j];
		array[j] = array[i];
		array[i] = temp;
	}
	
}

// time: O(n^2)
// space: O(1)
// where n is the length of the input array