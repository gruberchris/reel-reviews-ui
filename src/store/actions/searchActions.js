const FIND_MOVIES_BY_TITLE_START = 'FIND_MOVIES_BY_TITLE_START';

const findMoviesByTitleStart = (movieTitle, currentPage, favoriteMovies) => ({
  type: FIND_MOVIES_BY_TITLE_START,
  movieTitle,
  currentPage,
  favoriteMovies
});

const FIND_MOVIES_BY_TITLE_COMPLETED = 'FIND_MOVIES_BY_TITLE_COMPLETED';

const findMoviesByTitleCompleted = payload => ({
  type: FIND_MOVIES_BY_TITLE_COMPLETED,
  message: { ...payload }
});

const FIND_MOVIES_BY_TITLE_FAILED = 'FIND_MOVIES_BY_TITLE_FAILED';

const findMoviesByTitleFailed = ({ message, friendlyErrorMessage }) => ({
  type: FIND_MOVIES_BY_TITLE_FAILED,
  error: {
    message,
    friendlyErrorMessage
  }
});

const APPEND_MOVIE_REVIEW_START = 'APPEND_MOVIE_REVIEW_START';

const appendMovieReviewStart = (movies, movieWithReview) => ({
  type: APPEND_MOVIE_REVIEW_START,
  movies,
  movieWithReview
});

const APPEND_MOVIE_REVIEW_COMPLETED = 'APPEND_MOVIE_REVIEW_COMPLETED';

const appendMovieReviewCompleted = payload => ({
  type: APPEND_MOVIE_REVIEW_COMPLETED,
  message: { ...payload }
});

const APPEND_MOVIE_REVIEW_FAILED = 'APPEND_MOVIE_REVIEW_FAILED';

const appendMovieReviewFailed = ({ message }) => ({
  type: APPEND_MOVIE_REVIEW_FAILED,
  error: { message }
});

export {
  FIND_MOVIES_BY_TITLE_START,
  FIND_MOVIES_BY_TITLE_COMPLETED,
  FIND_MOVIES_BY_TITLE_FAILED,
  findMoviesByTitleStart,
  findMoviesByTitleCompleted,
  findMoviesByTitleFailed,
  APPEND_MOVIE_REVIEW_START,
  APPEND_MOVIE_REVIEW_COMPLETED,
  APPEND_MOVIE_REVIEW_FAILED,
  appendMovieReviewStart,
  appendMovieReviewCompleted,
  appendMovieReviewFailed
};
