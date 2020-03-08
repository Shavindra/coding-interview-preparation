export class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

    toString(callback) {
        return callback ? callback(this.data) : `${this.data}`;
    }
}
