
import Accounts from "./accounts";
import Account from "./account";

test('test the class accounts class', () => {
	const accounts = new Accounts();
	expect(accounts.createAccount()).toEqual([{accName: 'no name', balance: 0, accID: 0}]);
	expect(accounts.returnHighest()).toEqual({accName: 'no name', balance: 0, accID: 0});
	expect(accounts.returnLowest()).toEqual({accName: 'no name', balance: 0, accID: 0});
	expect(accounts.createAccount('Shane', 5)).toEqual([{accName: 'no name', balance: 0, accID: 0},{ accName: 'Shane', balance: 5 , accID: 1}]);
	expect(accounts.calculateTotal()).toBe(5);
	expect(accounts.returnHighest()).toEqual({accName: 'Shane', balance: 5 ,accID: 1});
	expect(accounts.returnLowest()).toEqual({accName: 'no name', balance: 0, accID: 0});
	expect(accounts.createAccount('Dima', 1000)).toEqual([{accName: 'no name', balance: 0, accID: 0},{accName: 'Shane', balance: 5, accID: 1},{accName: 'Dima', balance: 1000, accID: 2}]);
	expect(accounts.calculateTotal()).toBe(1005);
	expect(accounts.returnHighest()).toEqual({accName: 'Dima', balance: 1000, accID: 2});
	expect(accounts.returnLowest()).toEqual({accName: 'no name', balance: 0, accID: 0});
	expect(accounts.findAccount(1)).toEqual(1);
	expect(accounts.findAccount(2)).toEqual(2);
	expect(accounts.deleteAccount(0)).toEqual([{accName: 'Shane', balance: 5, accID: 1},{accName: 'Dima', balance: 1000, accID: 2}]);
	expect(accounts.deleteAccount(1)).toEqual([{accName: 'Dima', balance: 1000, accID: 2}]);
	expect(accounts.deleteAccount(2)).toEqual([]);
	expect(accounts.returnHighest()).toEqual('N/A');
	expect(accounts.returnLowest()).toEqual('N/A');
	 });



	
	



