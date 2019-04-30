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
	testList.add('Shane', 89)
	console.log('the list', testList)
	testList.add('Eva', 99)
	console.log('the list again', testList)
});