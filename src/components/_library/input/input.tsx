import React from 'react';
import './input.scss';

interface MyProps {
  type: string;
  name: string;
  value: string;
  //   onSubmit: FormEventHandler;
  onChange: Function;
}

const Input = ({
  type,
  name,
  value,
  onChange,
}: MyProps): JSX.Element => (
  <label htmlFor={name}>
    {name}
    :
    <input
      type={type}
      value={value}
      name={name}
      onChange={(event) => onChange(event.target.value)}
    />
  </label>
);
export default Input;
