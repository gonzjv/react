import React from 'react';
// import { Photo } from '../../types';
import './photos.scss';

interface Myprops {
  photos: {
    id: string;
    owner: string;
    secret: string;
    server: string;
    title: string;
  }[];
}

export const Photos = ({ photos }: Myprops) => (
  <ul className="photos">
    {photos.map(({
      id,
      owner,
      secret,
      title,
      server,
    }) => (
      <li className="photo-elem" key={id}>
        <p>
          Title:
          {title}
        </p>
        <p>
          Owner:
          {owner}
        </p>
        <p>
          ID:
          {id}
        </p>
        <img
          src={`https://live.staticflickr.com/${server}/${id}_${secret}_w.jpg`}
          alt=""
        />
      </li>
    ))}
  </ul>
);
