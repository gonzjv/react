import React from 'react';
import './card.scss';

interface MyProps {
  name: string;
  year: number;
  PS: number;
  imageUrl: string;
}

const Card = ({
  name,
  year,
  PS,
  imageUrl,
}: MyProps): JSX.Element => (
  <>
    <div className="card">
      <img className="img" src={imageUrl} alt="" />
      <p>{name}</p>
      <p>
        Year:
        {year}
      </p>
      <p>
        PS:
        {PS}
      </p>
    </div>
  </>
);
export default Card;
