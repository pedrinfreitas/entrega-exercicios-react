import { useEffect, useState } from 'react';

import CardMovie from '../components/CardMovie';
import { useMovies } from '../hooks/useMovie';
import { IMovie } from '../services/MoviesModels';

const MoviePage = () => {
  const movies = useMovies();

  return (
    <>
      <h1>Movie</h1>
      <ul className="card-grid">
        {movies.map((m: IMovie) => (
          <CardMovie key={m.id} movie={m} />
        ))}
      </ul>
    </>
  );
};

export default MoviePage;
