import LinkedList from './LinkedList'

class Node {
	constructor(subject, amount){
		this.next = null;
		this.prev = null;
		this.amount = amount;
		this.subject = subject;
	}

	show(){
			return `${this.subject} and ${this.amount}`;
	}
}

export default Node