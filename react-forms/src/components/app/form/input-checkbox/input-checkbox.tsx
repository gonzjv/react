import React from 'react';
import './input-checkbox.scss';

interface MyProps {
  onChange: Function;
  errorsAgree: boolean;
  agree: boolean;
}

const InputCheckbox = ({
  onChange,
  errorsAgree,
  agree,
}: MyProps): JSX.Element => (
  <label className="agree-elem" htmlFor="agree">
    <p>Of course, you agree : </p>
    <input
      type="checkbox"
      name="agree"
      checked={agree}
      onChange={() => onChange((prev: boolean) => !prev)}
    />
    {errorsAgree && (
      <span className="valid-message">
        * box is waiting for your touch...
      </span>
    )}
  </label>
);
export default InputCheckbox;
