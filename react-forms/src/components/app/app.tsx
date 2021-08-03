import React from 'react';
import Form from '../form/form';
import './app.scss';

const App = (): JSX.Element => (
  <div className="app">
    <h3>I need your bike, clothes and personal data!</h3>
    <Form />
  </div>
);
export default App;
