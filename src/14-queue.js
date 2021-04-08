const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  get size() {
    let count = 0;
    let head = this.queue;
    while (head) {
      head = head.next;
      count++;
    }
    return count;
  }

  enqueue(element) {
    const list = new ListNode(element);
    list.value = element;
    if (this.queue) {
      list.next = this.queue;
    }
    this.queue = list;
  }

  dequeue() {
    let head = this.queue;

    if (this.size === 1) {
      const element = head.value;
      this.queue = null;
      return element;
    }

    while (head.next.next) head = head.next;

    const element = head.next.value;
    head.next = null;

    return element;
  }
}

module.exports = Queue;
