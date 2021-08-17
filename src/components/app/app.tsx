import React from 'react';
import './app.scss';
import Home from '../home/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header/header';
import About from '../about/about';

const App = (): JSX.Element => {
  return (
    <Router>
      <Header />
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
