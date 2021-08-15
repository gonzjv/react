import React from 'react';
import './sorting.scss';

interface MyProps {
  value: string;
  options: {
    text: string;
    value: string;
  }[];
  onChange: Function;
}

const Sorting = ({
  value,
  options,
  onChange,
}: MyProps): JSX.Element => (
  <label>
    Sorting:
    <select
      name="sorting"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((elem) => (
        <option value={elem.value} key={elem.text}>
          {elem.text}
        </option>
      ))}
    </select>
  </label>
);
export default Sorting;
