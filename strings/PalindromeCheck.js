function isPalindrome(string) {
	let pointOne = 0;
	let pointTwo = string.length - 1;
	while (pointOne < pointTwo) {
		if (string[pointOne] !== string[pointTwo]) {
			return false;
		}
		pointOne++;
		pointTwo--;
	}
	return true;
}

// time: O(n)
// space: O(1)
// where n is the length of the input string