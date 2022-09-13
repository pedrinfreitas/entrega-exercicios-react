import './styles.scss';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import TodoList from './components/TodoList/TodoList';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MoviePage from './pages/MoviePage';
import PlaylistPage from './pages/PLaylistPage';
import { store } from './store';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="movie" element={<MoviePage />} />
          <Route path="movie/:movieId" element={<MovieDetailsPage />} />
          <Route path="todo" element={<TodoList />} />
          <Route path="playlist" element={<PlaylistPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
