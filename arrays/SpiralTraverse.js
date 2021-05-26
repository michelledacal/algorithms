// time: O(n)
// space: O(n)
// where n is the total number of elements in the array

function spiralTraverse(array) {
  // set startRow and endRow to 0 and length - 1
  // set startCol and endCol to 0 and row.length - 1
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;
  // set spiral values to empty array
  const spiral = [];
  // while startRow <= endRow && startCol <= endCol
  while (startRow <= endRow && startCol <= endCol) {
    // row = startRow, for col = startCol, col <= endCol
      // push value to spiral
    for (let col = startCol; col <= endCol; col++) {
      spiral.push(array[startRow][col]);
    }
    // col = endCol, for row = startRow + 1, row <= endRow
      // push value to spiral
    for (let row = startRow + 1; row <= endRow; row++) {
      spiral.push(array[row][endCol]);
    }
    // row = endRow, for col = endCol - 1, col >= startCol
      // break if startRow === endRow
      // push value to spiral
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      spiral.push(array[endRow][col]);
    }
    // col = startCol, for row = endRow - 1, row > startRow
      // break if startCol === endCol
      // push value to spiral
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break;
      spiral.push(array[row][startCol]);
    }
    // add to startRow and startCol
    startRow++;
    startCol++;
    // subtract from endRow and endCol
    endRow--;
    endCol--;
  }
  // return spiral
  return spiral;
}