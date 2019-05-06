class Stack {
	constructor (value){
		this.stack = [];
	}

	push(value) {
    	this.stack.push(value);
    	return this.stack
  	}

  pop() {
   		this.stack.pop();
   		return this.stack
	 }

	getLength() {
   	 return this.stack.length;
  }

}

export default Stack;