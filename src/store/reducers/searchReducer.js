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
    case searchActions.APPEND_MOVIE_REVIEW_COMPLETED:
    case searchActions.FIND_MOVIES_BY_TITLE_COMPLETED:
      return {
        ...state,
        ...action.message
      };

    case searchActions.APPEND_MOVIE_REVIEW_FAILED:
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
