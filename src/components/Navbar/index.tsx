import './style-navbar.scss';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="movie">Movies ex-II</Link>
        <Link to="todo">TODO ex-III</Link>
        <Link to="movie/610150">REDUX ex-IV</Link>
      </nav>
    </>
  );
};

export default Navbar;
