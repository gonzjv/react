import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = (): JSX.Element => (
  <header className="header">
    <h2>Flickr 🌳 explore</h2>
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/react/react-routing" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/react/react-routing/about" activeClassName="active">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
export default Header;
