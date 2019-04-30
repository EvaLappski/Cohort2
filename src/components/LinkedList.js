import Node from './LinkedListNode'

class LinkedList {
	constructor (){
			this.head = null;
			// this.tail = null;
			this._length = 0;

	}

	add(a,b) {
		let node = new Node(a,b)
		// If there is no head, set node to head of list
		if (!this.head){
			this.head = node;
			this._length += 1;
			return node
		}
		let current = this.head;
		while (current.next ){
			current = current.next
		}

		current.next = node;
		this._length += 1;
		return node
	}	
}

export default LinkedList