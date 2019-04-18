import Account from "./account";

class Accounts {
	constructor(){
		this.accountList = [];
		this.counter = 0
	}

	createAccount (accName, balance, accID){
		const newAccount = new Account(accName, balance, this.counter++);
		this.accountList.push(newAccount);
		// console.log(accName, balance)
		// console.log('the array', this.accountList)
		return this.accountList;
	}

	calculateTotal (){
		let sum = this.accountList.reduce(
			(accumulator, currentValue) => accumulator + currentValue.balance, 0);
		console.log('total balance',sum);
		return sum;
	}

	returnHighest(){
		if (this.accountList.length > 0){
		const max = this.accountList.reduce(
			(acc1, acc2) => 
			 (acc1.balance > acc2.balance) ? acc1 : acc2
			)
		return max; 

	}	
	else {
		return 'N/A'; 
		}
	}

	returnLowest (){
		if (this.accountList.length >= 1){
		const min = this.accountList.reduce(
			(acc1, acc2) => 
			 (acc1.balance < acc2.balance) ? acc1 : acc2
			);
		return min; 
		} 	
		 else {
		return 'N/A';
		}

	
	}

	findAccount (a){
		let x = this.accountList.findIndex(function(e){return e.accID=== a})
		return x; //returns the index of the object 
	}

	deleteAccount (accID){
		let b = this.findAccount(accID)
		this.accountList.splice(b, 1);
		return this.accountList;	

	}

}


export default Accounts;

