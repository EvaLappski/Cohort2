import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MathComp from './components/MathComp'
import AccountComp from './components/AccountComp'
import AccountsComp from './components/AccountsComp'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('renders MathComp without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<MathComp />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// it('renders AccountComp without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<AccountComp />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// it('renders AccountsComp without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<AccountsComp />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });




