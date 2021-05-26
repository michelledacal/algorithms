// time: O(mlog(m) + nlog(n))
// space: O(1)
// where m is the length of arrayOne and n is the length of arrayTwo

function smallestDifference(arrayOne, arrayTwo) {
  // sort both of the arrays
  arrayOne.sort((a,b) => a - b);
  arrayTwo.sort((a,b) => a - b);
  // two pointers: one on each array at the beginning
  let one = 0;
  let two = 0;
  // set absDiff to abs(arrayOne[one] - arrayTwo[two])
  // set diffNums = [arrayOne[one], arrayTwo[two]]
  let absDiff = Math.abs(arrayOne[one] - arrayTwo[two]);
  let diffNums = [arrayOne[one], arrayTwo[two]];
  // while both pointers are less than array lengths
    // if asbolute difference of pointers is less than absDiff
      // set absDiff to new diff and diffNums to new nums
    // else
      // move pointer that has the lower number
  while (one < arrayOne.length && two < arrayTwo.length) {
    const oneNum = arrayOne[one];
    const twoNum = arrayTwo[two];
    const diff = Math.abs(oneNum - twoNum);
    if (diff < absDiff) {
      absDiff = diff;
      diffNums = [oneNum, twoNum];
    } else {
      if (oneNum < twoNum) one++;
      else two++;
    }
  }
  // return diffNums
  return diffNums;
}