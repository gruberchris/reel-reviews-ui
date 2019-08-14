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

const FAVORITE_CREATED_START = 'FAVORITE_CREATED_START';

const favoriteCreatedStart = (favoriteCreated, movies) => ({
  type: FAVORITE_CREATED_START,
  favoriteCreated,
  movies
});

const FAVORITE_CREATED_COMPLETED = 'FAVORITE_CREATED_COMPLETED';

const favoriteCreatedCompleted = payload => ({
  type: FAVORITE_CREATED_COMPLETED,
  message: { ...payload }
});

const FAVORITE_CREATED_FAILED = 'FAVORITE_CREATED_FAILED';

const favoriteCreatedFailed = ({ message }) => ({
  type: FAVORITE_CREATED_FAILED,
  error: { message }
});

const FAVORITE_REMOVED_START = 'FAVORITE_REMOVED_START';

const favoriteRemovedStart = (favoriteRemoved, movies) => ({
  type: FAVORITE_REMOVED_START,
  favoriteRemoved,
  movies
});

const FAVORITE_REMOVED_COMPLETED = 'FAVORITE_REMOVED_COMPLETED';

const favoriteRemovedCompleted = payload => ({
  type: FAVORITE_REMOVED_COMPLETED,
  message: { ...payload }
});

const FAVORITE_REMOVED_FAILED = 'FAVORITE_REMOVED_FAILED';

const favoriteRemovedFailed = ({ message }) => ({
  type: FAVORITE_REMOVED_FAILED,
  error: { message }
});

const FAVORITE_UPDATED_START = 'FAVORITE_UPDATED_START';

const favoriteUpdatedStart = (favoriteUpdated, movies) => ({
  type: FAVORITE_UPDATED_START,
  favoriteUpdated,
  movies
});

const FAVORITE_UPDATED_COMPLETED = 'FAVORITE_UPDATED_COMPLETED';

const favoriteUpdatedCompleted = payload => ({
  type: FAVORITE_UPDATED_COMPLETED,
  message: { ...payload }
});

const FAVORITE_UPDATED_FAILED = 'FAVORITE_UPDATED_FAILED';

const favoriteUpdatedFailed = ({ message }) => ({
  type: FAVORITE_UPDATED_FAILED,
  error: { message }
});

export {
  FIND_MOVIES_BY_TITLE_START,
  FIND_MOVIES_BY_TITLE_COMPLETED,
  FIND_MOVIES_BY_TITLE_FAILED,
  findMoviesByTitleStart,
  findMoviesByTitleCompleted,
  findMoviesByTitleFailed,
  FAVORITE_CREATED_START,
  FAVORITE_CREATED_COMPLETED,
  FAVORITE_CREATED_FAILED,
  favoriteCreatedStart,
  favoriteCreatedCompleted,
  favoriteCreatedFailed,
  FAVORITE_REMOVED_START,
  FAVORITE_REMOVED_COMPLETED,
  FAVORITE_REMOVED_FAILED,
  favoriteRemovedStart,
  favoriteRemovedCompleted,
  favoriteRemovedFailed,
  FAVORITE_UPDATED_START,
  FAVORITE_UPDATED_COMPLETED,
  FAVORITE_UPDATED_FAILED,
  favoriteUpdatedStart,
  favoriteUpdatedCompleted,
  favoriteUpdatedFailed
};
