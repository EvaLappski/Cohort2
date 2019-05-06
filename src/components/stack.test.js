import Stack from './stack'

test('test the class queue', () => {
	const test = new Stack();
	expect(test.getLength()).toEqual(0);
	expect(test.push('Eva')).toEqual(['Eva']);
	expect(test.getLength()).toEqual(1);
	expect(test.push("Shane")).toEqual(['Eva', 'Shane']);
	expect(test.getLength()).toEqual(2)
	expect(test.pop()).toEqual(['Eva'])
	expect(test.pop()).toEqual([])
	});