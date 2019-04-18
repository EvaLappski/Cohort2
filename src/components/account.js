class Account {
	constructor (accName = 'no name', balance = 0, accID = 0) {
		
		this.accName = accName;
		this.balance = balance;	
		this.accID = accID
	}

	getName () {
		return this.accName;
	}

	getID () {
		return this.accID;
	}

	getBalance () {
		return this.balance;
	}

	deposit (amount) {
		return this.balance += amount;
	}

	withdrawl (amount) {
		return this.balance -= amount;
	}
	

}

export default Account



