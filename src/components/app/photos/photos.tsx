import React from 'react';
import { FC } from 'react';
import { Photo } from '../../../types';

export const Photos: FC<{ photos: Photo[] }> = ({
  photos,
}) => {
  return (
    <div>
      <ul>
        {photos.map(
          ({ id, owner, secret, title, server }) => {
            return (
              <li key={id}>
                <p>Title: {title}</p>
                <p>Owner: {owner}</p>
                <p>{secret}</p>
                <p>Server: {server}</p>
              </li>
            );
          },
        )}
      </ul>
    </div>
  );
};
