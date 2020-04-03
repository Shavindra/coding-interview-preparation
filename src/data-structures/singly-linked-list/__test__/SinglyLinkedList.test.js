import { SinglyLinkedList } from '../SinglyLinkedList';

describe('LinkedList', () => {
    let linkedList;

    beforeEach(() => {
        linkedList = new SinglyLinkedList();
    });

    it('should create empty linked list', () => {
        expect(linkedList.toString()).toBe('');
        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();
    });

    it('should append data to linked list', () => {
        linkedList.append(1);
        linkedList.append(2);

        expect(linkedList.toString()).toBe('1,2');
        expect(linkedList.tail.next).toBeNull();
    });

    it('should prepend node to linked list', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.prepend(3);

        expect(linkedList.toString()).toBe('3,1,2');
        expect(linkedList.tail.next).toBeNull();
    });

    it('should delete node from linked list', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);
        linkedList.append(5);

        // Delete middle
        linkedList.delete(3);
        expect(linkedList.toString()).toBe('1,2,4,5');

        // Delete head
        linkedList.delete(1);
        expect(linkedList.toString()).toBe('2,4,5');

        // Delete tail
        linkedList.delete(5);
        expect(linkedList.toString()).toBe('2,4');
    });

    it.only('should get node', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);

        const gen = linkedList.values();
        const val1 = gen.next();
        const val2 = gen.next();
        const val3 = gen.next();

        console.log(val1, val2, val3);
    })
});

