import Account from "./account";

class Accounts {
	constructor(){
		this.accountList = [];
	}

	createAccount (accName, balance){
		const newAccount = new Account(accName, balance);
		this.accountList.push(newAccount);
		// console.log(accName, balance)
		console.log('the array', this.accountList)
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
		// console.log('max', max)
		return max; 

	}	else {
		//console.log('N/A');
		return 'N/A'; 
		}
	}

	returnLowest (){
		if (this.accountList.length >= 1){
		const min = this.accountList.reduce(
			(acc1, acc2) => 
			 (acc1.balance < acc2.balance) ? acc1 : acc2
			);
		// console.log('lowest', min)
		return min; 
	} else {
		// console.log('N/A');
		return 'N/A';
	}

	
}
}



export default Accounts;

