import './style-card.scss';

import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { IMovie } from '../../services/MoviesModels';
import { addMovie, removeMovie } from '../../store/actions/playlist.action';

interface IMovieCardProps {
  movie: IMovie;
}

const CardMovie = ({ movie }: IMovieCardProps) => {
  const { pathname } = useLocation();
  const dispatcher = useDispatch();

  const urlImg =
    "https://image.tmdb.org/t/p/w220_and_h330_face/" + movie.poster_path;

  return (
    <>
      <div className="card">
        <div className="card_left">
          <img src={urlImg} />
        </div>

        <div className="card_right">
          <h1>{movie.title}</h1>

          <p>{movie.overview || "Ops... Overview não disponivel..."}</p>
          {pathname !== "/playlist" ? (
            <div>
              <a
                className="btn"
                onClick={() =>
                  dispatcher(
                    addMovie({
                      id: movie.id,
                      title: movie.title,
                      overview: movie.overview,
                      poster_path: movie.poster_path,
                    })
                  )
                }
              >
                adicionar
              </a>
              <Link className="btn" to={`${movie.id}`}>
                detalhes
              </Link>
            </div>
          ) : (
            <div>
              <a
                className="btn"
                onClick={() => dispatcher(removeMovie(movie.id))}
              >
                remover
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardMovie;
