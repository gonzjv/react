import React from 'react';
import Card from './card/card';
import './cards.scss';
import ducatiUrl from '../../assets/ducati.jpg';
import bmwUrl from '../../assets/bmw.jpg';
import mercUrl from '../../assets/mercedes.jpg';
import harleyUrl from '../../assets/harley.jpg';
import opelUrl from '../../assets/opel.jpg';
import porscheUrl from '../../assets/porsche.jpg';

const Cards = (): JSX.Element => {
  //   const res = await fetch('./images.json');
  //   const images = res.json();
  const cardsArr = [
    {
      name: 'Ducati Pantah 500SL',
      year: 1977,
      PS: 62,
      url: ducatiUrl,
    },
    {
      name: 'BMW E21',
      year: 1976,
      PS: 109,
      url: bmwUrl,
    },
    {
      name: 'Mercedes Benz C123',
      year: 1982,
      PS: 136,
      url: mercUrl,
    },
    {
      name: 'Harley Davidson 63 FL',
      year: 1963,
      PS: 65,
      url: harleyUrl,
    },
    {
      name: 'Opel Kadett C Limousine',
      year: 1975,
      PS: 52,
      url: opelUrl,
    },
    {
      name: 'Porsche 911 Carrera',
      year: 1986,
      PS: 217,
      url: porscheUrl,
    },
  ];

  return (
    <section className="cards">
      {cardsArr.map((card) => (
        <Card
          name={card.name}
          year={card.year}
          PS={card.PS}
          imageUrl={card.url}
        />
      ))}
    </section>
  );
};
export default Cards;
