import React from 'react';
import './select.scss';

interface MyProps {
  name: string;
  value: string;
  options: string[];
  onChange: Function;
}

const Select = ({
  name,
  value,
  options,
  onChange,
}: MyProps): JSX.Element => (
  <label htmlFor={name}>
    {name}:
    <select
      name={name}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((elem, id) => (
        <option key={id}>{elem}</option>
      ))}
    </select>
  </label>
);
export default Select;
