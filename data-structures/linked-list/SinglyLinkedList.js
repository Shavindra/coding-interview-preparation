export class SinglyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newNode = new LinkedListNode(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;

    }

}