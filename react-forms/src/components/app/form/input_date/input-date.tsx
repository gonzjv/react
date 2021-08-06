import React from 'react';
import './input-date.scss';

interface MyProps {
  value: string;
  onChange: Function;
  errorsDate: boolean;
}

const InputDate = ({
  value,
  onChange,
  errorsDate,
}: MyProps): JSX.Element => (
  <label htmlFor="bike">
    <p>
      Production date:
      {errorsDate && (
        <span className="valid-message">
          * you must choose the date
        </span>
      )}
    </p>
    <input
      type="date"
      value={value}
      name="date"
      onChange={(event) => onChange(event.target.value)}
    />
  </label>
);
export default InputDate;
