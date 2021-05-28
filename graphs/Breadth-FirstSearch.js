// time: O(v + e)
// space: O(v)
// where v is the number of vertices of the tree and e is the number of edges of the tree

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    // goes line by line
    // set up a queue of the children
    const queue = [this];
    while (queue.length) {
      const current = queue.shift();
      array.push(current.name);
      current.children.forEach(child => queue.push(child));
    }
    return array;
  }
}