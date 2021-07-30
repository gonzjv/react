import React from 'react';
import SearchBar from '../search-bar/search-bar';
import './app.scss';

const App = (): JSX.Element => (
  <div>
    <h1>Hello from React, man!</h1>
    <SearchBar placeholder="🔎 Search" />
  </div>
);
export default App;
