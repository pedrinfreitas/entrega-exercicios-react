import './style-navbar.scss';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { IInitialState } from '../../store/reducers/playlist.reducer';

const Navbar = () => {
  const numberOfMoviesInPlaylist = useSelector(
    (state: { playlist: IInitialState }) => state.playlist
  ).playlist;

  return (
    <>
      <nav className="navbar">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="movie">Movies ex-II</Link>
        </div>
        <div>
          <Link to="todo">TODO ex-III</Link>
        </div>
        <div>
          <Link to="movie/610150">REDUX ex-IV</Link>
        </div>
        <div>
          <Link to="/playlist">Playlist</Link>
          <small> {numberOfMoviesInPlaylist.length} </small>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
