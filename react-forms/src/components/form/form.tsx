import React, { useState } from 'react';
import Input from '../_library/input/input';
import Select from '../_library/select/select';
import './form.scss';

const Form = (): JSX.Element => {
  const [bike, setBike] = useState('');
  const [prodDate, setProdDate] = useState('');
  const [bikeColor, setColor] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Bike: ', bike);
    console.log('Production date: ', prodDate);
    console.log('Color: ', bikeColor);
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
      <input
        className="sendButton"
        type="submit"
        value="Give it to T-800"
      />
    </form>
  );
};
export default Form;
