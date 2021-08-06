import React from 'react';
import './card.scss';

interface MyProps {
  elem: {
    bike: string;
    prodDate: string;
    bikeColor: string;
  };
}

const Card = ({ elem }: MyProps): JSX.Element => (
  <>
    <div className="card">
      <p>
        Bike:
        {elem.bike}
      </p>
      <p>
        Production date:
        {elem.prodDate}
      </p>
      <p>
        Color:
        {elem.bikeColor}
      </p>
    </div>
  </>
);
export default Card;
