import { CLEAR_PLAYLIST, REMOVE_MOVIE, SET_MOVIE } from '../actions/playlist.action';
import { IMovie } from './../../services/MoviesModels';

export interface IInitialState {
  playlist: IMovie[];
}

const initialState: IInitialState = {
  playlist: [],
};

const notRepeat = (playlist: IMovie[], idMovie: number) =>
  playlist.findIndex((e) => e.id === idMovie);

const removeMovie = (playlist: IMovie[], idMovie: number) =>
  playlist.filter((e) => e.id !== idMovie);

export const playlist = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_MOVIE:
      if (notRepeat(state.playlist, action.payload.id) < 0) {
        return {
          ...state,
          playlist: state.playlist.concat(action.payload),
        };
      }
      return {
        ...state,
      };

    case REMOVE_MOVIE:
      return {
        ...state,
        playlist: removeMovie(state.playlist, action.payload),
      };

    case CLEAR_PLAYLIST:
      return {
        ...state,
        playlist: [],
      };
    default:
      return state;
  }
};
