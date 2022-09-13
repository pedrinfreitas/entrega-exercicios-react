import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useMovieDetails } from '../hooks/useMovieDetail';

const MovieDetailsPage = () => {
  const movie = useMovieDetails();

  const urlImg =
    "https://image.tmdb.org/t/p/w220_and_h330_face/" + movie?.poster_path;

  return (
    <>
      <div>
        <h1>Detalhes </h1>
        <div className="card">
          <div className="card_left">
            <img src={urlImg} width="220" />
          </div>

          <div className="card_right">
            <h1>{movie?.title}</h1>

            <p>{movie?.overview}</p>
            <Link className="btn" to="/movie">
              VOLTAR
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
