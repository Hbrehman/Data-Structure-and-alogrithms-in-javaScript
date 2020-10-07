class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (val == current.val) return undefined;
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (val > current.val) {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  search(val) {
    if (!this.root) return null;
    let current = this.root;
    while (true) {
      if (val === current.val) return current;
      if (val < current.val) {
        if (!current.left) return console.log("node not found");
        else current = current.left;
      } else if (val > current.val) {
        if (!current.right) return console.log("node not found");
        else current = current.right;
      } else {
        return console.log("node not found");
      }
    }
  }

  BFS() {
    let queue = [],
      data = [],
      node = this.root;
    queue.push(node);
    while (queue.length > 0) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }

  preOrderDFS() {
    let data = [],
      current;
    current = this.root;
    function traversal(current) {
      data.push(current.val);
      if (current.left) this.traversal(current.left);

      if (current.right) this.traversal(current.right);
    }
    traversal(current);
    return data;
  }
}

const bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);
