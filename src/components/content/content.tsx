import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import About from '../about/about';
import { Details } from '../details/details';
import Home from '../home/home';
import NotFound from '../not-found/not-found';
import './content.scss';

const Content = (): JSX.Element => {
  const location = useLocation();

  return (
    <TransitionGroup className="content">
      <CSSTransition timeout={300} classNames="page" key={location.key}>
        <Switch location={location}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/details/:server/:id/:secret">
            <Details />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};
export default Content;
