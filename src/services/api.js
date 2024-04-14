import axios from 'axios';

// Base da URL  = https://api.themoviedb.org/3/

// url da api 

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;