// time: O(n)
// space: O(n)
// where n is the length of the array

function sortedSquaredArray(array) {
  // two pointers
  let left = 0;
  let right = array.length - 1;
  // make empty array of length array
  const squaredArray = new Array(array.length).fill(0);
  // loop backward through squared array
    // if abs(right) > abs(left)
      // add squared right to squared array [i]
      // right--
    // else
      // add squared left to squared array [i]
      // left++
  for (let i = array.length - 1; i >= 0; i--) {
    const leftNum = Math.abs(array[left]);
    const rightNum = Math.abs(array[right]);
    if (rightNum > leftNum) {
      squaredArray[i] = rightNum * rightNum;
      right--;
    } else {
      squaredArray[i] = leftNum * leftNum;
      left++;
    }
  }
  // return squared array
  return squaredArray;
}