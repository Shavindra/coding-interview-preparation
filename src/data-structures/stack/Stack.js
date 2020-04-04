import { SinglyLinkedList } from "../singly-linked-list/SinglyLinkedList";

export class Stack {
  constructor() {
    // structures are quite similar. Compare push/pop operations of the Stack
    // with prepend/deleteHead operations of singlyLinkedList.
    this.list = new SinglyLinkedList();
  }

  isEmpty() {
    return !this.list.head;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.list.head.data;
  }

  pop() {
    const removedHead = this.list.deleteHead();
    return removedHead ? removedHead.data : null;
  }

  push(data) {
    // Pushing means to lay the value on top of the stack.
    // Lets just add new value to the start of the linked list.
    return this.list.prepend(data);
  }

  toArray() {
    return this.list
    .toArray()
    .map(listNode => listNode.data);;
  }
}
