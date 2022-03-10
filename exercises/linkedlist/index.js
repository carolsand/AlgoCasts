// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node (data, next = null) {
    this.next = next;
    this.data = data;
}

class LinkedList {
    constructor(){
        this.head = nulll
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
    }
}

module.exports = { Node, LinkedList };
