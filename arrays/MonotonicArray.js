// time: O(n)
// space: O(1)
// where n is the length of the array

function isMonotonic(array) {
  // subtract first two numbers in the array to find the direction
  let direction = array[1] - array[0];
  // loop through the array
    // if direction is 0, find diff of next two numbers of array
    // else
      // find diff of next two numbers
      // if direction > 0 && diff < 0, return false
      // if direction < 0 && diff > 0, return false
  for (let i = 1; i < array.length; i++) {
    const diff = array[i + 1] - array[i];
    if (!direction) {
      direction = diff;
      continue;
    }
    if (direction > 0 && diff < 0) return false;
    if (direction < 0 && diff > 0) return false;
  }
  // return true if it makes it to the end
  return true;
}