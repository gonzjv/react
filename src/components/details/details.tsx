import React, { EffectCallback, useEffect, useState } from 'react';
import './details.scss';
import { NavLink, useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { get200_photo, get200_photos, Photo } from '../../types';
import axiosInstance from '../../service/api';

interface Params {
  id: string;
  // owner: string;
  secret: string;
  server: string;
  // title: string;
}

export const Details = (): JSX.Element => {
  const [photoInfo, setPhotoInfo] = useState({
    id: '',
    dateuploaded: 0,
    license: 0,
    originalformat: '',
    owner: {
      realname: '',
    },
    title: {
      _content: '',
    },
    description: {
      _content: '',
    },
    dates: {
      posted: 0,
      taken: '',
    },
    views: '',
  });

  const { server, id, secret }: Params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const axiosResponse: AxiosResponse<get200_photo> =
          await axiosInstance.get(
            `?method=flickr.photos.getInfo&api_key=38df490aac0e0efee1d8819ba647ebba&photo_id=${id}&format=json&nojsoncallback=1`,
          );
        setPhotoInfo(axiosResponse.data.photo);
      } catch (err) {
        // console.log(err);
      } finally {
        //   setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="details">
      <img
        src={`https://live.staticflickr.com/${server}/${id}_${secret}_b.jpg`}
        alt=""
      />
      <p className="title">
        Title:
        {photoInfo.title._content}
      </p>
      <p className="title">
        Description:
        {photoInfo.description._content}
      </p>
      <p>
        ID:
        {id}
      </p>
      <p>
        Upload date:
        {photoInfo.dateuploaded}
      </p>
      <p>
        Posted:
        {photoInfo.dates.posted}
      </p>
      <p>
        Taken:
        {photoInfo.dates.taken}
      </p>
      <p>
        License:
        {photoInfo.license}
      </p>
      <p>
        Original format:
        {photoInfo.originalformat}
      </p>
      <p>
        Owner:
        {photoInfo.owner.realname}
      </p>
      <p>
        Views:
        {photoInfo.views}
      </p>
    </main>
  );
};
