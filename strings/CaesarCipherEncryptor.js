function caesarCipherEncryptor(string, key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	key = key % 26;
	string = string.split('').map(letter => {
		let newNum = alphabet.indexOf(letter) + key;
		return alphabet[newNum % 26];
	})
	return string.join('');
}

// time: O(n)
// space: O(n)
// where n is the length of the input string