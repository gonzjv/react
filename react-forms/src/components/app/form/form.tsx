import React, { useEffect, useState } from 'react';
import Input from '../../_library/input/input';
import Select from '../../_library/select/select';
import './form.scss';
import InputCheckbox from './input-checkbox/input-checkbox';

interface MyProps {
  setFormValues: Function;
}

const Form = ({ setFormValues }: MyProps): JSX.Element => {
  const [bike, setBike] = useState('');
  const [prodDate, setProdDate] = useState('');
  const [bikeColor, setColor] = useState('');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validate();
  }, [agree, bike]);

  const validate = () => {
    setErrors({});
    if (!agree) {
      setErrors((state) => ({ ...state, agree }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      setFormValues((state: []) => [
        ...state,
        { bike, prodDate, bikeColor, agree },
      ]);
    }

    // console.log('Bike: ', bike);
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
      <InputCheckbox
        onChange={setAgree}
        errorsAgree={agree ? false : true}
      />
      <input
        disabled={agree ? false : true}
        className="sendButton"
        type="submit"
        value="Give it to T-800"
      />
    </form>
  );
};
export default Form;
