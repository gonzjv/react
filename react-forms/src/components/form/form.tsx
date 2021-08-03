import React, { useState } from 'react';
import './form.scss';

const Form = (): JSX.Element => {
  const [firstName, setFirstName] = useState('');
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('first name: ', firstName);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="firstName">
        Name:
        <input
          type="text"
          value={firstName}
          name="firstName"
          onChange={(event) =>
            setFirstName(event.target.value)
          }
        />
      </label>
      <input
        className="sendButton"
        type="submit"
        value="Send it for charity"
      />
    </form>
  );
};
export default Form;
