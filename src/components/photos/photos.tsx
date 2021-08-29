import React from 'react';
import './photos.scss';
import { NavLink } from 'react-router-dom';

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
    {photos.map(({ id, owner, secret, title, server }) => (
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
        <NavLink
          to={`/details/${server}/${id}/${secret}`}
          exact
          activeClassName="active"
        >
          <img
            src={`https://live.staticflickr.com/${server}/${id}_${secret}_w.jpg`}
            alt=""
          />
        </NavLink>
      </li>
    ))}
  </ul>
);
