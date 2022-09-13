import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { MoviesService } from '../services/MovieService';
import { IMovie } from '../services/MoviesModels';

const MovieDetailsPage = () => {
  let params = useParams();
  let id = params.movieId || "";

  console.log(id);
  const [movie, setMovie] = useState<IMovie>({});

  useEffect(() => {
    MoviesService.getMoviesDetails(id).then((response) => {
      setMovie(response.data);
    });
  }, []);

  const urlImg =
    "https://image.tmdb.org/t/p/w220_and_h330_face/" + movie.poster_path;

  return (
    <>
      <div>
        <h1>Detalhes {params.movieId}</h1>
        <div className="card">
          {/* IMAGEM */}
          <div className="card_left">
            <img src={urlImg} width="220" />
          </div>

          {/* TEXTOS */}
          <div className="card_right">
            <h1>{movie.title}</h1>

            {/* <h2>{cores || "2"}</h2> */}

            <p>{movie.overview}</p>
            <Link className="card_btn" to="/movie">
              VOLTAR
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
