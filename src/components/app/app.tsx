import { AxiosResponse } from 'axios';
import React, { ChangeEvent, useState } from 'react';
import axiosInstance from '../../service/api';
import { get200_photos, Photo } from '../../types';
import './app.scss';
import { Photos } from './photos/photos';

const App = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  const handleSubmit = async (
    e: ChangeEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const axiosResponse: AxiosResponse<get200_photos> =
        await axiosInstance.get(
          `?method=flickr.photos.search&api_key=38df490aac0e0efee1d8819ba647ebba&tags=${searchValue}&per_page=5&format=json&nojsoncallback=1`,
        );
      setPhotos(axiosResponse.data.photos.photo);
      console.log(axiosResponse.data.photos);
      // console.log('photos: ', photos);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = e.target;
    setSearchValue(value);
  };
  // console.log('formValues: ', formValues);
  return (
    <div className="app">
      <form className="search-form" onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            value={searchValue}
            onChange={handleChange}
            disabled={isLoading}
          />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Search'}
        </button>
      </form>
      {console.log('photos: ', photos)}
      <Photos photos={photos} />
    </div>
  );
};
export default App;
