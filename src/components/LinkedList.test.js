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
	console.log('the list', testList)
	testList.insert('Shane', 89)
	expect(testList.first()).toEqual('Shane')
	expect(testList.last()).toEqual('Shane')
	expect(testList.next()).toEqual("you've reached the end of the list")
	console.log('the list with Shane', testList)
	testList.insert('Eva', 99)
	expect(testList.first()).toEqual('Shane')
	expect(testList.next()).toEqual('Eva')
	expect(testList.next()).toEqual("you've reached the end of the list")
	expect(testList.last()).toEqual('Eva')
	console.log('the list again with Eva', testList)
	testList.insert('Dima', 79)
	expect(testList.first()).toEqual('Shane')
	expect(testList.next()).toEqual('Eva')
	expect(testList.next()).toEqual('Dima')
	console.log(testList.showCurrent())
	expect(testList.previous()).toEqual('Eva')
	console.log(testList.showCurrent())
	expect(testList.next()).toEqual('Dima')
	expect(testList.next()).toEqual("you've reached the end of the list")
	//console.log('the list once more with Dima', testList)
	expect(testList.last()).toEqual('Dima')
	console.log(testList.showCurrent())
	testList.insert('Larry', 35);
	expect(testList.last()).toEqual('Larry')
	expect(testList.next()).toEqual("you've reached the end of the list")
	expect(testList.previous()).toEqual('Dima')
	expect(testList.previous()).toEqual('Eva')
	expect(testList.previous()).toEqual("Shane")
	expect(testList.insert('Ian' ,90))
	expect(testList.showCurrent()).toEqual("Ian")
	console.log('the list', testList)
	expect(testList.previous()).toEqual('Shane')
	
	// testList.next()
	// console.log('the list', testList)
	// testList.previous()
	// testList.previous()
	// console.log('again', testList)
	// testList.delete()
	// console.log('delete', testList)
	// expect(testList.first()).toEqual('Shane')
	// expect(testList.next()).toEqual('Ian')
	// // expect(testList.previous()).toEqual("you've reached the start of the list")
	});

// test('test the LinkedList class', () => {
// 	const testList = new LinkedList();
// 	console.log('the list', testList)
// 	testList.insert('Shane', 89)
// 	console.log('the list', testList)
// 	console.log('first',testList.first())
// 	testList.delete()
// 	console.log('delete first', testList)
// 	expect(testList.delete()).toEqual(undefined)
// 	testList.insert('Eva', 90)
// 	testList.insert('Dima', 79)
// 	testList.insert('Ian', 39)
// 	console.log('add 3', testList)
// 	expect(testList.first()).toEqual('Eva');
// 	expect(testList.next()).toEqual('Dima')
// 	expect(testList.showCurrent()).toEqual('Dima')
// 	console.log('Dima', testList)
// 	testList.delete()
// 	console.log('delete Dima', testList)
// 	expect(testList.showCurrent()).toEqual('Eva');
// 	// console.log('test', testList.next())
// 	// expect(testList.)


// 	// testList.insert('Larry', 67)
// 	// expect(testList.first()).toEqual('Shane')
// 	// testList.next()
// 	// console.log('the list', testList)
	
// 	// console.log('the list', testList)


// 	});