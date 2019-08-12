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
  message: {
    ...payload
  }
});

const ADD_FAVORITE_FAILED = 'ADD_FAVORITE_FAILED';

const addFavoriteFailed = ({ message }) => ({
  type: ADD_FAVORITE_FAILED,
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
  addFavoriteFailed
};
