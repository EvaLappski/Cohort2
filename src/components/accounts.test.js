import Accounts from "./accounts";
import Account from "./account";

test('test the class accounts class', () => {
	const accounts = new Accounts;
	expect(accounts.returnHighest()).toEqual('N/A')
	expect(accounts.returnLowest()).toEqual('N/A')
	expect(accounts.createAccount('Shane', 5)).toEqual([{ accName: 'Shane', balance: 5}])
	expect(accounts.calculateTotal()).toBe(5)
	expect(accounts.returnHighest()).toEqual({accName: 'Shane', balance: 5})
	expect(accounts.returnLowest()).toEqual({accName: 'Shane', balance: 5})
	expect(accounts.createAccount('Dima', 1000)).toEqual([{accName: 'Shane', balance: 5},{accName: 'Dima', balance: 1000}])
	expect(accounts.calculateTotal()).toBe(1005)
	expect(accounts.returnHighest()).toEqual({accName: 'Dima', balance: 1000})
	expect(accounts.returnLowest()).toEqual({accName: 'Shane', balance: 5})
	});


	
	



