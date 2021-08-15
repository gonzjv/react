import React from 'react';
import { FC } from 'react';
import { Photo } from '../../types';
import './photos.scss';

export const Photos: FC<{ photos: Photo[] }> = ({
  photos,
}) => {
  return (
    <ul className="photos">
      {photos.map(
        ({ id, owner, secret, title, server }) => {
          return (
            <li className="photo-elem" key={id}>
              <p>Title: {title}</p>
              <p>Owner: {owner}</p>
              <p>ID: {id}</p>
              {/* <p>{secret}</p> */}
              {/* <p>Server: {server}</p> */}
              <img
                src={`https://live.staticflickr.com/${server}/${id}_${secret}_w.jpg`}
                alt=""
              />
            </li>
          );
        },
      )}
    </ul>
  );
};
