import axios from 'axios';

const api = axios.create({
  baseURL: 'https://allanflix.herokuapp.com/',
});

export default api;
