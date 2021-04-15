function generateDocument(characters, document) {
	let letters = {};
	for(let i = 0; i < characters.length; i++) {
    let currentLetter = characters[i];
		if (!(currentLetter in letters)) letters[currentLetter] = 1;
		else letters[currentLetter]++;
	}
	for(let i = 0; i < document.length; i++) {
    let currentLetter = document[i];
		if (!(currentLetter in letters) || letters[currentLetter] === 0) return false;
		else letters[currentLetter]--;
	}
  return true;
}

// time: O(n+m)
// space: O(c)
// where n is the number of characters, m is the length of the document, and c is the number of unique characters in characters