function bubbleSort(array) {
	let swaps = true;
	let count = 0;
	while (swaps) {
		swaps = false;
		for (let i = 0; i < array.length - 1 - count; i++) {
			if (array[i] > array[i+1]) {
				swapFunc(i, array);
				swaps = true;
			}
		}
		count++;
	}

	return array;
	
	function swapFunc(i, array) {
		const temp = array[i+1];
		array[i+1] = array[i];
		array[i] = temp;
	}
	
}

// time: Best - O(n), Average - O(n^2), Worst - O(n^2)
// space: O(n)
// where n is the length of the input array
