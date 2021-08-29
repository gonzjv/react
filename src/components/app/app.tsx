import React from 'react';
import './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import Home from '../home/home';
import Header from '../header/header';
import About from '../about/about';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NotFound from '../not-found/not-found';
import Content from '../content/content';

const App = (): JSX.Element => {
  return (
    <Router>
      <Header />
      <Content />
    </Router>
  );
};
export default App;
