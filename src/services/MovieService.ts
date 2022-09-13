import axios from 'axios';

// const API_KEY = import.meta.env.CHAVE_API;
const API_KEY = "d416af5d4faee64e25ab001d87aab5c3";
const BASE_URL = (path: string) =>
  `https://api.themoviedb.org/3/${path}?api_key=${API_KEY}&language=pt-BR`;

export const MoviesService = {
  getPopularMovies: () => axios(BASE_URL("movie/popular")),
  getMoviesDetails: (id: string) => axios(BASE_URL(`movie/${id}`)),
};
