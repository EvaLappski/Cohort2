import React from 'react';
import ReactDOM from 'react-dom';
import CityDetails from './components/CityDetails'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const dummyTest = () => {}
  ReactDOM.render(<CityDetails passCity={''} passCommunity={[]} passMoveOut={dummyTest} passMoveIn={dummyTest} />, div);
  ReactDOM.unmountComponentAtNode(div);
});


