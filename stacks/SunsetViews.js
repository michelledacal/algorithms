// time: O(n)
// space: O(n)
// where n is the length of the buildings array

function sunsetViews(buildings, direction) {
  // depending on direction, have a start idx of 0 or length
  // depending on direction, have an increment of 1 or -1
  // set a max height for comparison
  let idx = direction === 'WEST' ? 0 : buildings.length - 1;
  let increment = direction === 'WEST' ? 1 : -1;
  const buildingIdx = [];
  let maxHeight = 0;
  // when building > maxHeight, add idx to array and change max height
  while (idx >= 0 && idx < buildings.length) {
    if (buildings[idx] > maxHeight) {
      maxHeight = buildings[idx];
      buildingIdx.push(idx);
    }
    idx += increment;
  }
  // return idx array but if direciton === 'EAST', reverse
  return direction === 'WEST' ? buildingIdx : buildingIdx.reverse();
}