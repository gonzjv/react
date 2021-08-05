import React from 'react';
import './input-checkbox.scss';

interface MyProps {
  onChange: Function;
  errorsAgree: boolean;
}

const InputCheckbox = ({
  onChange,
  errorsAgree,
}: MyProps): JSX.Element => (
  <label htmlFor="agree">
    <p>
      Of course, you agree :
      {errorsAgree && <span> * you must be agree</span>}
    </p>
    <input
      type="checkbox"
      name="agree"
      onChange={() => onChange((prev: boolean) => !prev)}
    />
  </label>
);
export default InputCheckbox;
