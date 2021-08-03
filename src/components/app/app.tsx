import React from 'react';
import Cards from '../cards/cards';
import SearchBar from '../search-bar/search-bar';
import './app.scss';

const App = (): JSX.Element => (
  <div className="app">
    <h1>Hello from React, man!</h1>
    <SearchBar placeholder="🔎 Search" />
    <Cards />
  </div>
);
export default App;
