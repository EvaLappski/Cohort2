import React from 'react';
import ReactDOM from 'react-dom';
import WorkflowComp from './components/WorkflowComp'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WorkflowComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});