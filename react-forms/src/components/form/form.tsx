import React, { useState } from 'react';
import Input from '../_library/input/input';
import Select from '../_library/select/select';
import './form.scss';
import InputCheckbox from './input-checkbox/input-checkbox';

const Form = (): JSX.Element => {
  const [bike, setBike] = useState('');
  const [prodDate, setProdDate] = useState('');
  const [bikeColor, setColor] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Bike: ', bike);
    console.log('Production date: ', prodDate);
    console.log('Color: ', bikeColor);
    console.log('Agree: ', agree);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="Bike"
        value={bike}
        onChange={setBike}
      />
      <Input
        type="date"
        name="Production date"
        value={prodDate}
        onChange={setProdDate}
      />
      <Select
        name="Color"
        value={bikeColor}
        options={['unicorn pink', 'sky blue', 'acid green']}
        onChange={setColor}
      />
      <InputCheckbox onChange={setAgree} />
      <input
        className="sendButton"
        type="submit"
        value="Give it to T-800"
      />
    </form>
  );
};
export default Form;
