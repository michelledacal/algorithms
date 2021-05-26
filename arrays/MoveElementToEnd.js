// time: O(n)
// space: O(1)
// where n is the length of the array

function moveElementToEnd(array, toMove) {
  // two pointers: one at the beginning and end of the array
  let left = 0;
  let right = array.length - 1;
  // while left < right
    // if left !== right, left++
    // else swap right and left
    // if right === toMove, right--
  while (left < right) {
    if (left !== toMove) left++;
    else {
      array[left] = array[right];
      array[right] = toMove;
    }
    if (right === toMove) right--;
  }
  // return sorted array
  return array;
}