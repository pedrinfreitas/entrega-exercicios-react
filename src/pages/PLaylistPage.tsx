import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardMovie from '../components/CardMovie';
import { IMovie } from '../services/MoviesModels';
import { clearPLaylist } from '../store/actions/playlist.action';
import { IInitialState } from '../store/reducers/playlist.reducer';

const PlaylistPage = () => {
  const playlist = useSelector(
    (state: { playlist: IInitialState }) => state.playlist
  ).playlist;
  const dispatcher = useDispatch();

  return (
    <>
      <div>
        <h1>Playlist </h1>

        <ul className="card-grid">
          {playlist.length ? (
            <>
              <div className="btn-center">
                <a className="btn" onClick={() => dispatcher(clearPLaylist())}>
                  Limpar playlist
                </a>
              </div>

              {playlist.map((m: IMovie) => (
                <CardMovie key={m.id} movie={m} />
              ))}
            </>
          ) : (
            <p> Playlist vazia! </p>
          )}
        </ul>
      </div>
    </>
  );
};

export default PlaylistPage;
