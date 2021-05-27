// time: O(v + e)
// space: O(v)
// where v is the number of vertices of the graph and e is the number of edges

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // root, right, left
    array.push(this.name);
    this.children.forEach(node => {
      node.depthFirstSearch(array);
    });
    return array;
  }
}