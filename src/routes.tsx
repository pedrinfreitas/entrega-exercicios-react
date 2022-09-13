import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MoviePage from './pages/MoviePage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviePage />} />
      <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
    </Routes>
  );
};

export default MainRoutes;
