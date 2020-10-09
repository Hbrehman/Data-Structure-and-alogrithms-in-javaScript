class MaxBinaryHeap {
  constructor() {
    this.values = [2, 3, 6, 1, 8, 11];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      const parentInx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentInx];
      if (parent > this.values[idx]) break;
      this.values[parentInx] = element;
      this.values[idx] = parent;
      idx = parentInx;
    }
  }
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
}

const heap = new MaxBinaryHeap();
