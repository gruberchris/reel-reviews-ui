const FIND_MOVIES_BY_TITLE_START = 'FIND_MOVIES_BY_TITLE_START';

const findMoviesByTitleStart = (movieTitle, currentPage) => ({
  type: FIND_MOVIES_BY_TITLE_START,
  movieTitle,
  currentPage
});

const FIND_MOVIES_BY_TITLE_COMPLETED = 'FIND_MOVIES_BY_TITLE_COMPLETED';

const findMoviesByTitleCompleted = payload => ({
  type: FIND_MOVIES_BY_TITLE_COMPLETED,
  message: {
    ...payload
  }
});

const FIND_MOVIES_BY_TITLE_FAILED = 'FIND_MOVIES_BY_TITLE_FAILED';

const findMoviesByTitleFailed = ({ message, friendlyErrorMessage }) => ({
  type: FIND_MOVIES_BY_TITLE_FAILED,
  error: {
    message,
    friendlyErrorMessage
  }
});

export {
  FIND_MOVIES_BY_TITLE_START,
  FIND_MOVIES_BY_TITLE_COMPLETED,
  FIND_MOVIES_BY_TITLE_FAILED,
  findMoviesByTitleStart,
  findMoviesByTitleCompleted,
  findMoviesByTitleFailed
};
