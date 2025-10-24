import axios from 'axios';
import { TMDB_API_KEY } from '@env';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 10000,
});

export const searchMovies = async (query, page = 1) => {
  const res = await api.get('/search/movie', {
    params: {
      api_key: TMDB_API_KEY,
      query,
      page,
      language: 'pt-BR',
      include_adult: false,
    },
  });
  return res.data;
};

export const getMovieDetails = async (movieId) => {
  const res = await api.get(`/movie/${movieId}`, {
    params: {
      api_key: TMDB_API_KEY,
      language: 'pt-BR',
    },
  });
  return res.data;
};

export default api;
