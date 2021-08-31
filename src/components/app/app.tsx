import React from 'react';
import './app.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../header/header';
import Content from '../content/content';

const App = (): JSX.Element => (
  <Router>
    <Header />
    <Content />
  </Router>
);
export default App;
