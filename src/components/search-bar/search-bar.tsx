import React from 'react';
import './search-bar.scss';

interface MyProps {
  placeholder: string;
}

const SearchBar = (props: MyProps): JSX.Element => (
  <input
    className="search-bar"
    type="text"
    name="input"
    placeholder={props.placeholder}
  />
);
export default SearchBar;
