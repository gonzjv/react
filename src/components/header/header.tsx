import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <h2>Flickr 🌳 explore</h2>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
