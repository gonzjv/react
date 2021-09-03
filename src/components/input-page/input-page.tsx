import React from 'react';
import './input-page.scss';

interface MyProps {
  value: string;
  onChange: Function;
  pages: number;
}

const InputPage = ({ value, onChange, pages }: MyProps): JSX.Element => (
  <label className="page" htmlFor="page">
    Page:
    <input
      className="input"
      type="text"
      value={value}
      name="page"
      onChange={(event) => onChange(event.target.value)}
    />
    <p className="pages">
      <span>/</span>
      {pages}
    </p>
  </label>
);
export default InputPage;
