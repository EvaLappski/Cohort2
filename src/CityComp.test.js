import React from 'react';
import ReactDOM from 'react-dom';
import CityComp from './components/CityComp'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CityComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});


