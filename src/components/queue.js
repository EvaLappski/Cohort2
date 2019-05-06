class Queue {
	constructor (value){
		this.queue = [];
	}

	push(value) {
    	this.queue.push(value);
    	return this.queue
  	}

  	shift() {
   		 this.queue.shift();
   		 return this.queue
	 }

	getLength() {
   	 return this.queue.length;
  }

}

export default Queue;