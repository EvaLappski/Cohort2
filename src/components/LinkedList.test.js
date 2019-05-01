import Node from './LinkedListNode'
import LinkedList from './LinkedList'

test('test the Node constructor', () => {
	const test = new Node();
	expect(test.show()).toEqual('undefined and undefined');
	const node = new Node('Eva', 99);
	expect(node.show()).toEqual("Eva and 99");
});

test('test the LinkedList class', () => {
	const testList = new LinkedList();
	// console.log('the list', testList)
	testList.insert('Shane', 89)
	// console.log('the list', testList)
	testList.insert('Eva', 99)
	// console.log('the list again', testList)
	testList.insert('Dima', 79)
	// console.log('the list once more', testList)
	expect(testList.get(2)).toEqual('Shane')
	console.log('get 0', testList.get(0));
	console.log('get 1', testList.get(1));
	console.log('get 2', testList.get(2))


});