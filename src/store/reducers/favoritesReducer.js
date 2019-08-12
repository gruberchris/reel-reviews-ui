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

    case favoritesActions.ADD_FAVORITE_FAILED:
      return {
        ...INITIAL_STATE,
        error: action.error.message,
        friendlyErrorMessage: action.error.friendlyErrorMessage
      };

    default:
      return state;
  }
};

export default update;
