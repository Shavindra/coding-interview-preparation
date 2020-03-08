import { LinkedListNode } from './LinkedListNode';

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

    prepend(data) {
        const newNode = new LinkedListNode(data, this.head)
        this.head = newNode;

        // If there is no tail, make the newNode the tail
        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    /**
     * @param {*} data
     * @return {LinkedListNode}
     */
    delete(data) {
        if (!this.head) {
            return null;
        }

        // Delete tail if data matches
        // TODO: object equality
        if (this.tail.data === data) {
            this.tail = null;
        }

        let currentNode = this.head;
        let deletedNode = null;

        if (currentNode.data === data) {
            deletedNode = this.head;
            this.head = this.head.next;
            return deletedNode;
        }

        // If next node must be deleted then make next node to be a next next one.
        while (currentNode.next) {
            if (currentNode.next.data === data) {
                deletedNode = currentNode.next;
                currentNode.next = currentNode.next.next;
                break;
            }

            currentNode = currentNode.next;
        }


        return deletedNode;
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
