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
          <Link to="movie">Movies EX2</Link>
        </div>
        <div>
          <Link to="todo">TodoList EX3</Link>
        </div>
        <div>
          <Link to="/playlist">Playlist EX4</Link>
          <small> {numberOfMoviesInPlaylist.length} </small>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
