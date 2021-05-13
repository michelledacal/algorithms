class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
		let stringSplit = 0;
		while (stringSplit < string.length) {
			let currentRoot = this.root
			for (let i = stringSplit; i < string.length; i++) {
				let currentLetter = string[i];
				if (!(currentLetter in currentRoot)) currentRoot[currentLetter] = {};
				currentRoot = currentRoot[currentLetter];
			}
			currentRoot[this.endSymbol] = true;
			stringSplit++;
		}
	}

  contains(string) {
		let currentRoot = this.root;
		for (let i = 0; i < string.length; i++) {
			let currentLetter = string[i];
			if(!(currentLetter in currentRoot)) return false;
			else currentRoot = currentRoot[currentLetter];
		}
		return this.endSymbol in currentRoot;
  }
}

// time: 
  // populateSuffixTrieFrom: O(n^2)
  // contains: O(m) 
// space:
  // populateSuffixTrieFrom: O(n^2)
  // contains: O(1)
// where n is the length of the input string and m is the length of the input string