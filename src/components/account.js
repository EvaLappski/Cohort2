
class Account {
	constructor (accName, balance, accID) {
		this.accName = accName;
		this.balance =  balance;
		this.accID = accID;
		
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



