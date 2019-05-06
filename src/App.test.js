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






