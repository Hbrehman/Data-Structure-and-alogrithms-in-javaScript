class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SiglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (this.length <= 0) {
      this.head = node;
      this.tail = node;
      this.length++;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
  }

  pop() {
    if (!this.head) {
      return console.log("Singly linked list is already Empty");
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;

    // let pre = this.head;
    // while (pre) {
    //   if (pre == this.tail) {
    //     const last = this.head;
    //     this.head = null;
    //     this.tail = null;
    //     this.length--;
    //     return last;
    //   }
    //   if (pre.next === this.tail) {
    //     pre.next = null;
    //     const last = this.tail;
    //     this.tail = pre;
    //     this.length--;
    //     return last;
    //   }
    //   pre = pre.next;
    // }
  }

  shift() {
    if (!this.head) return console.log("List is already Empty");
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    const pre = this.get(index - 1);
    const next = pre.next;
    let newNode = new Node(val);
    pre.next = newNode;
    newNode.next = next;
    this.length++;
    return true;

    /*
    let count = 0;
    let current = this.head;
    let post = current.next;
    while (count < index - 1) {
      current = post;
      post = post.next;
      count++;
    }
    current.next = newNode;
    newNode.next = post;
    this.length++;
    return true;
    */
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
}

const sll = new SiglyLinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);

/*
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}



class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return console.log("List is already Empty");
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    newTail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = 0;
      this.tail = 0;
    }
    return current;
  }
}
const sll = new SinglyLinkedList();
console.log(sll.push(1));
*/
