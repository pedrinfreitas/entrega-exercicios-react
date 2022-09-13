import './style-card.scss';

import { Link } from 'react-router-dom';

import { IMovie } from '../../services/MoviesModels';

interface IMovieCardProps {
  movie: IMovie;
}

const CardMovie = ({ movie }: IMovieCardProps) => {
  const urlImg =
    "https://image.tmdb.org/t/p/w220_and_h330_face/" + movie.poster_path;

  return (
    <>
      <div className="card">
        {/* IMAGEM */}
        <div className="card_left">
          <img src={urlImg} />
        </div>

        {/* TEXTOS */}
        <div className="card_right">
          <h1>{movie.title}</h1>

          {/* <h2>{cores || "2"}</h2> */}

          <p>{movie.overview}</p>
          <Link className="card_btn" to={`${movie.id}`}>
            DETALHES
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardMovie;
