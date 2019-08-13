import * as favoritesActions from '../actions/favoritesActions';

const INITIAL_STATE = {
  favoriteMovies: [],
  error: null,
  friendlyErrorMessage: ''
};

const update = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case favoritesActions.ADD_FAVORITE_COMPLETED:
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.message]
      };

    case favoritesActions.DELETE_FAVORITE_FAILED:
    case favoritesActions.UPDATE_FAVORITE_FAILED:
    case favoritesActions.GET_ALL_FAVORITES_FAILED:
    case favoritesActions.ADD_FAVORITE_FAILED:
      return {
        ...state,
        error: action.error.message,
        friendlyErrorMessage: action.error.friendlyErrorMessage
      };

    case favoritesActions.DELETE_FAVORITE_COMPLETED:
    case favoritesActions.UPDATE_FAVORITE_COMPLETED:
    case favoritesActions.GET_ALL_FAVORITES_COMPLETED:
      return {
        ...state,
        favoriteMovies: [...action.message.favoriteMovies]
      };

    default:
      return state;
  }
};

export default update;
