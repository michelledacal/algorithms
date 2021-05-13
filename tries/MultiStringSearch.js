function multiStringSearch(bigString, smallStrings) {
	let stringSplit = 0;
	let trie = {};
	while (stringSplit < bigString.length) {
		let currentRoot = trie;
		for (let i = stringSplit; i < bigString.length; i++) {
			let currentLetter = bigString[i];
			if (currentLetter === ' ') break;
			if (!(currentLetter in currentRoot)) currentRoot[currentLetter] = {};
			currentRoot = currentRoot[currentLetter];
		}
		stringSplit++;
	}

	const contains = [];
	for (let i = 0; i < smallStrings.length; i++) {
		let currentRoot = trie;
		let currentWord = smallStrings[i];
		let isFalse = false;
		for (let j = 0; j < currentWord.length; j++) {
			let currentLetter = currentWord[j];
			if (!(currentLetter in currentRoot)) {
				contains.push(false);
				isFalse = true;
				break;
			}
			currentRoot = currentRoot[currentLetter];
		}
		if (!isFalse) contains.push(true);
	}
	return contains;
}

// time: O(bs + ns)
// space: O(ns)
// where b is the length of the big string, n is the number of small strings, and s is the length of the longest small string