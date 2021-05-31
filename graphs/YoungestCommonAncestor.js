// time: O(d)
// space: O(1)
// where d is the depth of the tree

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  // need to have them at the same height and then go up
    // so move lower descendant to same height as hgiher descendant
  const depthOne = findDepth(topAncestor, descendantOne);
  const depthTwo = findDepth(topAncestor, descendantTwo);
  let higherAncestor = depthOne > depthTwo ? descendantTwo : descendantOne;
  let lowerAncestor = depthOne > depthTwo ? descendantOne : descendantTwo;
  let difference = Math.abs(depthOne - depthTwo);
  while (difference > 0) {
    lowerAncestor = lowerAncestor.ancestor;
    difference--;
  }
  // continue to go through ancestors until they are the same
  while (lowerAncestor !== higherAncestor) {
    lowerAncestor = lowerAncestor.ancestor;
    higherAncestor = higherAncestor.ancestor;
  }

  return higherAncestor;

  function findDepth(root, node) {
    let current = node;
    let depth = 0;
    while (current !== root) {
      current = current.ancestor;
    }
    return depth;
  }

}

class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}