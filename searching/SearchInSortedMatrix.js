function searchInSortedMatrix(matrix, target) {
  let row = 0;
	let column = matrix[0].length - 1;
	while (column >= 0 && row < matrix.length) {
		if (matrix[row][column] > target) {
			column--;
		} else if (matrix[row][column] < target) {
			row++;
		} else {
			return [row, column];
		}
	}
	return [-1, -1];
}

// time: O(n + m)
// space: O(1)
// where n is the number of rows in the matrix and m is the number of columns in the matrix