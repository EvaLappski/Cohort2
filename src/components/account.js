
class Account {
	constructor (accName, balance) {
		this.accName = accName;
		this.balance =  balance;
		
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



