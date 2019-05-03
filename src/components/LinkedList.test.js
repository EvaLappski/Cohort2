import Node from './LinkedListNode'
import LinkedList from './LinkedList'

test('test the Node constructor', () => {
	const test = new Node();
	expect(test.show()).toEqual('undefined and undefined');
	const node = new Node('Eva', 99);
	expect(node.show()).toEqual("Eva and 99");
});

test('test the LinkedList class for insert', () => {
	const testList = new LinkedList();
	testList.insert('A', 89)
	expect(testList.first()).toEqual('A')
	expect(testList.last()).toEqual('A')
	expect(testList.next()).toEqual("you've reached the end of the list")
	testList.insert('B', 99)
	expect(testList.first()).toEqual('A')
	expect(testList.next()).toEqual('B')
	expect(testList.next()).toEqual("you've reached the end of the list")
	expect(testList.last()).toEqual('B')
	testList.insert('C', 79)
	expect(testList.first()).toEqual('A')
	expect(testList.next()).toEqual('B')
	expect(testList.next()).toEqual('C')
	expect(testList.previous()).toEqual('B')
	expect(testList.next()).toEqual('C')
	expect(testList.next()).toEqual("you've reached the end of the list")
	expect(testList.last()).toEqual('C')
	testList.insert('D', 35);
	expect(testList.last()).toEqual('D')
	expect(testList.next()).toEqual("you've reached the end of the list")
	expect(testList.previous()).toEqual('C')
	expect(testList.previous()).toEqual('B')
	expect(testList.previous()).toEqual("A")
	expect(testList.insert('E' ,90))
	expect(testList.showCurrent()).toEqual("E")
	expect(testList.previous()).toEqual('A')
	expect(testList.next()).toEqual('E')
	expect(testList.next()).toEqual('B')
	// console.log('again', testList)
	});

test('test the LinkedList class for delete', () => {
	const testList = new LinkedList();
	testList.insert('X', 89);
	expect(testList.previous()).toEqual("you've reached the start of the list")
	// console.log('the list', testList)
	// console.log('first',testList.first())
	testList.delete()
	// console.log('delete first', testList)
	expect(testList.showCurrent()).toEqual("error");
	expect(testList.delete()).toEqual(undefined)
	testList.insert('A', 90)
	testList.insert('B', 79)
	testList.insert('C', 39)
	console.log('add 3', testList)
	expect(testList.first()).toEqual('A');
	expect(testList.showCurrent()).toEqual('A')
	expect(testList.next()).toEqual('B')
	expect(testList.showCurrent()).toEqual('B')
	expect(testList.next()).toEqual('C')
	expect(testList.showCurrent()).toEqual('C')
	testList.previous()
	expect(testList.showCurrent()).toEqual('B')
	testList.delete()
	// console.log('delete middle', testList)
	expect(testList.showCurrent()).toEqual('A');
	testList.delete();
	// console.log('delete front', testList)
	testList.delete();
	// console.log('delete last remaining node', testList)
	testList.insert('A', 90)
	testList.insert('B', 79)
	testList.insert('C', 39)
	expect(testList.last()).toEqual('C');
	testList.delete();
	// console.log('delete last node', testList)
	testList.delete()
	testList.delete()
	// console.log('delete all links', testList)
	testList.insert('A', 90)
	testList.insert('B', 79)
	testList.insert('C', 39)
	testList.first()
	testList.next()
	expect(testList.showCurrent()).toEqual('B');
	testList.delete()
	console.log('delete middle guy', testList)
	testList.delete()
	testList.delete()
	console.log('final test', testList)

	});