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
  <label className="agree-elem" htmlFor="agree">
    <p>Of course, you agree : </p>
    <input
      type="checkbox"
      name="agree"
      onChange={() => onChange((prev: boolean) => !prev)}
    />
    {errorsAgree && (
      <span className="valid-message">
        * you must be agree
      </span>
    )}
  </label>
);
export default InputCheckbox;
