import LinkedListNode from '../LinkedListNode';

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

    toArray() {
        const nodes = [];

        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode)
            currentNode = currentNode.next;
        }

        return nodes;
    }

    toString(callback) {
       return this.toArray().map((node) => {
            return node.toString(callback)
        }).toString();
    }
}

