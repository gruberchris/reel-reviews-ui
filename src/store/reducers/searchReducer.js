import * as searchActions from '../actions/searchActions';

const INITIAL_STATE = {
  queryMovieTitle: '',
  movies: [],
  error: null,
  friendlyErrorMessage: '',
  currentPage: 1,
  totalResults: 0
};

const update = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchActions.FAVORITE_CREATED_COMPLETED:
    case searchActions.FAVORITE_REMOVED_COMPLETED:
    case searchActions.FAVORITE_UPDATED_COMPLETED:
    case searchActions.FIND_MOVIES_BY_TITLE_COMPLETED:
      return {
        ...state,
        ...action.message
      };

    case searchActions.FAVORITE_CREATED_FAILED:
    case searchActions.FAVORITE_REMOVED_FAILED:
    case searchActions.FAVORITE_UPDATED_FAILED:
    case searchActions.FIND_MOVIES_BY_TITLE_FAILED:
      return {
        ...state,
        error: action.error.message,
        friendlyErrorMessage: action.error.friendlyErrorMessage
      };

    default:
      return state;
  }
};

export default update;
