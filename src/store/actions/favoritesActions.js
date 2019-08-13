const ADD_FAVORITE_START = 'ADD_FAVORITE_START';

const addFavoriteStart = ({ imdbID, Title, Year, Poster, rating, review }) => ({
  type: ADD_FAVORITE_START,
  imdbID,
  Title,
  Year,
  Poster,
  rating,
  review
});

const ADD_FAVORITE_COMPLETED = 'ADD_FAVORITE_COMPLETED';

const addFavoriteCompleted = payload => ({
  type: ADD_FAVORITE_COMPLETED,
  message: { ...payload }
});

const ADD_FAVORITE_FAILED = 'ADD_FAVORITE_FAILED';

const addFavoriteFailed = ({ message }) => ({
  type: ADD_FAVORITE_FAILED,
  error: {
    message
  }
});

const GET_ALL_FAVORITES_START = 'GET_ALL_FAVORITES_START';

const getAllFavoritesStart = () => ({ type: GET_ALL_FAVORITES_START });

const GET_ALL_FAVORITES_COMPLETED = 'GET_ALL_FAVORITES_COMPLETED';

const getAllFavoritesCompleted = payload => ({
  type: GET_ALL_FAVORITES_COMPLETED,
  message: { ...payload }
});

const GET_ALL_FAVORITES_FAILED = 'GET_ALL_FAVORITES_FAILED';

const getAllFavoritesFailed = ({ message }) => ({
  type: GET_ALL_FAVORITES_FAILED,
  error: {
    message
  }
});

const UPDATE_FAVORITE_START = 'UPDATE_FAVORITE_START';

const updateFavoriteStart = (movieReview, favoriteMovies) => ({
  type: UPDATE_FAVORITE_START,
  movieReview,
  favoriteMovies
});

const UPDATE_FAVORITE_COMPLETED = 'UPDATE_FAVORITE_COMPLETED';

const updateFavoriteCompleted = payload => ({
  type: UPDATE_FAVORITE_COMPLETED,
  message: { ...payload }
});

const UPDATE_FAVORITE_FAILED = 'UPDATE_FAVORITE_FAILED';

const updateFavoriteFailed = ({ message }) => ({
  type: UPDATE_FAVORITE_FAILED,
  error: {
    message
  }
});

const DELETE_FAVORITE_START = 'DELETE_FAVORITE_START';

const deleteFavoriteStart = (movie, favoriteMovies) => ({
  type: DELETE_FAVORITE_START,
  movie,
  favoriteMovies
});

const DELETE_FAVORITE_COMPLETED = 'DELETE_FAVORITE_COMPLETED';

const deleteFavoriteCompleted = payload => ({
  type: DELETE_FAVORITE_COMPLETED,
  message: { ...payload }
});

const DELETE_FAVORITE_FAILED = 'DELETE_FAVORITE_FAILED';

const deleteFavoriteFailed = ({ message }) => ({
  type: DELETE_FAVORITE_FAILED,
  error: {
    message
  }
});

export {
  ADD_FAVORITE_START,
  ADD_FAVORITE_COMPLETED,
  ADD_FAVORITE_FAILED,
  addFavoriteStart,
  addFavoriteCompleted,
  addFavoriteFailed,
  GET_ALL_FAVORITES_START,
  GET_ALL_FAVORITES_COMPLETED,
  GET_ALL_FAVORITES_FAILED,
  getAllFavoritesStart,
  getAllFavoritesCompleted,
  getAllFavoritesFailed,
  UPDATE_FAVORITE_START,
  UPDATE_FAVORITE_COMPLETED,
  UPDATE_FAVORITE_FAILED,
  updateFavoriteStart,
  updateFavoriteCompleted,
  updateFavoriteFailed,
  DELETE_FAVORITE_START,
  DELETE_FAVORITE_COMPLETED,
  DELETE_FAVORITE_FAILED,
  deleteFavoriteStart,
  deleteFavoriteCompleted,
  deleteFavoriteFailed
};
