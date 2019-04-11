import Accounts from "./accounts";
import Account from "./account";

test('test the class accounts class', () => {
	const accounts = new Accounts;
	expect(accounts.createAccount('Shane', 5)).toEqual([{ accName: 'Shane', balance: 5}])
	expect(accounts.createAccount('Dima', 1000)).toEqual([{accName: 'Shane', balance: 5},{accName: 'Dima', balance: 1000}])
	});

	
	



