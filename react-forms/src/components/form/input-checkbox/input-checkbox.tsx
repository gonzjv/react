import React from 'react';
import './input-checkbox.scss';

interface MyProps {
  onChange: Function;
}

const InputCheckbox = ({
  onChange,
}: MyProps): JSX.Element => (
  <label htmlFor="agree">
    Of course, you agree :
    <input
      type="checkbox"
      name="agree"
      onChange={() => onChange((prev: boolean) => !prev)}
    />
  </label>
);
export default InputCheckbox;
