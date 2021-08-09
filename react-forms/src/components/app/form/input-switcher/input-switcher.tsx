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
    <input
      className="switcher__input"
      type="checkbox"
      name="return"
      id="switcher"
      checked={returnAfter}
      onChange={() => onChange((prev: boolean) => !prev)}
    />
    <label className="switcher__label" htmlFor="switcher">
      <span className="switcher__text">
        Return after use
      </span>
    </label>
  </>
  //   <label className="return-elem" htmlFor="agree">
  //     <p>Of course, you agree : </p>
  //     <input
  //       type="checkbox"
  //       name="agree"
  //       checked={returnAfter}
  //       onChange={() => onChange((prev: boolean) => !prev)}
  //     />
  //   </label>
);
export default InputSwitcher;
