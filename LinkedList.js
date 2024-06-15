class Node {
    constructor(data) {
        this.data = data; // Data on that node
        this.next = null; // Pointer to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    prepend(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode; // Updating the new Node to the head
        this.size++; // Increment the size
    }

    // Implement append method
    append(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    printList() {
        let current = this.head;
        let str = '';
        while (current !== null) {
            str = str + current.data + ' -> ';
            current = current.next;
        }
        console.log(str + 'null');
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return null; // Out of bounds
        }

        let newNode = new Node(data);
        if (index === 0) {
            this.prepend(data); // If the index is 0, prepend it.
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        newNode.next = current;
        previous.next = newNode;
        this.size++;
    }

    removeFirst() {
        if (!this.head) {
            return null;
        }

        let removedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return removedNode;
    }

    // Implement removeLast method
    removeLast() {
        if (!this.head) {
            return null;
        }

        if (this.head.next === null) {
            let removedNode = this.head;
            this.head = null;
            this.size--;
            return removedNode;
        }

        let current = this.head;
        let previous = null;
        while (current.next !== null) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.size--;
        return current;
    }

    removeAt(index) {
        if (index < 0 || index > this.size) {
            return null; // Out of bounds
        }

        if (index === 0) {
            return this.removeFirst();
        }

        let current = this.head;
        let previous;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        previous.next = current.next;
        this.size--;

        return current.data;
    }

    search(data) {
        let current = this.head;

        while (current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }

        return false;
    }

    updateAt(data, index) {
        if (index < 0 || index > this.size) {
            return null; // Out of bounds
        }

        let current = this.head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        current.data = data; // Update the data that we want.
    }

    reverseLinkedList() {
        let previous = null;
        let current = this.head;
        let nextNode = null;

        while (current) {
            nextNode = current.next;
            current.next = previous;
            previous = current;
            current = nextNode;
        }

        this.head = previous;
    }

    removeDuplicateFromLinkedList() {
        let current = this.head;
        while (current && current.next) {
            if (current.data == current.next.data) {
                current.next = current.next.next;
                this.size--;
            } else {
                current = current.next;
            }
        }
    }

    findMiddle() {
        let slowPointer = this.head;
        let fastPointer = this.head;

        while (fastPointer && fastPointer.next) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }

        return slowPointer.data;
    }
}

let linkedList = new LinkedList();

// 10 -> null
// 20 -> 10 -> null
// 30 -> 20 -> 10 -> null
linkedList.prepend(10);
linkedList.prepend(20);
linkedList.prepend(30);
linkedList.insertAt(15, 2);
linkedList.updateAt(25, 3);

// Append 40
linkedList.append(40);

// Remove the last element (40)
linkedList.removeLast();

linkedList.printList();
