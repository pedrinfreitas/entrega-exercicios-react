import { useEffect, useState } from 'react';

import { MoviesService } from '../services/MovieService';
import { IMovie } from '../services/MoviesModels';

export const useMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    MoviesService.getPopularMovies().then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return movies;
};
