import React from 'react';
import './per-page.scss';

interface MyProps {
  value: string;
  options: string[];
  onChange: Function;
}

const SelectPerPage = ({ value, options, onChange }: MyProps): JSX.Element => (
  <label htmlFor="per-page">
    Results per page:
    <select
      name="per-page"
      id="per-page"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((elem) => (
        <option value={elem} key={elem}>
          {elem}
        </option>
      ))}
    </select>
  </label>
);
export default SelectPerPage;
