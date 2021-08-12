import React from 'react';
import './input-switcher.scss';

interface MyProps {
  onChange: Function;
  returnAfter: boolean;
}

const InputSwitcher = ({
  onChange,
  returnAfter,
}: MyProps): JSX.Element => (
  <>
    <label htmlFor="switcher">
      <input
        className="switcher__input"
        type="checkbox"
        // name="switcher"
        id="switcher"
        checked={returnAfter}
        onChange={() => onChange((prev: boolean) => !prev)}
      />
      <div className="switcher__label">
        <span className="switcher__text">
          Return after use
        </span>
      </div>
    </label>
  </>
);
export default InputSwitcher;
