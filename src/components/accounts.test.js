import Accounts from "./accounts";
import Account from "./account";

test('test the class accounts class', () => {
	const accounts = new Accounts;
	expect(accounts.returnHighest()).toEqual('N/A')
	expect(accounts.returnLowest()).toEqual('N/A')
	expect(accounts.createAccount('Shane', 5, 3)).toEqual([{ accName: 'Shane', balance: 5 , accID: 3}])
	expect(accounts.calculateTotal()).toBe(5)
	expect(accounts.returnHighest()).toEqual({accName: 'Shane', balance: 5 ,accID: 3})
	expect(accounts.returnLowest()).toEqual({accName: 'Shane', balance: 5, accID: 3})
	expect(accounts.createAccount('Dima', 1000, 5)).toEqual([{accName: 'Shane', balance: 5, accID: 3},{accName: 'Dima', balance: 1000, accID: 5}])
	expect(accounts.calculateTotal()).toBe(1005)
	expect(accounts.returnHighest()).toEqual({accName: 'Dima', balance: 1000, accID: 5})
	expect(accounts.returnLowest()).toEqual({accName: 'Shane', balance: 5, accID: 3})
	expect(accounts.findAccount(5)).toEqual(1)
	expect(accounts.findAccount(3)).toEqual(0)
	expect(accounts.deleteAccount(5)).toEqual([{ accName: 'Shane', balance: 5, accID: 3}])
	expect(accounts.deleteAccount(3)).toEqual([])
	});



	
	



