import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/', // 'https://allanflix.herokuapp.com/',
});

export default api;
