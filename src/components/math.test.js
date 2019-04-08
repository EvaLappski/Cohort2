import React from 'react'
import ReactDOM from 'react-dom'
import math from "./math";
import MathComp from "./MathComp"

test('Test the math functions', () => {
	expect(math.sum(10,2)).toBe(12);
	expect(math.product(10,2)).toBe(20);
	expect(math.difference(10,2)).toBe(8);
	expect(math.quotient(10,2)).toBe(5);
});


it('MathComp renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MathComp/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
