import React, { useEffect, useRef, useState } from 'react';
import Input from '../../_library/input/input';
import Select from '../../_library/select/select';
import './form.scss';
import InputBike from './input-bike/input-bike';
import InputCheckbox from './input-checkbox/input-checkbox';
import InputDate from './input_date/input-date';

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
  }, [bike, agree, prodDate, bikeColor]);

  const validate = () => {
    setErrors({});
    if (!agree) {
      setErrors((state) => ({ ...state, agree }));
    }
    if (bike === '') {
      setErrors((state) => ({ ...state, bike }));
    }
    if (prodDate === '') {
      setErrors((state) => ({ ...state, prodDate }));
    }
    console.log('errors: ', errors);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      setFormValues((state: []) => [
        ...state,
        { bike, prodDate, bikeColor, agree },
      ]);
    }
    reset();
  };

  const reset = () => {
    setBike('');
    setProdDate('');
    setColor('');
    setAgree(false);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <InputBike
        value={bike}
        onChange={setBike}
        errorsBike={
          Object.keys(errors).includes('bike')
            ? true
            : false
        }
      />
      <InputDate
        value={prodDate}
        onChange={setProdDate}
        errorsDate={
          Object.keys(errors).includes('prodDate')
            ? true
            : false
        }
      />
      <Select
        name="Color"
        value={bikeColor}
        options={['unicorn pink', 'sky blue', 'acid green']}
        onChange={setColor}
      />
      <InputCheckbox
        onChange={setAgree}
        errorsAgree={
          Object.keys(errors).includes('agree')
            ? true
            : false
        }
      />
      <input
        // disabled={agree ? false : true}
        className="sendButton"
        type="submit"
        value="Give it to T-800"
      />
    </form>
  );
};
export default Form;
