import React, { useState } from 'react';
import Form from './form/form';
import './app.scss';
import Card from './card/card';

const App = (): JSX.Element => {
  const [formValues, SetFormValues] = useState([]);
  // console.log('formValues: ', formValues);
  return (
    <div className="app">
      <div>
        <h3> Electricity discharged sphere...</h3>
        <h3>
          &quot;I need your bike, clothes, personal
          data.&quot;
        </h3>
      </div>
      <Form setFormValues={SetFormValues} />
      <h4>
        &quot;Bad to the Bone – performed by George
        Thorogood & the Destroyers&quot;
      </h4>
      {formValues.map((elem, id) => {
        return <Card elem={elem} key={id} />;
      })}
    </div>
  );
};
export default App;
