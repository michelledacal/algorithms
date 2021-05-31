// time: O(wh)
// space: O(wh)
// where w is the width of the matrix and h is the height of the matrix

function riverSizes(matrix) {
  // loop through matrix
    // somehow check which ones you have visited
  const visited = matrix.map(row => row.map(col => false));
  const rivers = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (!matrix[row][col]) continue;
      getRiverSize(row, col, matrix, visited);
    }
  }

  return rivers;

  // each one you check, you need to check its neighbors
    // to check neighbors, check if it's been visited before
  // if it's a 1 add to size, otherwise continue
  // each time you look, add to visited
  function getRiverSize(i, j, matrix, visited) {
    let size = 0;
    const needToCheck = [[i, j]];
    while (needToCheck.length) {
      const [row, col] = needToCheck.pop();
      if (visited[row][col]) continue;
      visited[row][col] = true;
      size++;
      const neighbors = getNeighbors(row, col, matrix, visited);
      neighbors.forEach(neighbor => needToCheck.push(neighbor));
    }

    if (size > 0) rivers.push(size);

    function getNeighbors(i, j, matrix, visited) {
      const neighbors = [];
      if (i > 0 && matrix[i - 1][j] && !visited[i - 1][j]) neighbors.push([i - 1, j]);
      if (i < matrix.length - 1 && matrix[i + 1][j] && !visited[i + 1][j]) neighbors.push([i + 1, j]);
      if (j > 0 && matrix[i][j - 1] && !visited[i][ j - 1]) neighbors.push([i, j - 1]);
      if (j < matrix[i].length - 1 && matrix[i][j + 1] && !visited[i][j + 1]) neighbors.push([i, j + 1]);
      return neighbors;
    }

  }

}