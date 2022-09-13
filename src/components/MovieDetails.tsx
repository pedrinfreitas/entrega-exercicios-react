import { useEffect, useState } from 'react';

import { MoviesService } from '../services/MovieService';
import { IMovie } from '../services/MoviesModels';

const MovieDetails = () => {
  const id = "1";

  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const {
      data: { results },
    } = await MoviesService.getMoviesDetails(id);

    setMovie(results);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <ul>
        {movie.map((m: IMovie) => (
          <li>
            <p>{m.id}</p>
            <p>{m.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieDetails;
