function firstNonRepeatingCharacter(string) {
	let letters = {};
	for (let i = 0; i < string.length; i++) {
		let currentLetter = string[i];
		if (!(currentLetter in letters)) letters[currentLetter] = 1;
		else letters[currentLetter]++;
	}
	for(let i = 0; i < string.length; i++) {
		let currentLetter = string[i];
		if (letters[currentLetter] === 1) return i;
	}
  return -1;
}

// time: O(n)
// space: O(1)
// where n is the length of the input string