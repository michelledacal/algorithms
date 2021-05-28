// time: O(n)
// space: O(1)
// where n is the length of the array

function hasSingleCycle(array) {
  // set a current idx = 0
    // want to check if it ever approaches 0 again
  // keep track of how many elements we've visited
  let currentIdx = 0;
  let numElementsVisited = 0;
  // to find nextIdx, add currentIdx + array[currentIdx]
    // if next < 0, array.length + next
  while (numElementsVisited < array.length) {
    if (numElementsVisited > 0 && currentIdx === 0) return false;
    currentIdx = findNextIdx(currentIdx, array);
    numElementsVisited++;
  }
  // at the end we want to be back to 0
  return currentIdx === 0;

  function findNextIdx(idx, array) {
    const jump = array[idx];
    let next = idx + jump;
    next = next % array.length;
    return next >= 0 ? next : array.length + next;
  }

}