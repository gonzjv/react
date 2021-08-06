import React from 'react';
import './input-bike.scss';

interface MyProps {
  value: string;
  onChange: Function;
  errorsBike: boolean;
}

const InputBike = ({
  value,
  onChange,
  errorsBike,
}: MyProps): JSX.Element => (
  <label htmlFor="bike">
    <p>
      Bike:
      {errorsBike && (
        <span className="valid-message">
          * you must fiil bike model
        </span>
      )}
    </p>
    <input
      type="text"
      value={value}
      name="text"
      onChange={(event) => onChange(event.target.value)}
    />
  </label>
);
export default InputBike;
