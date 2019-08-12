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
    case searchActions.FIND_MOVIES_BY_TITLE_COMPLETED:
      return {
        ...state,
        ...action.message
      };

    case searchActions.FIND_MOVIES_BY_TITLE_FAILED:
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
