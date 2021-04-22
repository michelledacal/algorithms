function findThreeLargestNumbers(array) {
	const highestNums = [null, null, null];
	for(let i = 0; i < array.length; i++) {
		highestNumsCheck(highestNums, array[i]);
	}
	return highestNums;
	
	function highestNumsCheck(threeNumArray, num) {
		if (threeNumArray[2] === null || num > threeNumArray[2]) {
			shiftNums(threeNumArray, num, 2);
		} else if (threeNumArray[1] === null || num > threeNumArray[1]) {
			shiftNums(threeNumArray, num, 1);
		} else if (threeNumArray[0] === null || num > threeNumArray[0]) {
			shiftNums(threeNumArray, num, 0)
		}
	}
	
	function shiftNums(array, num, idx) {
		for (let i = 0; i <= idx; i++) {
			if (i === idx) {
				array[i] = num;
			} else {
				array[i] = array[i + 1]
			}
		}
	}
	
}

// time: O(n)
// space: O(1)
// where n is the length of the input array