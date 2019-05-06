import Queue from './queue'

test('test the class queue', () => {
	const test = new Queue();
	expect(test.getLength()).toEqual(0);
	expect(test.push('Eva')).toEqual(['Eva']);
	expect(test.getLength()).toEqual(1);
	expect(test.push("Shane")).toEqual(['Eva', 'Shane']);
	expect(test.getLength()).toEqual(2)
	expect(test.shift()).toEqual(['Shane'])
	expect(test.shift()).toEqual([])
	});