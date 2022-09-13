import axios from 'axios';

const API_KEY = "api_key=e4d51c962bed7243144cb07cd084dc74";
const BASE_URL = (path: string) =>
  `https://api.themoviedb.org/3/${path}?${API_KEY}&language=pt-BR`;

export const MoviesService = {
  //"d416af5d4faee64e25ab001d87aab5c3";
  getPopularMovies: () => axios(BASE_URL("movie/popular")),
  getMoviesDetails: (id: string) => axios(BASE_URL(`movie/${id}`)),
};
// export class MoviesService {
//   static API_KEY = "e4d51c962bed7243144cb07cd084dc74";
//   //"d416af5d4faee64e25ab001d87aab5c3";

//   static _withBaseUrl(path: string) {
//     return `https://api.themoviedb.org/3/${path}?api_key=${MoviesService.API_KEY}`;
//   }

//   static getPopularMovies() {
//     return axios(MoviesService._withBaseUrl("movie/popular"));
//   }
// }
