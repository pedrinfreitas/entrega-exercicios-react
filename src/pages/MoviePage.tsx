import { useEffect, useState } from 'react';

import CardMovie from '../components/CardMovie';
import { MoviesService } from '../services/MovieService';
import { IMovie } from '../services/MoviesModels';

const MoviePage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    MoviesService.getPopularMovies().then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  return (
    <>
      <div>
        <h1>Movie</h1>

        <ul className="card-grid">
          {movies.map((m: IMovie) => (
            <CardMovie key={m.id} movie={m} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default MoviePage;
