import Node from './LinkedListNode'

class LinkedList {
	constructor (){
			this.head = null;
			this.tail = null;
			this.current = null;
			this._length = 0;

	}

	insert(a,b) {

        // create the new node and place the data in it
        const newNode = new Node(a,b);
                
        // special case: no nodes in the list yet
        if (this.head === null) {
            this.head = newNode;
            this._length += 1;
        } 
        else {
            // link the current tail and new tail
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this._length += 1;
        }

        // reassign the tail to be the new node
        this.tail = newNode;
    }

    

// 		let head = new Node(a,b);
	
// 		let secondNode = new Node(a,b);
// 		head.next = secondNode
// 		secondNode.previous = head;
	
// 		let thirdNode = new Node(a,b);
// 		secondNode.next = thirdNode;
// 		thirdNode.previous = secondNode;

// 		let tail = thirdNode;

// 		let current = head;

// 		while (current !== null) {
//     		console.log(current.data);
//     		current = current.next;

//     	let current = tail;

// 		while (current !== null) {
//   		  console.log(current.data);
//    		 current = current.previous;
// }

// }
	// }
}

export default LinkedList