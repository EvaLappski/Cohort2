import Account from "./account";

class Accounts {
	constructor(){
		this.accountList = [];
	}

	createAccount (accName, balance){
		const newAccount = new Account(accName, balance);
		this.accountList.push(newAccount);
		// console.log(accName, balance)
		return this.accountList;
	}

	deleteAccount (accName, balance){
		
	}

}

export default Accounts;


