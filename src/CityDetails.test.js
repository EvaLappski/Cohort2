import React from 'react';
import ReactDOM from 'react-dom';
import CityDetails from './components/CityDetails'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CityDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});


