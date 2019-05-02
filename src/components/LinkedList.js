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
            this.tail = newNode;
            this.current = newNode;
            this._length += 1;
        } 
        else if(this.current.next !== null ) {
        	newNode.prev = this.current;
        	newNode.next = this.current.next;
        	// this.current.prev = this.current.prev
        	this.current.next = newNode
        	this.current.next.prev = newNode;
        	this.current = newNode 
        	this._length += 1;
        }
        else {//special case, you want to add to the end/last node
        	this.tail = newNode;
          	newNode.prev = this.current;
          	this.current.next = newNode
          	this.current = newNode
            this._length += 1;          
        } 
    }

 	first(){
 	 	if (this.head !== null){;
 	 		this.current = this.head
 	 		return this.current.subject
 	 	}
	}

	last (){
		if (this.tail !== null){
			this.current = this.tail;
			return this.current.subject
		}
	}
   
    next (){
    	if (this.current.next !== null){
    		this.current = this.current.next;
    		return this.current.subject;
    	}
    	else {
    		return "you've reached the end of the list"
    	}
   }

   previous () {
   		if (this.current.prev !== null){
   		this.current = this.current.prev 

   		return this.current.subject
   		}
   		else {
   		return "you've reached the start of the list"
   		}
   }

   delete(){
   	if (this._length === 0){
   		return undefined;
   	}

   	else if(this._length === 1){
   		this.head = null
   		this.tail = null
   		this.current = null
   		this._length -= 1
   	}
   	else {
   		this.current.prev = this.current.next;
   		this.current.next = this.current.prev;
   		this.current = this.current.prev;
   		this._length -= 1


   	}
   }
   		
   showCurrent(){

   	return this.current.subject
   }
   
  

}

export default LinkedList