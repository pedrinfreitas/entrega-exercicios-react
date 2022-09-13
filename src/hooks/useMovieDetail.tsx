import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MoviesService } from '../services/MovieService';
import { IMovie } from '../services/MoviesModels';

export const useMovieDetails = () => {
  const params = useParams();
  const id = params.movieId || "";

  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    MoviesService.getMoviesDetails(id).then((response) => {
      setMovie(response.data);
    });
  }, []);

  return movie;
};
