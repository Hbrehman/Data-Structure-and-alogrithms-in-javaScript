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
    const current = this.head;
    const newTail = current;
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
}

const sll = new SiglyLinkedList();
sll.push(3);
console.log(sll.pop());
console.log(sll);
