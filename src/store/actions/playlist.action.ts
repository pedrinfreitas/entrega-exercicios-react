export const SET_MOVIE = "SET_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const CLEAR_PLAYLIST = "CLEAR_PLAYLIST";

export interface IActionMovie {
  type: string;
  payload?: IPayloadActionMovie;
}

interface IPayloadActionMovie {
  id: number;
  title?: string;
  overview?: string;
  poster_path?: string;
}

export const addMovie = (movie: IPayloadActionMovie) => ({
  type: SET_MOVIE,
  payload: movie,
});

export const removeMovie = (idMovie: number) => ({
  type: REMOVE_MOVIE,
  payload: idMovie,
});

export const clearPLaylist = () => ({
  type: CLEAR_PLAYLIST,
});
