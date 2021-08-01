import React from 'react';
import './card.scss';

interface MyProps {
  name: string;
  year: number;
  PS: number;
  imageUrl: string;
}

const Card = (props: MyProps): JSX.Element => (
  <>
    <div className="card">
      <img className="img" src={props.imageUrl} alt="" />
      <p>{props.name}</p>
      <p>Year: {props.year}</p>
      <p>PS: {props.PS}</p>
    </div>
  </>
);
export default Card;
