import { AxiosResponse } from 'axios';
import React, { ChangeEvent, useState } from 'react';
import axiosInstance from '../../service/api';
import { get200_photos, Photo } from '../../types';
import './app.scss';
import { Photos } from '../photos/photos';
import Sorting from '../sorting/sorting';
import SelectPerPage from '../per-page/per-page';
import InputPage from '../input-page/input-page';

const App = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [sortType, setSortType] = useState('date-posted-asc');
  const [perPage, setPerPage] = useState('5');
  const [pageNumber, setPageNumber] = useState('1');
  const [pages, setPages] = useState(0);

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const axiosResponse: AxiosResponse<get200_photos> = await axiosInstance.get(
        `?method=flickr.photos.search&api_key=38df490aac0e0efee1d8819ba647ebba&tags=
        ${searchValue}&sort=${sortType}&per_page=${perPage}&page=${pageNumber}&format=json&nojsoncallback=1`,
      );
      setPhotos(axiosResponse.data.photos.photo);
      setPages(axiosResponse.data.photos.pages);
      // console.log('photos: ', photos);
    } catch (err) {
      // console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };
  // console.log('formValues: ', formValues);
  return (
    <div className="app">
      <h2>Flickr 🌳 explore</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-field">
          <label className="search-label" htmlFor="search">
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
        </div>
        <div className="params">
          <Sorting
            value={sortType}
            options={[
              {
                text: 'Posted date',
                value: 'date-posted-asc',
              },
              {
                text: 'Taken date',
                value: 'date-taken-asc',
              },
              {
                text: 'Relevance',
                value: 'relevance',
              },
            ]}
            onChange={setSortType}
          />
          <SelectPerPage
            value={perPage}
            options={['5', '10', '20', '50']}
            onChange={setPerPage}
          />
          <InputPage
            value={pageNumber}
            onChange={setPageNumber}
            pages={pages}
          />
        </div>
      </form>
      <Photos photos={photos} />
    </div>
  );
};
export default App;
