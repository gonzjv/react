import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://www.flickr.com/services/rest/',
  timeout: 3000,
  //   headers: { 'X-Custom-Header': 'foobar' },
});

export default axiosInstance;
