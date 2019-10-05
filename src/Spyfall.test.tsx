import React from 'react';
import ReactDOM from 'react-dom';
import Spyfall from './Spyfall';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Spyfall />, div);
  ReactDOM.unmountComponentAtNode(div);
});
