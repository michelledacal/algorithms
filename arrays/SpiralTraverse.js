function spiralTraverse(array) {
	let spiral = [];
	let row = 0;
	let col = 0;
	let rowEnd = array.length - 1;
	let colEnd = array[0].length - 1;
	while (col <= colEnd && row <= rowEnd) {
		for (let i = col; i <= colEnd; i++) {
			spiral.push(array[row][i]);
		}


		for (let i = row + 1; i <= rowEnd; i++) {
			spiral.push(array[i][colEnd]);
		}


		for (let i = colEnd - 1; i >= col; i--) {
			if (row === rowEnd) break; 
			spiral.push(array[rowEnd][i]);
		}


		for (let i = rowEnd - 1; i > row; i--) {
			if (col === colEnd) break;
			spiral.push(array[i][col])
		}
		
		row++;
		rowEnd--;
		col++;
		colEnd--;

	}
	
	return spiral;
	
}

// time: O(n)
// space: O(n)
// where n is the number of elements in the array